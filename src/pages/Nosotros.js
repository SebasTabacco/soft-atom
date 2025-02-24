import '../styles/components/pages/Nosotros.css';

const Nosotros = (props) => {
    return (
      <main className="holder">
        <div className="historia">
          <h2>Historia</h2>
          <p>
            <li>Como empresa líder en tecnología, empoderamos a nuestros clientes para enfrentar
              los grandes desafíos de nuestro tiempo.Nuestras empresas y organizaciones
            locales disfrutan de la libertad empresarial para servir a sus clientes y mercados
            de la mejor manera posible, a través de una estructura orientada a ofrecer el máximo
              valor a los clientes.</li>
          </p>
        </div>
        <div className="staff">
          <div className="personas">
            <div className="persona">
              <img src="./image/nosotros/Dueño.jpg" alt="Joaquin Tabacco" />
              <h5>joaquin, Tabacco</h5>
              <h6>Dueño</h6>
              <p>Asegurarse de que los clientes estén satisfechos con los productos y servicios
                ofrecidos y que sus necesidades sean atendidas.</p>
            </div>
            <div className="persona">
              <img src="./image/nosotros/Gerente.jpg" alt="Milagros Ortiz" />
              <h5>Milagros, Ortiz</h5>
              <h6>Gerente General</h6>
              <p>Responsable de guiar a la empresa hacia el éxito y la sostenibilidad
                a través de una gestión efectiva y un liderazgo sólido.</p>
            </div>
            <div className="persona">
              <img src="./image/nosotros/Gerente-Tecnico.jpg" alt="Pedro Gatica"/>
              <h5>Pedro, Gatica</h5>
              <h6>Gerente Tecnico</h6>
              <p>Responsable de asegurar que la empresa utilice la tecnología de manera efectiva y estratégica
                para alcanzar sus objetivos.</p>
            </div>
            <div className="persona">
              <img src="./image/nosotros/Sup-Gral.jpg" alt="Yanira Gonzalez"/>
              <h5>Yanira, Gonzalez</h5>
              <h6>Supervisora General</h6>
              <p>Garantizar que el equipo funcione de manera eficiente y efectiva,
                cumpliendo con los objetivos de la empresa.</p>
            </div>
            <div className="persona">
              <img src="./image/nosotros/Marketing.jpg" alt="Gaston Villegas" />
              <h5>gaston, Villegas</h5>
              <h6>Marketing</h6>
              <p>Objetivo construir y mantener una marca sólida, atraer y retener clientes,
                y contribuir al crecimiento sostenible de la empresa.</p>
            </div>
          </div>
        </div>
      </main>
    );
}
export default Nosotros;