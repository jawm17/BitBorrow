import React from "react";
import { ethers } from 'ethers';
import "./styles/loanRequestStyle.css";

export default function LoanRequest(props) {

    return (
        <div className="loanReqBody">
            <p>Loan Amount: {ethers.formatUnits(props.loanData.amount, 'ether')}</p>
            <p>Interest: {props.loanData.interest.toString()}</p>
            <p>Borrower: {props.loanData.borrower}</p>

            <div className="fundLoanBtn" onClick={() => props.fundLoan(props.index)}>
                Fund Loan Request
            </div>
        </div>
    );
}