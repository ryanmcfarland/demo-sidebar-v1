import "./insertleft.css";

import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";

function App() {
    const [toggleClass, setToggleClass] = useState(true);

    const sidebarChangeHandler = () => {
        setToggleClass((current) => !current);
    };

    return (
        <React.StrictMode>
            <Sidebar open={toggleClass}></Sidebar>
            <section className="home-section">
                <div className="home-content">
                    <i className="bx bx-menu" onClick={sidebarChangeHandler}></i>
                    <span className="text">Drop Down Sidebar</span>
                </div>
            </section>
        </React.StrictMode>
    );
}

export default App;
