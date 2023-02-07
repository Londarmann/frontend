import { FaSearch } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Artists</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
      </ul>
      <form className="searchAuthorization">
        <div className="search">
          <button className="btn-search" type="button">
            <FaSearch />
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Type to Search..."
          />
        </div>
        <a className="call" href="#">
          <button className="btn-login" type="button">
            <FaSignInAlt />
          </button>
        </a>
      </form>
    </nav>
  );
};

export default Navbar;
