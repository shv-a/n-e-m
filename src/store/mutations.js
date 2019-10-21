export default {
    auth_request(state) {
        state.status = 'loading'
    },
    auth_success(state, { token, user }) {
        state.status = 'auth';
        state.token = token;
        state.user = user
    },
    auth_error(state) {
        state.status = 'error'
    },
    logout(state) {
        state.status = '';
        state.token = '';
        state.user = {}
    },
    dataList(state, { key: dataListKey, value: data }) {
        state[dataListKey] = data
    },
    toggleSidebar(state) {
        state.sidebarMinimized = !state.sidebarMinimized;
    },
    bookingFullscreen(state) {
        state.fullscreenModeOn = !state.fullscreenModeOn;
    },
    itemToEdit(state, item) {
        state.itemToEdit = item
    },
    reservesFromApp(state, items) {
        state.reservesFromAppCounter = typeof items === 'object' ? items.length : 0
    },
    restaurantSpaces(state, items) {
        state.restaurantSpaces = items
    }
}