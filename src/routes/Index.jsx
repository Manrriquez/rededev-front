import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loadable from '../components/Loading/Loadable';

const Home = Loadable(lazy(() => import('../pages/Home/index')));

// import Home from '../pages/Home/index'

export default function MyRoutes() {
    
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
    );
}

