import React from "react";
import { Routes, Route } from "react-router-dom";

import { privateRoutes, publicRoutes } from "../router";

const AppRouter = () => {
    const isAuth = true;
    return (
        <Routes>
            {isAuth 
                ?
                    privateRoutes.map(route => 
                        <Route 
                            key={route.path}
                            path={route.path} 
                            element={<route.component />} 
                            exact={route.exact}
                        /> 
                    )
                :
                    publicRoutes.map(route => 
                        <Route 
                            key={route.path}
                            path={route.path} 
                            element={<route.component />} 
                            exact={route.exact}
                        /> 
                    )
            }
        </Routes>
    );
};

export default AppRouter;