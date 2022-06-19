import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className="topbarContainer">

      {/* Top Bar Left Side */}
        <div className="topbarLeft">
          <span className="logo">OrVerse</span>
        </div>

        {/* Top Bar Center */}
        <div className="topbarCenter">
          <div className="searchBar">
            <Search className="searchIcon"/>
            <input placeholder="search for friends, posts or any video" className="searchInput" />
          </div>
        </div>

        {/* Top Bar Right Side */}
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>

          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">5</span>
            </div>
          </div>
          <img src="/assets/person/pp13.jpg" alt="" className="topbarImage" />
        </div>
    </div>
  )
}
