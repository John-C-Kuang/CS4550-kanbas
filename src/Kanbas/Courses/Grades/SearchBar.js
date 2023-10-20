function SearchBar() {
  return (
      <>
        <div className="row my-2">
          <div className="col-6">
            <h5>Student Names</h5>
            <input className="form-control" placeholder="Search Students"/>
          </div>

          <div className="col-6">
            <h5>Assignment Names</h5>
            <input className="form-control" placeholder="Search Assignments"/>
          </div>
        </div>

        <button className="btn btn-light"><i className="fas fa-filter"></i>Apply
          Filters
        </button>
      </>
  )
}

export default SearchBar;
