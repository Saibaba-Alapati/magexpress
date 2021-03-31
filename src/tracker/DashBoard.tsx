import { AccountTree, Add,BubbleChart,Dashboard,FilterList,MoreHoriz, ReportProblem,Timeline} from '@material-ui/icons';
import '../styles/dashboard.scss';
export default function DashBoard() {
    return (
        <div>
            <div className="sidebar">
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div className="personInfo">
                        <div className="wrapper1">
                            <div id="avatar"></div>
                            <div id="nameAndRole">
                                <p id="userName">Saibaba Alapati</p>
                                <p id="userRole">Team Member</p>
                            </div>
                        </div>
                        <Add id="addIcon"/>
                    </div>
                    <div style={{height:'20px',width:'100%'}}></div>
                    <div className="menuList">
                        <button className="menuButton" id="dashboard">
                            <Dashboard id="menuButtonIcon" />
                            <p id="menuButtonText">Dashboard</p>
                        </button>
                        <button className="menuButton" id="projects">
                            <AccountTree id="menuButtonIcon" />
                            <p id="menuButtonText">Projects</p>
                        </button>
                        <button className="menuButton" id="issues">
                            <ReportProblem id="menuButtonIcon" />
                            <p id="menuButtonText">Issues</p>
                        </button>
                        <button className="menuButton" id="filters">
                            <FilterList id="menuButtonIcon" />
                            <p id="menuButtonText">Filters</p>
                        </button>
                        <button className="menuButton" id="roadmap">
                            <Timeline id="menuButtonIcon" />
                            <p id="menuButtonText">Roadmap</p>
                        </button>
                        <button className="menuButton" id="analytics">
                            <BubbleChart id="menuButtonIcon" />
                            <p id="menuButtonText">Analytics</p>
                        </button>
                    </div>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <p style={{color:'gray',fontSize:'larger'}}> Recent Projects</p>
                        <button className="recentProjectButton">
                            <div id="projectAvatar"></div>
                            <p id="projectName" >MagExpress</p>
                        </button>
                    </div>
                </div>
                <div className="appInfo">
                    <div id="wrapper2">
                        <div id="appSymbol">
                            <p>ME</p>
                        </div>
                        <div id="wrapper3">
                            <p id="appName">MagExpress</p>
                            <p id="version">Ver 1.0.0</p>
                        </div>
                    </div>
                    <button className="moreButton">
                        <MoreHoriz id="moreIcon"/>
                    </button>
                </div>
            </div>
        </div>
    )
}
