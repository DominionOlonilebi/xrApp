import './App.css';
import Background from './components/Background';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Designs from './components/Designs';
import Footer from './components/Footer';
import Navbars from './components/Navbars';
import Review from './components/Review';
import Services from './components/Services';

function App() {
  return (
    <div>
      <Navbars/>
<Background/>
<Cards/>
<Services/>
<Review/>
<Designs/>
<Contact/>
<Footer/>
    </div>
    
  );
}

export default App;
