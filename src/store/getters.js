export default {
    isLoggedIn: state => !!state.token,
    getDataListItemByKey: state => (dataList, dataListKey, dataKey) => {
        if (state[dataList] && state[dataList][dataListKey]) {
            if (dataKey && Array === dataKey.constructor) {
                return dataKey.map(dataKeyItem => state[dataList][dataListKey][dataKeyItem]).join(', ')
            } else {
                return state[dataList][dataListKey][dataKey]
            }
        } else {
            return dataKey
        }
    },
    reservesFromAppCounter: state => state.reservesFromAppCounter > 99 ? '99+' : state.reservesFromAppCounter
}