
import './App.css';

import Nav from './components/nav';
import Card from './components/card';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <Nav />

        <section className=" mb-5">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://cdn.pixabay.com/photo/2015/01/28/23/10/mosque-615415_960_720.jpg" 
              className="d-block w-100 img-carousel" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Paquete turistico por el continente</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://cdn.pixabay.com/photo/2019/03/31/14/31/italy-4093227_960_720.jpg" 
              className="d-block w-100 img-carousel" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Culturas urbanas y rurales</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://cdn.pixabay.com/photo/2016/11/22/22/21/adventure-1850912_960_720.jpg" 
              className="d-block w-100 img-carousel" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Aventura en familia y con amigos</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </section>

        <div className="container-fluid mt-5 mb-5">
        <img src="https://www.aviatur.com/version/1636120928/assets/aviatur_assets/img/promo/box/99185.jpeg"
          alt="..." className="img-fluid"
        />
      </div>      

      <h2 className="display-4">Ofertas en vuelos</h2>
      <p className="display-6">Pague sólo el 5% del IVA en tiquetes</p>
        <Card />

      <div className="container-fluid mt-5 mb-5">
        <img src="https://www.aviatur.com/version/1618607567/assets/aviatur_assets/img/promo/box/71449.jpeg"
          alt="..." className="img-fluid"
        />
      </div>

      <h2 className="display-4">Planee su viaje desde ya</h2>
      <p className="display-6">Y recorra los mejores destinos</p>
        <Card />

      <div className="container-fluid mt-5 mb-5">
        <img src="https://www.aviatur.com/version/1609852900/assets/aviatur_assets/img/promo/box/paquetes_27970.jpeg"
          alt="..." className="img-fluid"
        />
      </div>

        <Footer />
        
    </div>
  );
}

export default App;
