import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { faCommentAlt, faHome, faList, faMoneyCheckAlt, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import {
    Switch,
    Route,
    useRouteMatch,
    NavLink
  } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddProduct from './AddProduct/AddProduct';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllBlogs from './ManageAllBlogs/ManageAllBlogs';
import ManageAllProducts from './ManageAllProducts/ManageAllProducts';
import MyBlogs from './MyBlogs/MyBlogs';
import './Dashboard.css';
// import AdminRoute from '../AdminRoute/AdminRoute';

// import Aos from "aos";
// import "aos/dist/aos.css";

const Dashboard = () => {
    let { path, url } = useRouteMatch();
  const { user, admin, logOut } = useAuth();
  console.log(user);
    //icons 
    const home = <FontAwesomeIcon icon={faHome}/>
    const clipboard = <FontAwesomeIcon icon={faClipboard}/>
    const list = <FontAwesomeIcon icon={faList}/>
    const superUser = <FontAwesomeIcon icon={faUserShield}/>
    const payment = <FontAwesomeIcon icon={faMoneyCheckAlt}/>
    const comment = <FontAwesomeIcon icon={faCommentAlt}/>

    // animation on scroll

    // useEffect(() =>{
    //   Aos.init({duration : 1000});
    // },[]);

    return (
        <div className="dashboard-container">
        <div className="dashboard-sidebar">
            <h1 className="text-center my-5">Menu</h1>
            {/* links*/}
                <ul className="dashboard-menu">
                    {/* home route */}
                    <li className="nav-item fw-bold text-light">
                    <NavLink 
                         activeStyle={{
                         fontWeight: "bold",
                         color: "#64D9BB"
                      }}
                    className="nav-link" to={`${url}`}><span className="text-light">{home} </span>Dashboard Home</NavLink> 
                    </li>
                    {
                        !admin && (
                            <li className="nav-item fw-bold">
                            <NavLink
                              activeStyle={{
                                fontWeight: "bold",
                                color: "#F04794"
                              }}
                            className="nav-link" to={`${url}/myBlogs`}>
                                <span className="text-light">{list} </span>My Blogs
                                </NavLink> 
                            </li>
                        )
                    }
                    {
                        user?.email | admin && (
                            <li className="nav-item fw-bold">
                            <NavLink
                              activeStyle={{
                                fontWeight: "bold",
                                color: "#F04794"
                              }}
                            className="nav-link" to={`${url}/myBlogs`}>
                                <span className="text-light">{list} </span>My Blogs
                                </NavLink> 
                            </li>
                        )
                    }

                    {/* {
                        admin && (
                            <li className="nav-item fw-bold">
                            <NavLink 
                              activeStyle={{
                                fontWeight: "bold",
                                color: "#F04794"
                              }}
                            className="nav-link" to={`${url}/review`}><span className="text-light">{comment} </span>Leave a Review</NavLink>
                            </li>
                        )
                    } */}

                    {
                        admin && (
                                <li className="nav-item fw-bold">
                                <NavLink 
                                  activeStyle={{
                                    fontWeight: "bold",
                                    color: "#F04794"
                                  }}
                                className="nav-link" to={`${url}/addProduct`}><span className="text-light">{clipboard} </span>Post a Blog</NavLink>
                                </li>
                        )
                    }
                    {/* {
                        admin && (
                                <li className="nav-item fw-bold">
                                <NavLink 
                                  activeStyle={{
                                    fontWeight: "bold",
                                    color: "#F04794"
                                  }}
                                className="nav-link" to={`${url}/manageProducts`}><span className="text-light">{clipboard} </span>Manage All Products</NavLink>
                                </li>
                        )
                    } */}
                    {
                        admin && (
                                <li className="nav-item fw-bold">
                                <NavLink 
                                  activeStyle={{
                                    fontWeight: "bold",
                                    color: "#F04794"
                                  }}
                                className="nav-link" to={`${url}/manageBlogs`}><span className="text-light">{list} </span>Manage All  Blogs</NavLink>
                                </li>
                        )
                    }
                    {
                        admin && (
                            <li className="nav-item fw-bold">
                            <NavLink 
                              activeStyle={{
                                fontWeight: "bold",
                                color: "#F04794"
                              }}
                            className="nav-link" to={`${url}/makeAdmin`}><span className="text-light">{superUser} </span>Make an Admin</NavLink>
                         </li>
                        )
                    }

                        <li className="nav-item fw-bold">
                            <NavLink 
                              activeStyle={{
                                fontWeight: "bold",
                                color: "#F04794"
                              }}
                            className="nav-link" to="/home"><span className="text-light">{home} </span> Go To Home</NavLink>
                         </li>
                </ul>
            {/*end of links*/}

            {/* <button onClick={logOut} className="btn btn-danger">Logout</button> */}
             
        </div>
        <div className="dashboard-body">
            <Switch>
                    {/* home route */}
                    <Route exact path={path}>
                        <DashboardHome/>
                    </Route>
                    <Route path={`${path}/myBlogs`}>
                        <MyBlogs/>
                    </Route>
                    {/* <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route> */}
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct/>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageAllProducts/>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageBlogs`}>
                        <ManageAllBlogs/>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin/>
                    </AdminRoute>
                </Switch>
        </div>
        </div>
    );
};

export default Dashboard;