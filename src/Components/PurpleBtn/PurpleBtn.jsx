import React from "react";
import './PurpleBtn.css';

function PurpleBtn(props) {
    return(
        <a href="https://wa.me/6281330087125" className="purple-btn border-0 text-capitalize text-dark text-decoration-none text-nowrap shadow-lg rounded">
            {props.btnTitle}
        </a>
    )
}

export default PurpleBtn;