import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Error({ error }) {
  return (
    <div>
      <div className="alert alert-danger" role="alert" primary-color="red">
        {error}
        </div>


      </div>
      );
}
