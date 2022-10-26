import React from "react";
import { Link } from "react-router-dom";

function TripButton({ className }) {
  return (
    <div className="text-center">
      <button className="btn btn-outline-secondary text-center" size="lg">
        <Link to="/trips">View Trips</Link>
      </button>
    </div>
    
  );
}

export default TripButton;