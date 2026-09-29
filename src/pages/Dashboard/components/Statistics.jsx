
const Statistics = ({ students, instructors, courses }) => {
    return (
        <div className="row text-center my-4">
            <div className="col-md-4">
                <div className="card bg-info text-white mb-4">
                    <div className="card-body">
                        <h5 className="card-title">عدد الطلاب</h5>
                        <p className="card-text">{students}</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-success text-white mb-4">
                    <div className="card-body">
                        <h5 className="card-title">عدد المحاضرين</h5>
                        <p className="card-text">{instructors}</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-warning text-white mb-4">
                    <div className="card-body">
                        <h5 className="card-title">عدد الكورسات</h5>
                        <p className="card-text">{courses}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
