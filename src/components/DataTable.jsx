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
    <section className="px-5 py-5 w-full lg:col-span-3 rounded-2xl shadow-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-100">Water Quality Records</h3>
        <span className='text-sm text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full'>Showing {currentRows.length} of {data.length}</span>
      </div>

      <div className='overflow-x-auto rounded-lg border border-slate-700/50'>
        <table className='w-full text-sm text-left text-slate-100'>
          <thead className='bg-gradient-to-r from-slate-900 to-slate-800 text-slate-300'>
            <tr className='text-xs uppercase tracking-wider'>
              <th className='px-4 py-3'>Date</th>
              <th className='px-4 py-3'>Location</th>
              <th className='px-4 py-3'>pH</th>
              <th className='px-4 py-3'>Turbidity</th>
              <th className='px-4 py-3'>Oxygen</th>
              <th className='px-4 py-3'>Temperature (°C)</th>
              <th className='px-4 py-3'>TDS</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr key={index} className='border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors'>
                <td className='px-4 py-3'>{row.date}</td>
                <td className='px-4 py-3'>{row.location}</td>
                <td className='px-4 py-3'>{row.ph}</td>
                <td className='px-4 py-3'>{row.turbidity}</td>
                <td className='px-4 py-3'>{row.oxygen}</td>
                <td className='px-4 py-3'>{row.temperature}</td>
                <td className='px-4 py-3'>{row.tds}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='mt-4 flex items-center justify-center gap-3'>
        <button
          className='px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-slate-300 hover:text-white transition-all duration-200'
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className='text-sm text-slate-300 bg-slate-700/50 px-3 py-2 rounded-lg'>Page {currentPage} of {totalPages}</span>

        <button
          className='px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-slate-300 hover:text-white transition-all duration-200'
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