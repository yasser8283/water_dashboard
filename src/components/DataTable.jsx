// components/DataTable.jsx
import { useState } from "react";

const DataTable = ({ data }) => {
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = data.slice(startIndex, startIndex + rowsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <section className="px-5 py-5 w-full lg:col-span-3 rounded-lg shadow-lg bg-slate-800 border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Water Quality Records</h3>
        <span className='text-sm text-slate-400'>Showing {currentRows.length} of {data.length}</span>
      </div>

      <div className='overflow-x-auto rounded-lg border border-slate-700'>
        <table className='w-full text-sm text-left text-slate-100'>
          <thead className='bg-slate-900 text-slate-300'>
            <tr className='text-xs uppercase tracking-wider'>
              <th className='px-3 py-2'>Date</th>
              <th className='px-3 py-2'>Location</th>
              <th className='px-3 py-2'>pH</th>
              <th className='px-3 py-2'>Turbidity</th>
              <th className='px-3 py-2'>Oxygen</th>
              <th className='px-3 py-2'>Temperature (°C)</th>
              <th className='px-3 py-2'>TDS</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr key={index} className='border-b border-slate-700 hover:bg-slate-700 transition'>
                <td className='px-3 py-2'>{row.date}</td>
                <td className='px-3 py-2'>{row.location}</td>
                <td className='px-3 py-2'>{row.ph}</td>
                <td className='px-3 py-2'>{row.turbidity}</td>
                <td className='px-3 py-2'>{row.oxygen}</td>
                <td className='px-3 py-2'>{row.temperature}</td>
                <td className='px-3 py-2'>{row.tds}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='mt-4 flex items-center justify-center gap-3'>
        <button
          className='px-3 py-1 rounded bg-slate-700 hover:bg-slate-600 disabled:opacity-50'
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className='text-sm text-slate-300'>Page {currentPage} of {totalPages}</span>

        <button
          className='px-3 py-1 rounded bg-slate-700 hover:bg-slate-600 disabled:opacity-50'
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default DataTable;