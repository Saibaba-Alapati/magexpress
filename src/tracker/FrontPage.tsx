import React from 'react';
import Sidebar from './Sidebar';
import '../styles/frontpage.scss'
import ProjectPage from './ProjectPage';
export default function FrontPage(){
    return(
        <div className="frontbody">
            <div className="sidebarWrapper">
                <Sidebar/>
            </div>
            <div className="contentDisplay">
                <ProjectPage/>
            </div>
        </div>
    )
}
<div>

</div>