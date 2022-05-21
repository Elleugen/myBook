import { Profiler } from 'react';
import {dashboardTypes} from './';

export const setDashboard = (payload) => ({
    type: dashboardTypes.SET_DASHBOARD,
    payload,
});
// export const setProducts = (payload) => ({
//     type: dashboardTypes.SET_PRODUCTS,
//     payload,
// });

export const setDefaultDashboard = () => ({
    type: dashboardTypes.SET_DEFAULT_DASHBOARD,
});
// export const setDefaultproducts = () => ({
//     type: dashboardTypes.SET_DEFAULT_PRODUCTS,
// });
