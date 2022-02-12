import Login from "./Login"
import SignUpButton from "./SignUpButton"

const Header = () =>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/image-guess">Image Guess</a>
          </li>
        </ul>
      </div>
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <Login />
          <SignUpButton />
          <a className="btn btn-light px-3"
            href="https://github.com/Tylermhearn/mtg-guessing-game"
            role="button">
            <img src="/icons/GitHub.svg" alt="github" />
          </a>
        </div>
      </div>
    </div>
  </nav>

export default Header
