// src/components/SelectName.jsx
import React from 'react';

function SelectName({ selectedName, setSelectedName }) {
  const names = ['Lynette', 'Jan', 'Klea', 'Bernadene', 'Esther', 'Andre','Nicolaas','Saskia', 'Connor','Kristin'];

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
