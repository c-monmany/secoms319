import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import FoodCarousel from './FoodCarousel';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./myotherimages/Bombay_Deli-removebg-preview.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Bombay Deli
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <FoodCarousel />
      </Container>
      

    </div>
    
  );
}

export default App;
