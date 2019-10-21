import axios from "@/plugins/axios-instance";
import { apiUrls, keys } from "@/config/constants";

export default {
    login({ commit }, loginData) {
        return new Promise((resolve, reject) => {
            commit('auth_request');
            let rememberMe = loginData.rememberMe;
            if (axios.defaults.params) {
                delete axios.defaults.params[keys.token.param];
            }
            axios.post(apiUrls.login, loginData.user)
                .then(resp => {
                    if (resp.data['success']) {
                        const token = resp.data.data['api_token'],
                            user = resp.data.data;
                        axios.defaults.params = {};
                        axios.defaults.params[keys.token.param] = token;

                        if (rememberMe) {
                            localStorage.setItem(keys.token.local, token);
                            localStorage.setItem(keys.user.local, JSON.stringify(user));
                        }
                        commit('auth_success', { token, user });
                        resolve(resp)
                    } else {
                        commit('auth_error');
                        reject(resp)
                    }

                })
                .catch(err => {
                    commit('auth_error');
                    reject(err)
                })
        })
    },
    logout({ commit }) {
        return new Promise((resolve) => {
            commit('logout');
            axios.defaults.params = null;
            localStorage.removeItem(keys.token.local);
            localStorage.removeItem(keys.user.local);
            resolve()
        })
    },
    getDataList({ commit, state }, dataListKey) {
        return new Promise((resolve, reject) => {
            if (state[dataListKey]) {
                resolve(state[dataListKey]);
                return;
            }

            axios.get(apiUrls.dataList[dataListKey])
                .then(resp => {
                    if (resp && resp.data && resp.data.data && true === resp.data.success) {
                        commit('dataList', { key: dataListKey, value: resp.data.data });
                        resolve(resp.data.data)
                    } else {
                        reject(resp)
                    }
                })
                .catch(err => reject(err))
        })
    },
    toggleSidebar({ commit, state }) {
        localStorage.setItem(keys.sidebarMinimized.local, JSON.stringify(!state.sidebarMinimized));
        commit('toggleSidebar')
    },
    setItemToEdit({commit}, item) {
        commit('itemToEdit', item)
    },
    toggleBookingFullscreen({commit}) {
        commit('bookingFullscreen');
    },
    getReservesFromApp({commit}) {
        return new Promise((resolve, reject) => {
            axios.get(apiUrls.reserveFromApp, {params: {from_mobile: true}})
                .then(resp => {
                    if (resp && resp.data && resp.data.data && resp.data.data.items && true === resp.data.success) {
                        commit('reservesFromApp', resp.data.data.items);
                        resolve(resp.data.data.items)
                    } else {
                        reject(resp)
                    }
                })
                .catch(err => reject(err))
        })
    },
    getRestaurantSpaces({commit, state}) {
        return new Promise(((resolve, reject) => {
            if (state.restaurantSpaces) {
                resolve(state.restaurantSpaces)
            } else {
                axios.get(apiUrls.restaurantSpace)
                    .then(resp => {
                        if (resp.data.data && resp.data.data.items) {
                            commit('restaurantSpaces', resp.data.data.items);
                            resolve(resp.data.data.items);
                        }
                    })
                    .catch(error => reject(error))
            }
        }))
    }
}