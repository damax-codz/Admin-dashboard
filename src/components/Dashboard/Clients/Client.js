import React, { useEffect, useState } from "react";
import company from "../../../images/company.jpg";
import "./Client.css";

const Client = () => {
  const [Client, setClient] = useState([]);

  const url = "https://fakerapi.it/api/v1/companies?_quantity=10";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setClient(data.data));
  }, []);

  console.log(Client);

  return (
    <div className="client">
        <h2>Clients</h2>
      <div className="client-set">
        <div className="client-tab">
          <table>
            <thead>
              <tr>
                <th> IMAGE</th>
                <th> FULL NAME</th>
                <th> PHONE NO</th>
                <th> EMAIL</th>

              </tr>

              <tr></tr>
            </thead>

            <tbody>
              {Client
                ? Client?.map((Client, idx) => (
                    <tr key={idx}>
                      <td> {<img src={company} alt="a Fufu2" />}</td>

                      <td><span> name</span> </td>
                      <td> {Client.phone}</td>
                      <td> {Client.email}</td>

                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Client;
