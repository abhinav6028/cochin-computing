import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import BannerImage from './Componenets/LandingPage/BannerImage';
import BankList from './Componenets/UI/BankList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Componenets/AboutUs/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Grid container>
            <BannerImage />
            <BankList />
          </Grid>
        } />
        <Route path="about" element={
          <About />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
