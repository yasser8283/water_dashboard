import React, { useState } from "react";

const MetricTable = ({ resultData, linemetric }) => {

  const rowsPerPage = 5;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(resultData.length / rowsPerPage);

  const start = (page - 1) * rowsPerPage;
  const currentRows = resultData.slice(start, start + rowsPerPage);

  return (
    <div className="flex flex-col h-60">

      <h2 className="font-semibold capitalize mb-2">
        {linemetric} Data
      </h2>

      {/* Scrollable table area */}
      <div className="flex-1 overflow-y-auto border rounded">
        <table className="w-full text-center text-sm">
          <thead className= "">
            <tr>
              <th className="border p-2">Date</th>
              <th className="border p-2 capitalize">{linemetric}</th>
            </tr>
          </thead>

          <tbody>
            {currentRows.map((row, index) => (
              <tr key={index}>
                <td className="border p-2">{row.date}</td>
                <td className="border p-2">{row[linemetric]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-2 text-sm">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-2 py-1 border rounded"
        >
          Prev
        </button>

        <span>
          {page} / {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-2 py-1 border rounded"
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default MetricTable;