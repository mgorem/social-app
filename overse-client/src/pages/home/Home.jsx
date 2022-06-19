import './home.css'
import Leftbar from "../../components/leftbar/Leftbar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feedbar/Feed";
import Rightbar from "../../components/rightbar/Rightbar";


export default function Home() {
    return (
        <div>
            <Topbar />
            <div className="homeContainer">
                <Leftbar />
                <Feed />
                <Rightbar />
            </div>
        </div>
    )
}