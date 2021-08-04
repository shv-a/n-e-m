import { keys } from "@/config/constants";

export default {
    user: JSON.parse(localStorage.getItem(keys.user.local)) || {},
    status: localStorage.getItem(keys.token.local) ? 'auth' : '',
    token: localStorage.getItem(keys.token.local) || '',
    messages: [
        {
            text: 'message 1',
            color: 'success'
        },
        {
            text: 'message 2',
            color: 'info'
        },
        {
            text: 'message 3',
            color: 'warning'
        },
        {
            text: 'message 4',
            color: 'error'
        }
    ]
}
