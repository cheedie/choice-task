import React, { useEffect } from "react";

function Alert({ removeAlert }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  });
  return <p className="alert alert-danger">please enter value</p>;
}

export default Alert;
