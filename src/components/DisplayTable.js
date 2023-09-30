import React from 'react';

const DisplayTable = ({ selectedColumns, csvData }) => {
  return (
    <div>
      <h2>CSV Data</h2>
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
