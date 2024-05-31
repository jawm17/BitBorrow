import React from "react";
import { ethers } from 'ethers';
import "./styles/userLoanStyle.css";

export default function UserLoan(props) {

    return (
        <div className="userLBody">
                 <p>Loan Amount: {ethers.formatUnits(props.loanData.amount, 'ether')}</p>
                <p>Interest: {props.loanData.interest.toString()}</p>
                <p>Borrower: {props.loanData.borrower}</p>
        </div>
    );
}