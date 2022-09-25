import React, { useState } from "react";

import SidebarData from "../config/SidebarData";
import logo from "../config/default-profile.png";

const SubMenuHeader = (props) => {
    return (
        <a href="#1">
            <i className={props.item.icon}></i>
            <span className="link_name">{props.item.title}</span>
        </a>
    );
};

const SubMenuHover = (props) => {
    const dropdown = typeof props.item.subNav != "undefined";

    return (
        <ul className="sub-menu">
            <li>
                <a className="link_name" href="#1">
                    {props.item.title}
                </a>
            </li>
            {dropdown &&
                props.item.subNav.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href="#1">{item.title}</a>
                        </li>
                    );
                })}
        </ul>
    );
};

const SubMenuDropdown = (props) => {
    const dropdown = typeof props.item.subMenu == "undefined";

    return (
        <li className={props.arrow ? "showMenu" : ""}>
            <div className="iocn-link">
                <SubMenuHeader item={props.item} />
                {dropdown && <i className="bx bxs-chevron-down arrow" onClick={props.arrowChange}></i>}
            </div>
            <SubMenuHover item={props.item} />
        </li>
    );
};

const SubMenu = ({ item }) => {
    const [toggleClass, setToggleClass] = useState(false);
    //const showSubnav = () => setSubnav(!subnav);

    const subnavChangeHandler = () => {
        setToggleClass((current) => !current);
    };

    if (item.subNav) {
        return <SubMenuDropdown arrow={toggleClass} arrowChange={subnavChangeHandler} item={item}></SubMenuDropdown>;
    } else {
        return (
            <li>
                <SubMenuHeader item={item} />
                <SubMenuHover item={item} />
            </li>
        );
    }
};

const Darkmode = () => {
    const [mode, setMode] = useState(true);

    const modeChangeHandler = () => {
        setMode((current) => !current);
    };

    return (
        <li className={"mode " + (mode ? "dark" : "light")}>
            <div className="sun-moon">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
            </div>
            <span className="mode-text text">{mode ? "Dark mode" : "Light Mode"}</span>

            <div className="toggle-switch" onClick={modeChangeHandler}>
                <span className="switch"></span>
            </div>
        </li>
    );
};

const Profile = () => {
    return (
        <li className="profile">
            <div className="profile-details">
                <div className="profile-content">
                    <img src={logo} alt="profileImg"></img>
                    <div className="name-job">
                        <div className="profile_name">Ryan McFarland</div>
                    </div>
                </div>
                <div className="profile-picture">
                    <i className="bx bx-log-out icon"></i>
                </div>
            </div>
        </li>
    );
};

const Sidebar = (props) => {
    return (
        <div className={"sidebar " + (props.open ? "" : "close")}>
            <div className="logo-details">
                <i className="bx bxl-c-plus-plus"></i>
                <span className="logo_name">Insertleft</span>
            </div>
            <div className="menu-bar">
                <ul className="nav-links">
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </ul>
                <div className="bottom-content">
                    <Darkmode />
                    <Profile />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
