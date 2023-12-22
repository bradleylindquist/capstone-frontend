import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "forestgreen" }} data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Travel!
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  All Trips
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  New Trip
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

{
  /* <nav>
        | <a href="#">Home</a> | <a href="#">Link</a> | <a href="#">Signup</a> | <a href="#">Login</a> |{" "}
        <a href="#">Logout</a> |
      </nav> */
}
