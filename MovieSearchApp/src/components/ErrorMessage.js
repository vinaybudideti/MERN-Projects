import React from 'react';

const ErrorMessage = ({ message }) => {
  return <div className="alert alert-danger text-center">{message}</div>;
};

export default ErrorMessage;
