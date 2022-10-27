import Header from '../Header';
import Home from '../Home';
import Projects from '../Projects';
import Experience from '../Experience';
import Contact from '../Contact';
import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
