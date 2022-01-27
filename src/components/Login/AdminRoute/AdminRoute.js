import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user,admin, isLoading } = useAuth();
    if (isLoading) {
        return (<div className=" flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>)
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email && admin ?
                    (children) :
                    (<Redirect to={{
                pathname: '/',
                state: {from: location}
            }}
            />
            )
            }
        />
    );
};

export default AdminRoute;