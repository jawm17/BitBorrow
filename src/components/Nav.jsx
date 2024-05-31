import React from "react";
import { useWeb3Modal } from '@web3modal/ethers/react'
import { useNavigate } from "react-router-dom";
import { useWeb3ModalAccount } from '@web3modal/ethers/react'

export default function Nav(props) {
    const navigate = useNavigate();
    const { open } = useWeb3Modal();
    const { address } = useWeb3ModalAccount()

    return (
            <nav>
                <p class="sitename" id={props.page === "home" ? "selectedNav": ""} onClick={() => navigate("/")}>BitBorrow</p>
                <p class="menu" id={props.page === "borrow" ? "selectedNav": ""} onClick={address ?  () => navigate("/borrow") : open()}>Borrow</p>
                <p class="menu" id={props.page === "lend" ? "selectedNav": ""} onClick={address ? () => navigate("/lend") : open()}>Lend</p>
                <p class="menu" onClick={() => window.open("https://github.com/jawm17/BitBorrow", "_blank")}>Docs</p>
                <p class="menu" id={props.page === "about" ? "selectedNav": ""} onClick={() => window.open("https://www.canva.com/design/DAGG0F90lUk/rDOyq2vKG2mXtiSNc3CKpw/edit?utm_content=DAGG0F90lUk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", "_blank")}>About us</p>
                <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 9H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1z" /></svg>
            </nav>
    )
}
    