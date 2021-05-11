import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import '../styles/projectpage.scss';
export default function ProjectPage(){
    return(
        <div className="bodyOfPage">
            <button className="createButton">create project</button>
            <h1 style={{color:'white'}}>Projects</h1>
            <div className="search">
                <SearchIcon style={{color:'gray'}}/>
                <input className="searchBar" type="text" placeholder= "Search anything Here..."/>
            </div>
            <label>All projects</label>
        </div>
    )
}