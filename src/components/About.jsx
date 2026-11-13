
import { CodeXml, Palette, Globe2 } from 'lucide-react'

function About() {
  return (
    <section className="about" id="sobre-mi">
      <div className="about-container">

        <div className="section-heading">
          <p className="section-label">CONÓCEME</p>
          <h2>Sobre <span>mí.</span></h2>
          <p className="section-subtitle">
            Desarrollo de software, diseño y proyectos multimedia.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>
              Un poco más sobre mí.
            </h3>

            <p>
              Soy estudiante de último curso del Grado en
              Tecnología Digital y Multimedia en la
              Universitat Politècnica de València (UPV).
            </p>

            <p>
              Me interesa tanto el desarrollo de software
              como el mundo multimedia. Disfruto creando
              aplicaciones que resuelven necesidades reales,
              pero también explorando el diseño digital,
              la animación, el vídeo y las experiencias
              interactivas.
            </p>

            <p>
              He desarrollado aplicaciones web y móviles
              para entornos empresariales, trabajando con
              tecnologías como Flutter y Firebase.
              Además, he realizado una estancia Erasmus+
              en el Politecnico di Milano, donde amplié
              mis conocimientos en inteligencia artificial,
              análisis de datos y desarrollo de aplicaciones.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <span className="about-card-icon">
                <CodeXml size={28} strokeWidth={1.8} />
              </span>
              <h4>Desarrollo</h4>
              <p>
                Aplicaciones web y móviles,
                programación y soluciones digitales.
              </p>
            </div>

            <div className="about-card">
              <span className="about-card-icon">
                <Palette size={28} strokeWidth={1.8} />
              </span>
              <h4>Multimedia</h4>
              <p>
                Diseño digital, animación,
                edición de vídeo y creatividad.
              </p>
            </div>

            <div className="about-card">
              <span className="about-card-icon">
                <Globe2 size={28} strokeWidth={1.8} />
              </span>
              <h4>Experiencia internacional</h4>
              <p>
                Erasmus+ en el Politecnico di Milano,
                con formación impartida en inglés.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
