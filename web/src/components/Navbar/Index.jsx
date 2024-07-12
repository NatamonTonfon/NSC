import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    backgroundColor: "#0D1021",
  };

  return (
    <div className="navbar bg-base-100 text-[#ffff]" style={navStyle}>
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-outline btn-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#0D1021]"
          >
            <li>
              <Link to="/factor-invest">Factor Investing</Link>
            </li>
            <li>
              <a>Factor Rotation</a>
              <ul className="p-2">
                <li>
                  <Link to="/factor-ranking">Factor Ranking</Link>
                </li>
                <li>
                  <Link to="/factor-infor">Factor Information</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/factor-data">Factor Data</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Factox
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/factor-invest">Factor investing</Link>
          </li>
          <li>
            <details>
              <summary>Factor rotation</summary>
              <ul className="p-2 text-[#0D1021]">
                <li>
                  <Link to="/factor-ranking">Factor Ranking</Link>
                </li>
                <li>
                  <Link to="/factor-infor">Factor Information</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/factor-data">Factor Data</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/sign-in" className="btn btn-active btn-link text-white">
          สร้างบัญชี
        </Link>
        <Link
          to="/log-in"
          className="btn btn-outline btn-accenbtn btn-outline btn-accent"
        >
          เริ่มต้นการลงทุน
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
