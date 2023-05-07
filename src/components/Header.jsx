import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-around py-2 bg-sky-100 ">
            <Link to="/">Home</Link>
            <Link to="/addCoffe">Add Coffe</Link>
            <Link to="/UpdateCoffe">Update Coffe</Link>
        </div>
    );
};

export default Header;