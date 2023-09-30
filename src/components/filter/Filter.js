import React, { useEffect, useState } from 'react';
import './Filter.css';

const Filter = ({ csvData, selectedColumns, handleFilter }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedColumn, setSelectedColumn] = useState('');
  const [filterType, setFilterType] = useState('range'); // or 'substring'
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    // Filter data based on user input
    if (selectedColumn && filterValue !== '') {
      const filtered = csvData.filter((row) => {
        const cellValue = row[selectedColumn];
        if (typeof cellValue === 'number' && filterType === 'range') {
          // Filter by range for numeric columns
          return (
            cellValue >= parseInt(filterValue.split('-')[0]) &&
            cellValue <= parseInt(filterValue.split('-')[1])
          );
        } else if (
          typeof cellValue === 'string' &&
          filterType === 'substring'
        ) {
          // Filter by substring for string columns
          return cellValue.includes(filterValue);
        } else if (typeof cellValue === 'string' && filterType === 'date') {
          // Implement date filtering logic here
          // You may need a date library like 'date-fns'
        }
        return false;
      });
      setFilteredData(filtered);
    }
  }, [filterValue]);

  return (
    <div className="filter__container">
      <select onChange={(e) => setSelectedColumn(e.target.value)}>
        <option value="">Select a Column</option>
        {selectedColumns.map((header) => (
          <option key={header} value={header}>
            {header}
          </option>
        ))}
      </select>
      <select onChange={(e) => setFilterType(e.target.value)}>
        <option value="range">Filter by Range</option>
        <option value="substring">Filter by Substring</option>
        {/* Add more filter types as needed */}
      </select>
      <input
        type="text"
        placeholder={filterType === 'range' ? 'e.g., 10-20' : 'Filter Value'}
        onChange={(e) => setFilterValue(e.target.value)}
      />

      <div onClick={() => handleFilter(filteredData)}>FILTER</div>
    </div>
  );
};

export default Filter;
