import logo from './logo.svg';
import './App.css';

import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';



function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        
      </Routes>
    </Router>
  );

}

export default App;
