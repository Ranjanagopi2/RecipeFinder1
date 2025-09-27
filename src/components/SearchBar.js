import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (value.trim()) onSearch(value.trim());
  };

  return (
    <form onSubmit={submit} style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
      <input
        placeholder="Search recipes (e.g., chicken, pasta)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ flex: 1, padding: 8 }}
      />
      <button type="submit" style={{ padding: '8px 12px' }}>Search</button>
    </form>
  );
}
