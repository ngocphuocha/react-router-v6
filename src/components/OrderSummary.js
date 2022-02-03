import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const navigate = useNavigate()

  const redirectBack = () => {
    navigate(-1)
  }

  return <div>
    <button onClick={redirectBack}>GO BACK</button>
  </div>;
};

export default OrderSummary;
