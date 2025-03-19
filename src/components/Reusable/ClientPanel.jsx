import React, { useEffect, useState } from "react";
import ClientCard from "./ClientCard";

function ClientPanel() {
  const [clientData, setClientData] = useState(null);

  async function getClient() {
    let response = await fetch("http://localhost:3000/clients");
    let data = await response.json();
    return data;
  }

  useEffect(() => {
    getClient().then((data) => setClientData(data));
  }, []);
  return (
    <div className="client-list">
      {
        clientData ? clientData.map((client,index)=>{
          return <ClientCard key={index} client={client}/>;
        }):""
      }
    </div>
  );
}

export default ClientPanel;
