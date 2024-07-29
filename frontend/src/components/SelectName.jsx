// src/components/SelectName.jsx
import React from 'react';

function SelectName({ selectedName, setSelectedName }) {
  const names = ['John', 'Doe', 'Jane', 'Smith', 'Alex'];

  return (
    <select value={selectedName} onChange={(e) => setSelectedName(e.target.value)}>
      <option value="" disabled>Select a name</option>
      {names.map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
}

export default SelectName;
