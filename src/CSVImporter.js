import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import DisplayTable from './components/table/DisplayTable';
import CheckColumns from './components/checkBoxes/CheckColumns';
import Filter from './components/filter/Filter';

const CSVImporter = () => {
  const [csvData, setCsvData] = useState(null);
  const [selectedColumns, setSelectedColumns] = useState([]);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    // Read the CSV file
    const reader = new FileReader();

    reader.onload = (event) => {
      const csvText = event.target.result;

      // Parse the CSV data using PapaParse
      Papa.parse(csvText, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (result) => {
          // Handle the parsed data here
          setCsvData(result.data);

          // Initialize selectedColumns with all available columns
          setSelectedColumns(Object.keys(result.data[0] || {}));
        },
        error: (error) => {
          console.error('CSV parsing error:', error);
        },
      });
    };

    reader.readAsText(file);
  };

  const toggleColumnSelection = (columnName) => {
    if (selectedColumns.includes(columnName)) {
      setSelectedColumns(selectedColumns.filter((col) => col !== columnName));
    } else {
      setSelectedColumns([...selectedColumns, columnName]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.csv',
  });

  const handleFilter = (data) => {
    setCsvData(data);
  };

  return (
    <div>
      <div {...getRootProps()} className="dropZone">
        <input {...getInputProps()} />
        <p>Drag & drop a CSV file here</p>
      </div>

      {csvData && csvData.length > 0 && (
        <CheckColumns
          csvData={csvData}
          selectedColumns={selectedColumns}
          toggleColumnSelection={toggleColumnSelection}
          togg
        />
      )}

      {csvData && csvData.length > 0 && (
        <Filter
          csvData={csvData}
          selectedColumns={selectedColumns}
          handleFilter={handleFilter}
        />
      )}

      {csvData && csvData.length > 0 && (
        <DisplayTable
          selectedColumns={selectedColumns}
          csvData={csvData}
          toggleColumnSelection={toggleColumnSelection}
        />
      )}
    </div>
  );
};

export default CSVImporter;
