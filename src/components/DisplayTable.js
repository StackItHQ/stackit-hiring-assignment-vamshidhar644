import React, { useState } from 'react';
import { gapi } from 'gapi-script';

const DisplayTable = ({ selectedColumns, csvData }) => {
  const [googleSheetId, setGoogleSheetId] = useState(null);

  const createGoogleSheet = () => {
    // Initialize the Google API client
    gapi.load('client', () => {
      gapi.client.init({
        apiKey: 'AIzaSyBoPiT6TJPCyMhx9U6MhrdFxEFM2IJq4Qc',
        clientId:
          '133231470260-hh475rmima8krg08ghn5hs0gln3137lr.apps.googleusercontent.com',
        discoveryDocs: [
          'https://sheets.googleapis.com/$discovery/rest?version=v4',
        ],
        scope: 'https://www.googleapis.com/auth/spreadsheets',
      });

      // Authenticate the user
      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          // Create a new Google Sheet
          gapi.client.sheets.spreadsheets
            .create({
              properties: {
                title: 'My Imported CSV Data', // Replace with your desired title
              },
            })
            .then((response) => {
              const spreadsheetId = response.result.spreadsheetId;
              setGoogleSheetId(spreadsheetId);

              // Add the data to the Google Sheet
              const values = csvData.map((row) =>
                selectedColumns.map((columnName) => row[columnName])
              );

              gapi.client.sheets.spreadsheets.values
                .update({
                  spreadsheetId,
                  range: 'A1', // Update this to specify the cell range where you want to insert data
                  valueInputOption: 'RAW',
                  resource: {
                    values,
                  },
                })
                .then(() => {
                  console.log('CSV data imported successfully.');
                });
            });
        });
    });
  };
  return (
    <div className="table__container">
      <h2>CSV Data</h2>
      <div>
        {csvData && selectedColumns.length > 0 && (
          <button onClick={createGoogleSheet}>Create Google Sheet</button>
        )}
        {googleSheetId && (
          <p>
            Google Sheet created click on this {' '}
            <a
              href={`https://docs.google.com/spreadsheets/d/${googleSheetId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link{' '}
            </a>
          </p>
        )}
      </div>
      <table>
        <thead>
          <tr>
            {selectedColumns.map((columnName) => (
              <th key={columnName}>{columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, index) => (
            <tr key={index}>
              {selectedColumns.map((columnName) => (
                <td key={columnName}>{row[columnName]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTable;
