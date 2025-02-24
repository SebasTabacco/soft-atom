
import '../styles/components/pages/Home.css';

const Home = (props) => {
  return (
    <main className="holder">
      <div className="homeimg">
        <img src="./image/soft/bus.png"  alt="software" />
      </div>  
      <div className="columnas">
        <div className="bienbenidos left">
          <h2>Bienbenidos</h2>
          <p>Creamos tecnología para transformar lo cotidiano. Combinando el mundo real y el digital,
            ayudamos a los clientes a enfrentar los grandes desafíos de nuestro tiempo.
            Estamos orientados a crear valor, crear tecnología con propósito y,
            por lo tanto, mejorar la vida de miles de millones de personas</p>
        </div>
        <div className="testimonios right">
          <h2>Testimonios</h2>
          <div className="testimonio">
            <span className="cita">Excelente sus productos , una calidad unica.</span>
            <span className="autor">Juan Perez</span>
          </div>
        </div>
      </div>
    </main>
     
    );
}
export default Home;