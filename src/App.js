import './index.css';
import Navbar from './Components/Navbar.jsx'; // Navbar for home
import Description from './Components/Description.jsx'; // Home content
import Image1 from './Components/Image1.jsx'; // Home image component
import Menu from './pages/Menu.jsx'; // Menu component
import Services from './pages/Services.jsx'; // Services component
import Categories from './pages/Categories.jsx';
import PopularItems from './Components/PopularItems.jsx';
import DiscountSection from './Components/DiscountSection.jsx';
import './Components/Navbar.css';
import './Components/Image1.css';
import './Components/Description.css';
import './Components/PopularItems.css';
import './Components/DiscountSection.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page - Renders Navbar, Description, and Image1 */}
        <Route path="/" element={
          <>
            <Navbar />
            <Description />
            <Image1 />
            <PopularItems />
            <DiscountSection />
          </>
        } />
        
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
