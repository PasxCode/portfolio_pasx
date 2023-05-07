import React from 'react';
import Carrusel from './components/carrusel';
import Cursos from './components/cursos';
import './stylesheets/style.css';

import logo from './logos/Logo_PASXCODE.png';
import foto from './imagenes/foto.png';
import imgTecnologias from './imagenes/tecnologias.png';

import uhu from './imagenes/uhu.jpg';
import hometech from './imagenes/hometech.jpg';
import voltios from './imagenes/voltios.jpg';
import inelec from './imagenes/inelec.png';
import securitas from './imagenes/securitas.png';

import prLadrillos from './proyectos/1_prLadrillos.png';
import prCalculadora from './proyectos/2_prCalculadora.png';
import prActividades from './proyectos/3_prActividades.png';

const intervaloCarrusel = 5000;

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <a className="navbar-brand">
            <img src={logo} width="150" alt="Logo de la página web"/>
          </a>
          <ul className="navbar-nav d-flex justify-content-center align-items-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#sobre-mi">Sobre mí</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#estudios">Estudio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#empleos">Empleos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* Seccion Hero */}
    <section className="hero align-items-stretch">
      <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
        <img className="hero-imagen-desarrollador rounded-circle" src={foto} alt="Foto de Fco. G. Velasco"/>
        <h1>Hola, soy Fco. Gabriel Velasco</h1>
        <h2>Desarrollo sitios web FullStack.</h2>
      </div>
      <div className="hero-inferior">
        <img className="hero-inferior-imagen img-fluid" src={imgTecnologias} alt="imagen de las teconologiass"/>
      </div>
    </section>

    {/* sobre mi */}
    <section id="sobre-mi" className="sobre-mi seccion-oscura">
      <div className="contenedor">
        <h2 className="seccion-titulo">Conoce a Francisco. G. Velasco</h2>
        <p className="seccion-texto">Soy Ingeniero Técnico en Informática de Sistemas.
            Entre los años 2002 y 2005 estube trabajando en el sector de la informática como freelance y en una empresa 
            de servicios informáticos en la cual estube programando com Delphi y en C++ Builder. Posteriormente y hasta 
            2010 estube en el sector eléctrico realizando instalaciones y configuraciones Domoticas, Redes, FFTH, Autómatas 
            y eléctricas. Posteriormente y hasta la actualidad he trabajado como Técnico de instalaciones y mantenimiento 
            de Sistemas Anti intrusión, CCTV, Control de accesos, Analítica de video y barreras electrónicas. 

            De forma paralela, en este último año he estado estudiando y reciclandome en las distintas tecnologías de
            programación para desarrollo WEB, tanto FrontEnd como BackEnd, centrandome con ReactJS, NodeJS y las distintas 
            herramientas entrono a ellos.

        </p>
      </div>
    </section>

    {/* Experiencia */}
    <section className="experiencia seccion-clara">
      <div className="container text-center">
        <div className="row">
          {/* < Desarrollo Web */}
          <div className="columna col-12 col-md-4">
            <i className="bi bi-laptop"></i>
            <p className="experiencia-titulo">Desarrollo Web</p>
            <p> 
                Desarrollo de aplicaciones web con ReactJS y desarrollo del servidor con NodeJS como pilares fundamentales en el diseño.
            </p>
            <div className="badges-contenedor">
              <span className="badge text-bg-primary">HTML</span>
              <span className="badge text-bg-primary">CSS</span>
              <span className="badge text-bg-primary">JavaScript</span>
              <span className="badge text-bg-primary">ReactJS</span>
              <span className="badge text-bg-primary">NodeJS</span>
              <span className="badge text-bg-primary">Express</span>
              <span className="badge text-bg-primary">...</span>
            </div>
          </div>
          {/* Articulos */}
          <div className="columna col-12 col-md-4">
            <i className="bi bi-laptop"></i>
            <p className="experiencia-titulo">Otras tecnologías.</p>
            <p>
              Desarrollo de software de escritorio con Delphi y C++. Bases de Datos relacionales y no relacionales. Administración de sistemas Linux/Unix Windows.
              Conocimientos en otros lenguajes como Pyton, Kotlin, Java...
            </p>
            <div className="badges-contenedor">
              <span className="badge text-bg-primary">SQL</span>
              <span className="badge text-bg-primary">MongoDB</span>
              <span className="badge text-bg-primary">Linux</span>
              <span className="badge text-bg-primary">Windows</span>
              <span className="badge text-bg-primary">Java</span>
              <span className="badge text-bg-primary">Kotlin</span>
              <span className="badge text-bg-primary">...</span>
            </div>
          </div>
          {/* Otros */}
          <div className="columna col-12 col-md-4">
            <i className="bi bi-laptop"></i>
            <p className="experiencia-titulo">Otros</p>
            <p> 
               Amplia experiencia en Electrónica y Electricidad. Varios años trabajando en sector eléctrico, domótica, Seguridad electrónica,...
            </p>
            <div className="badges-contenedor">
              <span className="badge text-bg-primary">EIB-KNX Partner</span>
              <span className="badge text-bg-primary">Instalaciones Eléctricas</span>
              <span className="badge text-bg-primary">Domótica / Inmótica</span>
              <span className="badge text-bg-primary">Autómatas</span>
              <span className="badge text-bg-primary">Seguridad Electrónica</span>
              <span className="badge text-bg-primary">...</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Proyectos */}
    <section id="proyectos" className="proyectos-recientes seccion-clara d-flex flex-column">
      <h2 className="seccion-titulo texto-negro">Mis proyectos recientes</h2>
      <h3 className="seccion-descripcion">Estos son algunos proyectos que he creado recientemente...</h3>
      {/* Galeria de Proyectos */}
      <div className="container text-center proyectos-contenedor">
        <div className="row">
          {/* Proyecto 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={prLadrillos} alt="Proyecto 1"/>
              <div className="overlay">
                <p>Ladrillos</p>
                <div className="iconos-contenedor">
                  <a href="https://github.com/PasxCode/Ladrillos" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://pasxcode-ladrillos.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Proyecto 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={prCalculadora} alt="Proyecto 1"/>
              <div className="overlay">
                <p>Calculadora</p>
                <div className="iconos-contenedor">
                  <a href="https://github.com/PasxCode/calculadora" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://pasxcode-calculadora.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Proyecto 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={prActividades} alt="Proyecto 1"/>
              <div className="overlay">
                <p>Actividades</p>
                <div className="iconos-contenedor">
                  <a href="https://github.com/PasxCode/FronEnd-Actividades-ReactJS" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://github.com/PasxCode/BackEnd-Actividades-REST-API" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-server"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="https://github.com/PasxCode" target="_blank" rel="noopener noreferrer">
        <button type="button" className="btn btn-info">
          Ver más proyectos
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </a>
    </section>

    {/*formacion */}
    <section id="estudios" className="formacion justify-content-start">
      <h2 className="seccion-titulo texto-negro">FORMACIÓN</h2>
      <div className="card">
        <div className="card-header">
          Estudios y cursos:
        </div>
        <ul className="list-group list-group-flush">
        <Cursos enlace={'https://www.uhu.es/etsi/webTitulaciones/grado_ing_informatica/'}>
           INGENIERO TÉCNICO EN INFORMÁTICA DE SISTEMAS en Universidad de Huelva.
          </Cursos>
          <Cursos enlace={'https://sites.google.com/iesrreyes.com/rafaelreyes/inicio'}>
            BUP y COU en I.B Rafael Reyes de Cartaya
          </Cursos>
          <Cursos enlace={'https://www.uhu.es/etsi/webTitulaciones/grado_ing_informatica/'}>
            Desarrolo WEB FrontEnd y BackEnd.
          </Cursos>
          <Cursos enlace={'https://www.uhu.es/etsi/webTitulaciones/grado_ing_informatica/'}>
            Bases de Datos relacionales y no relacionales en UHU y recursos en la red.
          </Cursos>
          <Cursos enlace={'https://www.knx.org/knx-en/for-professionals/index.php'}>
            EIB/KNX Partner por Konnex Association.
          </Cursos>
          <Cursos enlace={'https://www.wago.com/es/'}>
             Automatización KNX, WAGO y DALI, Baja y Alta tensión en Voltage Instalations Operating Support.
          </Cursos>
        </ul>
      </div>
      <a href="https://www.linkedin.com/in/francisco-velasco-403aa958/" target="_blank" rel="noopener noreferrer">
        <button type="button" className="btn btn-info">
          Mostrar mas...
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </a>
    </section>

    {/* Empleos */}
    <section id="empleos" className="empleos seccion-clara">
      <h2 className="seccion-titulo">Empleos</h2>
      <h3 className="seccion-descripcion">Estos son algunos de los empleos relevantes de mi trayectoria...</h3>
      
      {/* Carrusel */}
      <div id="empleos-carrusel" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        
          <Carrusel interval={intervaloCarrusel}
                    imagen={uhu} 
                    alt="Logo UHU" 
                    empresa="Universidad de Huelva"
                    cargo="INGENIERO TÉCNICO EN INFORMÁTICA DE SISTEMAS."
                    active={true}> 
            INGENIERO TÉCNICO EN INFORMÁTICA DE SISTEMAS cursado en la Escuela Superior de Ingeniería, en el
            campus de La Rábida, en UNIVERSIDAD DE HUELVA.
          </Carrusel>

          <Carrusel interval={intervaloCarrusel}
                    imagen={hometech} 
                    alt="Logo hometech" 
                    empresa="HOMETECH S.L.L"
                    cargo="INGENIERO TÉCNICO EN INFORMÁTICA DE SISTEMAS."
                    active={false}> 
            Consultoría informática dedicada a desarrolo de software, a la venta, reparacion y matenimiento 
            de hardware y a la formación en el ámbito de la tecnología. En esta empresa he desarrolado software de escritorio
            en DELPHI y en C++ BUILDER.
          </Carrusel>

          <Carrusel interval={intervaloCarrusel}
                    imagen={voltios} 
                    alt="Logo Voltios" 
                    empresa="Voltage Installations Operating Support S.L."
                    cargo="Encargado Técnico de Instalaciones"
                    active={false}>
            Técnico encargado de diseño e instalaciones eléctricas, cableado estructurado, sistemas domóticos KNX, 
            automatización y control. Realización de presupuestos y responsable seguimiento y organización de los 
            trabajos y del personal. Obras a destacar: CARREFOUR CARTAYA, HOTEL FUERTE EL ROMPIDO,
            CLUB DE GOLF DE COSTTA ESURI,...
          </Carrusel>

          <Carrusel interval={intervaloCarrusel}
                    imagen={inelec} 
                    alt="Logo Inelec" 
                    empresa="INELEC"
                    cargo="Responsable Técnico"
                    active={false}> 
            Director técnico de la empresa Integración de Aplicaciones Electrotécnicas S.L.U. Entre las funciones cabe
            destacar la realizacion de presupuesto y supervision de resto de técnicos. Negociación de prespuestos y gestion
            compras. Organización de los recursos humanos y materiales disponibles. Entre las obras a destacar se encuentran 
            HOSPITAL DE ALTA RESOLUCIÓN de Lepe, SUCA Huelva, Fabrica de Conservas LA HIGUERITA, Mercado de abasttos de Cartaya, 
            huertos solares de 2,4 MW y de 4,8 MW, ...
          </Carrusel>

          <Carrusel interval={intervaloCarrusel}
                    imagen={securitas} 
                    alt="Logo Securitas" 
                    empresa="Securitas Seguridad España"
                    cargo="Técnico Especialista en sistemas electrónicos"
                    active={false}> 
            Técnico de campo en seguridad electrónica. Dpto. de Servicio de Atencion Técnica de Securitas. Especialista en 
            CCTV, Sistemas de Alarma, Control de Accesos, Video Análisis.
          </Carrusel>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#empleos-carrusel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#empleos-carrusel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>

    {/* Contacto */}
    <section id="contacto" className="contacto seccion-oscura">
      <div className="container">
        <div className="container text-center rectangulo d-flex justify-content-evenly">
          <div className="row">
            <div className="col-12 col-md-4 seccion-titulo">
              ¡Hablemos!
            </div>
            <div className="col-12 col-md-4 descripcion">
              Contáctame para iniciar un nuevo proyecto y creemos juntos el camino hacia el futuro.
            </div>
            <div className="col-12 col-md-4">
              <a href="pasxxco@gmail.com">
                <button type="button">  
                  Contacto.
                  <i className="bi bi-envelope-check-fill" padding="2px"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* Pie de pagina (footer) */}
    <footer className="seccion-oscura d-flex flex-column align-items-center justify-content-center"> 
      <img className="footer-logo" src={logo} alt="Logo del portafolio"/>
      <p className="footer-texto text-center">Aprendo y creo todos los días.<br/>Creemos proyectos juntos.</p>
      <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
  
        <a href="https://github.com/PasxCode" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/francisco-velasco-403aa958/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/franpacofrancisco/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="pasxxco@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-envelope"></i>
        </a>
      </div>
      <div className="derechos-de-autor">Creado por Francisco Gabriel velasco. (2023) &#169;</div>
    </footer>

    

    </div>
  ); //cdel function App
}

export default App;
