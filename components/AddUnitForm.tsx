import React, { useState } from 'react';

export default function AddUnitForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [zipcode, setZipcode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Unit Added:\nName: ${name}\nEmail: ${email}\nZip: ${zipcode}`);
    setName('');
    setEmail('');
    setZipcode('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl font-bold mb-2">Add New Unit</h2>
      <input
        className="block border p-2 mb-2 w-full"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="block border p-2 mb-2 w-full"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="block border p-2 mb-2 w-full"
        placeholder="Zip Code"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Add Unit
      </button>
    </form>
  );
}
