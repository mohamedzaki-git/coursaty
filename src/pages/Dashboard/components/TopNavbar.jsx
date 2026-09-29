import { Link } from "react-router-dom";

const TopNavbar = () => {
    return (
        <nav className="navbar top-navbar navbar-expand-lg ">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/admin">لوحة تحكم  </Link>
            </div>
        </nav>
    );
};

export default TopNavbar;
