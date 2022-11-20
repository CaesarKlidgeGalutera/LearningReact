import logo512 from "./logo512.png";

function Navbar() {
  return (
    <header>
      <nav>
        <div className="header-title">
          <div className="page-logo">
            <img src={logo512} />
          </div>
          <h1>ReactFacts</h1>
        </div>
        <p>React Course - Project1</p>
      </nav>
    </header>
  );
}

export default Navbar;
