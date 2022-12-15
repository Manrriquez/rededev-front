import { lazy } from 'react';

import Loadable from '../components/Loading/Loadable';

const Home = Loadable(lazy(() => import('../pages/Home')));


const home = {
    path: '/',
    element: <Home />,
};

export default home;
