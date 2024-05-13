import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/home';
import Create from './pages/create';

function App() {
  return (
    <>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">Landing</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">Create User</Link>
            </li>
            
          </ul>
        </div>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<Create />} />
    </Routes>
    </>
  );
}

export default App;
