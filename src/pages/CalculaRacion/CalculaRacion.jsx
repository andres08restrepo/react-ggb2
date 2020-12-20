import React from 'react';
import { Link } from 'react-router-dom';
import './CalculaRacion.scss';

const CalculaRacion = () => {
    return(
        <div className="calcula-racion-container">
            <div className="calcula-racion-imagen">
                <img src="" alt="Nevada samoyedo sonriendo"/>
            </div>
            <section className="calcula-racion-info">
                <h2>CALCULA LA RACIÓN PARA TU PERRO</h2>
                <p>
                    Una alimentación ideal debe ser personalizada a las necesidades de tu perro, por esto nuestra calculadora de ración tiene en cuenta esas particularidades y variaciones en cada perrito.
                </p>
                <img src="" alt="Ilustración importacia ración"/>
                <p>
                    Recuerda que al ser un alimento natural y húmedo, la porción diaria de BARF puede ser diferente a la porción de otros alimentos procesados.
                </p>
            </section>
            <section className="calcula-racion-formulario">
                <h3>CONOCE CUÁL ES LA RACIÓN IDEAL PARA TU PELUDITO</h3>
                <form>
                    <label for="edad">Edad</label>
                    <select name="edad" id="edad">
                        <option value="1">Cachorro 2-3 meses</option>
                        <option value="2">Cachorro 4-5 meses</option>
                        <option value="3">Cachorro 6-7 meses</option>
                        <option value="4">Cachorro 8-9 meses</option>
                        <option value="5">Cachorro 10-12 meses</option>
                        <option value="6">Adulto</option>
                        <option value="7">Adulto Mayor</option>
                    </select>
                    <label for="tamaño">Tamaño</label>
                    <select name="tamaño" id="tamaño">
                        <option value="8">Pequeño</option>
                        <option value="9">Grande</option>
                    </select>
                    <label for="actividad-fisica">Actividad física</label>
                    <select name="actividad-fisica" id="actividad-fisica">
                        <option value="10">Sedentario</option>
                        <option value="11">Activo</option>
                        <option value="12">Alto rendimiento</option>
                    </select>
                    <label for="peso-ideal">Peso ideal</label>
                    <p className="subtexto margen-negativa">
                        *El peso ideal corresponde al peso que necesita tu perro para tener buen estado físico. Si estás buscando subir el peso debes poner un peso mayor al actual, si buscas adelgazar, debes poner un peso menor al actual.</p>
                    <input type="number" id="peso-ideal" placeholder="Introduce el valor en kilos"></input>
                    <div className="boton boton-verde-principal">CALCULAR</div>
                    <p>Se recomienda</p>
                    <div>

                    </div>
                    <p className="subtexto">
                        Este es un estimado, puede variar dependiendo del metabolismo de tu mascota, para mayor información contáctanos.
                    </p>
                </form>
                <p>
                    Si tu mascota presenta condiciones especiales de salud (alergias, patologías renales, hepáticas, etc...)<br></br>
                    Puedes escribirnos para mayor informacion
                </p>
                <div className="boton boton-blanco"><Link to="/contacto">CONTACTO</Link></div>
            </section>
        </div>
    );
}

export default CalculaRacion;