
function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <p className="hero-label">
          DESARROLLO WEB · TECNOLOGÍA · MULTIMEDIA
        </p>

        <h1>
          Hola, soy <span>Lucía.</span>
        </h1>

        <h2>
          Desarrollo soluciones digitales.
          <br />
          Combino tecnología y creatividad.
        </h2>

        <p className="hero-description">
          Estudiante de Tecnología Digital y Multimedia en la
          Universitat Politècnica de València.
          Me gusta combinar programación, diseño y creatividad
          para transformar ideas en proyectos digitales.
        </p>

        <div className="hero-buttons">
          <a href="#proyectos" className="btn-primary">
            Ver mis proyectos
          </a>

          <a href="#contacto" className="btn-secondary">
            Contactar
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="creative-scene">
          <div className="scene-glow"></div>

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="creative-core">
            <span className="core-symbol">✳</span>
          </div>

          <div className="floating-label label-code">
            <span className="label-symbol">{"</>"}</span>
            <span>Desarrollo</span>
          </div>

          <div className="floating-label label-design">
            <span className="label-symbol">✦</span>
            <span>Multimedia</span>
          </div>

          <div className="scene-spark spark-one">✦</div>
          <div className="scene-spark spark-two">✧</div>
          <div className="scene-spark spark-three">✦</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
