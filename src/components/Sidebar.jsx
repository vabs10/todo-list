import React from 'react'
import {FaInbox, FaRegCalendar, FaRegCalendarAlt} from "react-icons/fa";

const Sidebar = ({selectedTab, setSelectedTab}) => {
    return (
        <div className="sidebar">
            <div className={selectedTab==="INBOX" ? "active" :""} onClick={ () => setSelectedTab("INBOX")}>
                <FaInbox className="icon"/>
                Inbox
            </div>
            <div className={selectedTab==="TODAY" ? "active" :""} onClick={ () => setSelectedTab("TODAY")}>
                <FaRegCalendar className="icon" />
                Today
            </div>
            <div className={selectedTab==="NEXT_7" ? "active" :""} onClick={ () => setSelectedTab("NEXT_7")}>
                <FaRegCalendarAlt className="icon" />
                Next Seven Days
            </div>
        </div>
    )
}

export default Sidebar
