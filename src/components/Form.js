import React from "react";
import { Link } from "react-router-dom";
const Form = () => {

  return (
    <div>
      <div className="">
        <form>
          <input type="text"></input>
          <Link to="/purchase-form/ticket">
            <button className="btn btn-accent" onClick={orderGenerator}>
              Pagar
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Form;
