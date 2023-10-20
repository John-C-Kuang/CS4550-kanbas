import React from 'react';
import { FaFile, FaFileDownload, FaCog } from 'react-icons/fa';

function ImportExport() {
  return (
      <div className="d-flex float-end p-2">
        <button className="btn btn-secondary btn-light">
          <FaFile />
          Import
        </button>
        <div className="dropdown">
          <button
              style={{ width: '100%' }}
              className="btn btn-light dropdown-toggle btn-block text-start"
              type="button"
              id="as-group-dropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
          >
            <FaFileDownload /> Export
          </button>

          <ul className="dropdown-menu" aria-labelledby="export-options">
          </ul>
        </div>
        <button className="btn btn-secondary btn-light">
          <FaCog />
        </button>
      </div>
  );
}

export default ImportExport;
