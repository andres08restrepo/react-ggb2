import React from 'react';
import { Link } from 'react-router-dom';
import './DietaBarf.scss';
import paseo from '../../images/paseo.svg';

const DietaBarf = () => {
    return(
        <div className="dieta-barf-container">
            <div className="dieta-barf-imagen">
                <img src="" alt="Imagen frontal Nevada Husky"/>
            </div>

            <section className="dieta-barf-principal">
            <h2>DIETA BARF</h2>
                <h3>¿QUÉ ES LA DIETA BARF?</h3>
                <p className="exterior">Es una dieta alternativa de alimentación que reemplaza al concentrado y a diferencia de este está hecha con ingredientes 100% naturales. Consiste en darle a tu perro un alimento crudo y biológicamente apropiado para su organismo.
                </p>
                <p className="exterior">Gracias al balance y combinación ideal entre sus ingredientes, la dieta BARF permite una mejor digestión y un mayor aprovechamiento de los nutrientes.
                </p>
                <h3>¿QUÉ COMPONE LA DIETA BARF?</h3>

                <div className="dieta-barf-componentes">
                    <div className="logo">
                        <img src="" alt="Ilustración huesos carnosos"/>
                    </div>
                    <div className="descripcion">
                        <p>
                            Huesos carnosos ricos en calcio y proteinas de alto valor biológico para el bienestar de tu peludo.
                        </p>
                    </div>
                </div>

                <div className="dieta-barf-componentes">
                    <div className="descripcion">
                        <p>
                            Carne magra, uno de nuestros ingredientes estrella pues contiene un alto importante porcentaje de proteinas con alto valor nutricional, ideales para la sana alimentación de un perro.
                        </p>
                    </div>
                    <div className="logo">
                        <img src="" alt="Ilustración carne magra"/>
                    </div>
                </div>

                <div className="dieta-barf-componentes">
                    <div className="logo">
                        <img src="" alt="Ilustración vegetales"/>
                    </div>
                    <div className="descripcion">
                        <p>
                            Vegetales que en la cantidad adecuada complementan la dieta con antioxidantes y fibra que ayudan a prevenir el estreñimiento.
                        </p>
                    </div>
                </div>

                <div className="dieta-barf-componentes ultimo">
                    <div className="descripcion">
                        <p>
                            Vísceras una importantísima fuente de nutrientes, vitaminas, minerales y enzimas.
                        </p>
                    </div>
                    <div className="logo">
                        <img src="" alt="Ilustración vísceras"/>
                    </div>
                </div>
            </section>

            <section className="dieta-barf-beneficios">
                <h3>BENEFICIOS DE LA DIETA BARF</h3>
                <p>
                    La vitalidad y energía que aporta esta alimentación ¡la notarás de inmediato!<br></br>La combinación entre carne y grasas animales es todo lo que tu peludito necesita para estar más que listo y naturalmente feliz a la hora del juego.
                </p>
                <p>
                    Con nuestra BARF la hora de la comida se convertirá en ¡la hora feliz! Las texturas, olores, y humedad de este tipo de alimento hacen que sea completamente atractivo para tu perro, a diferencia de un alimento seco. Créenos ¡dejará el plato limpio!
                </p>
                <p>
                    ¡Es la mejor opción para el sistema digestivo de un perro! Gracias a que esta dieta está compuesta por ingredientes naturales y de origen animal es más fácil para el sistema digestivo de tu peludito absorber los nutrientes, esto se refleja en heces más pequeñas, con menos olor y a su vez menos gases.
                </p>
                <div className="ilustracion">
                    <img src={paseo} alt="Ilustracion paseo perro" />
                </div>
                <p>
                    ¡Bienvenida la figura y el peso ideal! Este tipo de alimentación se caracteriza por no contener hidratos de carbono refinados (pasta, arroz, harina de trigo), lo que hace que tu peludito no pierda su figura ideal.  
                </p>
                <p>
                    ¡La sonrisa perfecta! La alimentación natural contribuye a que tu peludito tenga menos placa bacteriana y reduce el mal aliento.
                </p>
                <p className="ultimo">
                    ¡Un pelaje de modelo de revista! Nuestra dieta BARF es rica en ácidos grasos provenientes de la carne cruda, gracias a estos componentes notarás cómo el pelaje se vuelve fuerte, sano y brillante, reduciendo también el olor corporal. 
                </p>
            </section>

            <div className="dieta-barf-calcular">
                <p>
                    Ahora que conoces la dieta y sus beneficios, estás listo para calcular la porción ideal para tu mejor amigo
                </p>
                <div className="boton boton-verde-principal" ><Link to="/calcula-racion">CALCULAR</Link></div>
            </div>

            <div className="dieta-barf-productos">
                <p>
                ¿Quieres iniciar a tu peludito en la alimentación natural?<br></br>Conoce todos nuestros productos pensados especialmente para él
                </p>
                <div className="boton boton-verde-principal"><Link to="/productos">PRODUCTOS</Link></div>
            </div>
        </div>
    );
}

export default DietaBarf;