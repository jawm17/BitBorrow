import React, {useEffect, useState} from "react";
import { ethers } from 'ethers';
import "./styles/userLoanStyle.css";

export default function UserLoan(props) {
    const [fundedBy, setFundedBy] = useState("");

    useEffect(() => {
        if(props.loanData.lender === "0x0000000000000000000000000000000000000000") {
            setFundedBy("");
        } else {
            setFundedBy(props.loanData.lender);
        }
    }, []);

    return (
        <div className="userLBody">
            <p>Loan Amount: {ethers.formatUnits(props.loanData.amount, 'ether')}</p>
            <p>Interest: {ethers.formatUnits(props.loanData.interest, 'ether')}</p>
            <p>Borrower: {props.loanData.borrower}</p>

            {
                fundedBy ?
                    <div className="fundLoanBtn">
                        Repay Loan
                    </div>
                    :
                    <div className="awaitingRepaymentBtn">
                        Awaiting funding
                    </div>
            }
        </div>
    );
}