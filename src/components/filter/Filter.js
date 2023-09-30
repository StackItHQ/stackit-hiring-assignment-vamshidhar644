/* eslint-disable use-isnan */
import React, { useEffect, useState } from 'react';
import './Filter.css';
import FilterData from '../../helpers/FilterData';

const Filter = ({ csvData, selectedColumns, handleFilter }) => {
  const { dataFiltering, filteredData } = FilterData();

  const [selectedColumn, setSelectedColumn] = useState('');
  const [filterType, setFilterType] = useState('range'); 
  const [filterValue, setFilterValue] = useState('');

  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  useEffect(() => {
    dataFiltering(selectedColumn, csvData, filterType, from, to, filterValue);
  }, [filterValue, from, to]);

  useEffect(() => {
    if (filterValue === '' && from === '' && to === '') {
      handleFilter(csvData);
    } else {
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
      </select>
      {filterType === 'substring' ? (
        <input type="text" onChange={(e) => setFilterValue(e.target.value)} />
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
