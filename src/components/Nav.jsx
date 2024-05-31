import React from "react";
import { useNavigate } from "react-router-dom";

export default function Nav(props) {
    const navigate = useNavigate();
    return (
            <nav>
                <p class="sitename" id={props.page === "home" ? "selectedNav": ""} onClick={() => navigate("/")}>BitBorrow</p>
                <p class="menu" id={props.page === "borrow" ? "selectedNav": ""} onClick={() => navigate("/borrow")}>Borrow</p>
                <p class="menu" id={props.page === "lend" ? "selectedNav": ""} onClick={() => navigate("/lend")}>Lend</p>
                <p class="menu">Docs</p>
                <p class="menu" id={props.page === "about" ? "selectedNav": ""}>About us</p>
                <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 9H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1z" /></svg>
            </nav>
    )
}
        