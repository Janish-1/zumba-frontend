import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Transaction = () => {
  // Define initial state for transactionData
  const [transactionData, setTransactionData] = useState([]);
  console.log("transaction data",transactionData)
  const BASE_URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    // Get user ID from localStorage (replace 'userId' with your key)
    const user_id = localStorage.getItem('userId');

    // Fetch transaction details using Axios
    axios.get(`${BASE_URL}/api/transactions/${user_id}/`)
      .then(response => {
        // Set the fetched data to transactionData state
        setTransactionData(response.data);
      })
      .catch(error => {
        console.error('Error fetching transaction details:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className='container mx-auto'>
<div className='flex flex-row items-center ' >
                    <Link to={'/profile-main'}>
                        <img
                            className="h-[34px] object-contain"
                            loading="eager"
                            alt=""
                            src="/right.svg"
                        />
                    </Link>
                    <h1 className=" text-3xl pl-[25px] text-end text-9xl text-firebrick font-roboto">Transactions Details</h1> {/* Apply text-center class */}
                    <div className='hidden'>{" "}</div>
                </div>
      {/* <h1 className='text-center text-3xl text-firebrick font-bold mb-8 mt-4 md:mt-8'>Transaction Details</h1> */}
      <div className='flex flex-col items-center m-5'>
        {transactionData.map((transaction) => (
          <div key={transaction.id} className='bg-darkslategray-200 p-4 rounded-lg shadow-md mb-4 w-full md:w-1/2'>
            <p className='text-lg text-firebrick font-semibold'>Transaction ID: {transaction.transaction_id}</p>
            <p className='text-lg text-white'>Amount: Rs {transaction.amount}</p>
            <p className='text-lg text-white'>Subscription Plan: {transaction.subscription_plan?transaction.subscription_plan:"Inactive"}</p>
            <p className='text-lg text-white'>Status: {transaction.status}</p>
            <p className='text-lg text-white'>DateTime: {transaction.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transaction;
