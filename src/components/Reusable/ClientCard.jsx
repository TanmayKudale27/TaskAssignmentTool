import React from "react";

function ClientCard({client}) {
  return (
    <div className="client">
      <div className="client-profile">
        <img src={client.client_profile} alt="" />
      </div>
      <button className="Update-Btn">Show Updates</button>
    </div>
  );
}

export default ClientCard;
