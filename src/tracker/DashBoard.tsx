import React from 'react';
import '../styles/dashboard.scss';
import Sidebar from './Sidebar';
import SearchIcon from '@material-ui/icons/Search';
export default function DashBoard() {
    return (
        <div className="bodyOfPage">
            <div className="sidebarWrapper">
                <Sidebar/>
            </div>
            <div className="bodyOfDashboard">
                <div className="search">
                    <SearchIcon style={{color:'gray'}}/>
                    <input className="searchBar" type="text" placeholder= "Search anything Here..."/>
                </div>
            </div>
        </div>
    )
}
