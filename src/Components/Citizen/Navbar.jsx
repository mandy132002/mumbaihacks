import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
          <h1>Undefined</h1>
        </div>
        <div>
          <ul>
            <li>
              <a href="#home" className="nav-item">
                Home
              </a>
            </li>
            <li>
              <a href="#report" className="nav-item">
                Report
              </a>
            </li>
            <li>
              <a href="#donate" className="nav-item">
                Donate
              </a>
            </li>
            <li>
              <a href="#sos" class="sos">
                SOS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
