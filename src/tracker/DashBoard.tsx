import '../styles/dashboard.scss';
import Sidebar from './Sidebar';
import SearchIcon from '@material-ui/icons/Search';
export default function DashBoard() {
    return (
        <div className="bodyOfPage">
            <Sidebar/>
            <div className="wrapper">
                <div className="search">
                    <div className="wrapper1">
                        <SearchIcon style={{color:'gray'}}/>
                        <input className="searchBar" type="text" placeholder= "Search anything Here..."/>
                    </div>
                </div>
            </div>
        </div>
    )
}
