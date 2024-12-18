import React from "react";
import { useLocation } from "react-router-dom";
import "./CardDetails.css";

const CardDetails = () => {
  const location = useLocation();
  const { state } = location;

  if (!state) {
    return <div className="details-container">No details available</div>;
  }

  const { image, details, heading } = state;

  return (
    <div className="details-container">
      <div className="details-image-container">
        <img src={image} alt="Card" className="details-image" />
      </div>
      <div className="details-table-container">
        <h2 className="table-heading">{heading}</h2>
        <table className="details-table">
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(details).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
        <button className="details-button">Know More</button>
        <button className="teamdetails-button">Team Details</button>
        </div>
        
      </div>
    </div>
  );
};

export default CardDetails;
