/* eslint-disable use-isnan */
import React, { useEffect, useState } from 'react';
import './Filter.css';

const Filter = ({ csvData, selectedColumns, handleFilter }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedColumn, setSelectedColumn] = useState('');
  const [filterType, setFilterType] = useState('range'); // or 'substring'
  const [filterValue, setFilterValue] = useState('');

  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  // console.log(filteredData);
  // console.log(parseInt(from));

  useEffect(() => {
    if (selectedColumn) {
      const filtered = csvData.filter((row) => {
        const cellValue = row[selectedColumn];
        // console.log(cellValue);
        if (filterType === 'range') {
          const minValue = parseInt(from);
          const maxValue = parseInt(to);

          // console.log(minValue, maxValue);
          return cellValue >= minValue && cellValue <= maxValue;
        } else if (
          typeof cellValue === 'string' &&
          filterType === 'substring'
        ) {
          return cellValue.includes(filterValue);
        }
        return false;
      });
      // console.log(filtered);
      setFilteredData(filtered);
    }
  }, [filterValue, from, to]);

  useEffect(() => {
    console.log('filteredData:', filteredData);
    console.log('filterValue:', filterValue);
    console.log('from:', from);
    console.log('to:', to);

    if (filterValue === '' && from === '' && to === '') {
      handleFilter(csvData);
    } else {
      // console.log(filteredData);
      handleFilter(filteredData ? filteredData : false);
    }
  }, [filteredData, filterValue, from, to]);

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
      {filterType === 'substring' ? (
        <input
          type="text"
          placeholder="e.g., 10-20"
          onChange={(e) => setFilterValue(e.target.value)}
        />
      ) : (
        <>
          <input
            type="number"
            placeholder="from"
            onChange={(e) => setFrom(e.target.value)}
          />
          <input
            type="number"
            placeholder="to"
            onChange={(e) => setTo(e.target.value)}
          />
        </>
      )}
    </div>
  );
};

export default Filter;
