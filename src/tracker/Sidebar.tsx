import Avatar from '@material-ui/core/Avatar';
import { AccountTree, Add,BubbleChart,Dashboard,FilterList,MoreHoriz, ReportProblem,Timeline} from '@material-ui/icons';
import '../styles/sidebar.scss'
export default function Sidebar() {
    const username = "Saibaba Alapati"
    return (
        <div className="sidebar">
            <div>
                <div className="personInfo">
                    <div className="pack1">
                        <Avatar style={{color:'white',backgroundColor:'purple'}}>S</Avatar>
                        <div style={{width:'10px',height:'100%'}}></div>
                        <p id='name' style={{fontSize:'larger'}}>{username}</p>
                    </div>
                    <div className="pack2">
                        <Add style={{color:'white',backgroundColor:'purple',borderRadius:'10px',padding:'10px'}}/>
                    </div>
                </div>
                <div className="sidenav">
                    <button className="menuButton" id="dashboard">
                        <Dashboard id="menuButtonIcon"/>
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
                <div className="recentProjects">
                    <label
                    style={{
                        color:'gray',
                        padding:'5px'
                    }}>
                        recent projects
                    </label>
                </div>
            </div>
            <div className="logo">
                <p id="appLogo">ME</p>
                <div style={{display:'flex',flexDirection:'column',color:'white'}}>
                    <p style={{fontSize:'larger'}}>MagExpress</p>
                </div>
                <MoreHoriz style={{color:'white',backgroundColor:'#121212',margin:'4px'}}/>
            </div>
        </div>
    )
}
