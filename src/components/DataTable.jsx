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
    <div className="px-5 py-5 w-full rounded-lg lg:col-span-2 shadow bg-slate-700">
      <h3 className="font-semibold">Water Quality Records</h3>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
          }}
        >
          <thead style={{  }}>
            <tr>
              <th>Date</th>
              <th>Location</th>
              <th>pH</th>
              <th>Turbidity</th>
              <th>Oxygen</th>
              <th>Temperature (°C)</th>
              <th>TDS</th>
            </tr>
          </thead>

          <tbody>
            {currentRows.map((row, index) => (
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.location}</td>
                <td>{row.ph}</td>
                <td>{row.turbidity}</td>
                <td>{row.oxygen}</td>
                <td>{row.temperature}</td>
                <td>{row.tds}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          justifyContent: "center",
          gap: "10px"
        }}
      >
        <button className="cursor-pointer" onClick={prevPage}>
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button className="cursor-pointer" onClick={nextPage} >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;