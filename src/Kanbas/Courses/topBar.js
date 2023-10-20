const TopBar = ({course, subpath}) => (
    <div className="row p-0 mt-3 mb-1 ms-2 align-items-center justify-content-center">
      <div className="col-auto p-0">
        <button className="btn btn-transparent p-2">
          <div className="bg-danger my-1 neu-red" style={{width: '25px', height: '3px'}}></div>
          <div className="bg-danger my-1 neu-red" style={{width: '25px', height: '3px'}}></div>
          <div className="bg-danger my-1 neu-red" style={{width: '25px', height: '3px'}}></div>
        </button>
      </div>

      <div className="col p-0">
        <p className="my-0" style={{fontSize: "18px"}}>{course._id} · {course.name} > <b>{subpath}</b></p>
      </div>
    </div>
);

export default TopBar
