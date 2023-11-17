
import Main from "../main/Main";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import React from 'react';
import { AuthProvider } from '../AuthContext';

function App() {


   return (
    <>
      <AuthProvider>
      <Header />
    </AuthProvider>
      <Main />
     
      <Footer />
    </>
  );
}

export default App;
