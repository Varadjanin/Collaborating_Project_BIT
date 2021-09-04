
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import '@fortawesome/fontawesome-free/css/fontawesome.css';

import { Header } from '../Header/Header';
import { Cards } from '../Cards/Cards';
import { SideBar } from '../SideBar/SideBar';



function App() {
  return (
    <Container>
      <Header />
      <div>
        <Cards/>
        <SideBar/>
      </div>
    </Container>
  );
}

export default App;
