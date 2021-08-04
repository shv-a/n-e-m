const env = {
    'production': 'http://localhost:8000',
    'development': 'http://localhost:8000'
};

const apiUrls = {
    baseURL: env[process.env.NODE_ENV] || env.development,
    login: '/login',
    user: '/users',
    client: '/clients',
    event: '/events',
    reserve: '/reserves',
    restaurant: '/restaurants',
    restaurantSpace: '/restaurant_spaces',
    table: '/tables',
    tableGroup: '/tableGroups',
    tablePreset: '/table_presets',
    tablesForDate: '/tables_for_date',
    booking: '/booking',
    reserveFromApp: '/reserves',


    pasta: {
        post: '/pasta',
        get: '/pasta/:id',
        getAll: '/pasta',
    }
};

const keys = {
    user: {
        local: 'user'
    },
    token: {
        param: 'api_token',
        local: '_x-_'
    },
    sidebarMinimized: {
        local: '_sbm_'
    }
};

const misc = {
    dateUnsetLabel: 'Всегда'
};

export { apiUrls, keys, misc }
