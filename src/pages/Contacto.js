import '../styles/components/pages/Contacto.css';

const Contacto = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto General</h2>
                <form className="formulario" action="" method="">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="email">Correo</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="pais/region">Pais</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar"/></p>
                </form>
            </div>
            <div className="datos">
                <h2>Linea Directa</h2>
                <ul>
                    <li>Telefono: +54 011 4859683</li>
                    <li>Email: sebastiantabacco@outlook.com</li>
                    <li>Internacional (inglés): +49 (89) 3803-5491</li>
                    <li>Alemania (alemán): +49 (800) 225-53-36</li>
                    <li>* Las tarifas varían según el proveedor de servicios y el país/región</li>
                </ul>
            </div>
        </main>
    );
}

export default Contacto;