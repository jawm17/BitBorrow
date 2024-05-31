import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';
import "./styles/loanRequestStyle.css";

export default function FundedLoan(props) {
    const [fundedBy, setFundedBy] = useState("");

    useEffect(() => {
        if (props.loanData.lender === "0x0000000000000000000000000000000000000000") {
            setFundedBy("");
        } else {
            setFundedBy(props.loanData.lender);
        }
        console.log(props.loanData.lender === "0x0000000000000000000000000000000000000000")
    }, []);

    return (
        <div className="loanReqBody">
            <p>Loan Amount: {ethers.formatUnits(props.loanData.amount, 'ether')} rBTC</p>
            <p>Interest: {ethers.formatUnits(props.loanData.interest, 'ether')} rBTC</p>
            <p>Borrower: {props.loanData.borrower}</p>
            <p>Funded: {"true"}</p>

            {
                props.loanData.repaid ?
                    <div className="fundLoanBtn">
                        Loan repaid
                    </div>
                    :
                    <div className="awaitingRepaymentBtn">
                        Awaiting repayment
                    </div>
            }
        </div>
    );
}