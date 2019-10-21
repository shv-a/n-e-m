import { keys } from "@/config/constants";

export default {
    user: JSON.parse(localStorage.getItem(keys.user.local)) || {},
    status: localStorage.getItem(keys.token.local) ? 'auth' : '',
    token: localStorage.getItem(keys.token.local) || '',
    restaurantSpaces: null,
    sidebarMinimized: JSON.parse(localStorage.getItem(keys.sidebarMinimized.local)) || false,
    itemToEditId: null,
    reservesFromAppCounter: 0,
    bookingState: null,
    fullscreenModeOn: false
}