import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import CardClima from './components/CardClima';

function App() {
  return (
    <div>
   <Footer titulo = "App del Clima"></Footer>
   <section className="container">
     <div className="row">
       <div className="col-sm-12 col-md-6">
       <CardClima></CardClima>
       </div>

       <div className="col-sm-12 col-md-6">
       <Formulario></Formulario>
       </div>

     </div>

   </section>
    </div>
  );
}

export default App;
