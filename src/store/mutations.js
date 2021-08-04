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
    showServerMessage(state, message) {
        const messageId = Date.now();
        message.id = messageId;
        state.messages.push(message);
        setTimeout(() => {
            state.messages.splice(state.messages.findIndex( message => message.id === messageId ))
        }, 3000)

    }
}
