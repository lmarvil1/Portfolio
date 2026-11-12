
const contactLinks = [
  {
    name: 'LinkedIn',
    icon: 'in',
    url: 'https://www.linkedin.com/in/luc%C3%ADa-mart%C3%ADnez-villagrasa-18597b368/',
  },
  {
    name: 'GitHub',
    icon: '</>',
    url: 'https://github.com/lmarvil1',
  },
]

function Contact() {
  return (
    <>
      <section className="contact" id="contacto">
        <div className="contact-container">

          <p className="section-label">HABLEMOS</p>

          <h2>
            ¿Creamos algo <span>juntos?</span>
          </h2>

          <p className="contact-description">
            Me interesa seguir aprendiendo, participar
            en nuevos proyectos y explorar oportunidades
            donde combinar tecnología y creatividad.
            ¡Estaré encantada de conectar contigo!
          </p>

          <div className="contact-actions">
            <a
              href="mailto:lmarvil2022@gmail.com"
              className="btn-primary"
            >
              Enviarme un correo
            </a>
          </div>

          <div className="contact-socials">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social"
              >
                <span>{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>

        </div>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Lucía Martínez.
          Diseñado y desarrollado con React.
        </p>

        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </>
  )
}

export default Contact
