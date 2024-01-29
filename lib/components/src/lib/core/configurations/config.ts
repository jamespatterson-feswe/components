import { ENV_CONFIG } from "../interfaces";

export const enum ENVIRONMENTS {
    LOCAL = 'local',
    DEMO = 'demo',
    DEV = 'dev',
    PROD = 'prod',
    QA = 'qa'
}

export const enum METHODS {
    GET = 'get',
    PUT = 'put',
    POST = 'post',
    DELETE = 'delete'
}

export const baseConfiration = {
    api: {
        category: '/category/',
        categories: '/categories',
        domain: 'https://fakestoreapi.com',
        limit: 'limit=',
        login: '/auth/login',
        products: '/products',
        sort: {
            asc: 'sort=asc',
            desc: 'sort=desc'
        },
        users: '/users'
    }
};

export const ENV_CONFIGS: Record<string, ENV_CONFIG> = {
    [ENVIRONMENTS.DEMO]: {
        ...baseConfiration,
        api_key: '',
        domain: '/demo',
        lib: ''
    },
    [ENVIRONMENTS.DEV]: {
        ...baseConfiration,
        api_key: '',
        domain: '/dev',
        lib: ''
    },
    [ENVIRONMENTS.LOCAL]: {
        ...baseConfiration,
        api_key: '',
        domain: '/qa',
        lib: ''
    },
    [ENVIRONMENTS.PROD]: {
        ...baseConfiration,
        api_key: '',
        domain: '/prod',
        lib: ''
    },
    [ENVIRONMENTS.QA]: {
        ...baseConfiration,
        api_key: '',
        domain: '/qa',
        lib: ''
    },
};