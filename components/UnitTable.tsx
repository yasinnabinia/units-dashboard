import React from 'react';

export default function UnitTable() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Units Table</h2>
      <table className="w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Zip Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">1</td>
            <td className="p-2 border">Golos Eryk</td>
            <td className="p-2 border">syniutkaa@yahoo.com</td>
            <td className="p-2 border">55369</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
