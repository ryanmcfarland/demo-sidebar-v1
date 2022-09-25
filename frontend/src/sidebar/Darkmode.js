import React from "react";

const Darkmode = () => {
    return (
        <li class="mode">
            <div class="sun-moon">
                <i class="bx bx-moon icon moon"></i>
                <i class="bx bx-sun icon sun"></i>
            </div>
            <span class="mode-text text">Dark mode</span>

            <div class="toggle-switch">
                <span class="switch"></span>
            </div>
        </li>
    );
};

export default Darkmode;
