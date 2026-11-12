
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

const pendingGalleries = {
  'gestion-albaranes': [
    'Pantalla principal',
    'Nuevo albarán',
    'Listado de albaranes',
    'Versión escritorio',
    'Gestión de clientes',
    'PDF final',
  ],
  'presupuestos': [
    'Pantalla principal',
    'Nuevo presupuesto',
    'Listado de presupuestos',
    'Versión escritorio',
    'Gestión de clientes',
    'PDF final',
  ],
}

const practiceCovers = [
  '/portadas/P1.png',
  '/portadas/P2.png',
  '/portadas/P3.png',
  '/portadas/P4.png',
  '/portadas/P5.png',
]

function ProjectDetail() {
  const { slug } = useParams()
  const [selectedImage, setSelectedImage] = useState(null)

  const project = projects.find(
    (item) => item.slug === slug
  )

  const images = project?.images || []
  const practices = project?.practices || []
  const isAudiovisual = slug === 'postproduccion-audiovisual'

  const pendingImages =
    images.length === 0
      ? pendingGalleries[slug] || []
      : []

  useEffect(() => {
    setSelectedImage(null)
  }, [slug])

  useEffect(() => {
    if (selectedImage === null || images.length === 0) {
      return
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
      }

      if (event.key === 'ArrowRight') {
        setSelectedImage((current) =>
          (current + 1) % images.length
        )
      }

      if (event.key === 'ArrowLeft') {
        setSelectedImage((current) =>
          (current - 1 + images.length) % images.length
        )
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage, images.length])

  if (!project) {
    return (
      <main className="project-detail">
        <div className="detail-container">
          <h1>Proyecto no encontrado</h1>

          <Link to="/#proyectos" className="detail-back">
            ← Volver a proyectos
          </Link>
        </div>
      </main>
    )
  }

  const previousImage = () => {
    setSelectedImage((current) =>
      (current - 1 + images.length) % images.length
    )
  }

  const nextImage = () => {
    setSelectedImage((current) =>
      (current + 1) % images.length
    )
  }

  return (
    <main className="project-detail">
      <div className="detail-container">

        {/* VOLVER */}

        <Link to="/#proyectos" className="detail-back">
          ← Volver a proyectos
        </Link>

        {/* ENCABEZADO */}

        <header className="detail-header">
          <p className="section-label">{project.type}</p>

          <h1>{project.title}</h1>

          <p className="detail-intro">
            {project.description}
          </p>
        </header>

        {/* ENLACE A LA WEB DEL PROYECTO */}

        {project.website && (
          <section className="detail-section">
            <div className="detail-section-heading">
              <p className="section-label">PROYECTO WEB</p>
              <h2>
                Explora el <span>sitio web.</span>
              </h2>
            </div>

            <p>
              Puedes visitar el sitio original y navegar por sus
              diferentes secciones.
            </p>

            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex', marginTop: '24px' }}
            >
              Visitar sitio web ↗
            </a>
          </section>
        )}

        {/* GALERÍA DE IMÁGENES */}

        {!isAudiovisual && images.length > 0 && (
          <section className="detail-section">
            <div className="detail-section-heading">
              <p className="section-label">GALERÍA</p>
            </div>

            <div className="detail-images-grid">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  className="detail-image-card"
                  onClick={() => setSelectedImage(index)}
                  aria-label={`Ampliar: ${image.title}`}
                >
                  <div className="detail-image-wrapper">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />
                  </div>

                  <div className="detail-image-info">
                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <h3>{image.title}</h3>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* GALERÍAS PENDIENTES */}

        {!isAudiovisual && pendingImages.length > 0 && (
          <section className="detail-section">
            <div className="detail-section-heading">
              <p className="section-label">GALERÍA</p>
            </div>

            <div className="detail-images-grid">
              {pendingImages.map((title, index) => (
                <div
                  className="detail-image-card"
                  key={title}
                >
                  <div className="detail-image-wrapper detail-pending-image">
                    <span className="detail-pending-icon">
                      ▧
                    </span>

                    <p>Imagen próximamente</p>
                  </div>

                  <div className="detail-image-info">
                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <h3>{title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* MARCADOR PARA OTROS PROYECTOS */}

        {!isAudiovisual &&
          !project.website &&
          images.length === 0 &&
          pendingImages.length === 0 && (
            <div className={`detail-gallery ${project.category}`}>
              <div className="detail-gallery-placeholder">
                <span className="detail-gallery-icon">
                  {project.icon}
                </span>

                <p>
                  Próximamente: imágenes y vídeos del proyecto
                </p>
              </div>
            </div>
          )}

        {/* OBJETIVO Y CONTEXTO */}

        <div className="detail-summary-grid">
          <section className="detail-summary-card">
            <div className="detail-summary-heading">
              <div className="detail-card-icon">◎</div>
              <h2>Objetivo</h2>
            </div>

            <p>{project.objective}</p>
          </section>

          <section className="detail-summary-card">
            <div className="detail-summary-heading">
              <div className="detail-card-icon">⌘</div>
              <h2>Sobre el proyecto</h2>
            </div>

            <p>
              {project.about ||
                (project.category === 'software'
                  ? 'Proyecto centrado en el desarrollo de una solución digital funcional, combinando diseño de interfaces, programación y gestión de datos.'
                  : 'Proyecto audiovisual en el que he trabajado diferentes técnicas de edición, composición y creación de contenido multimedia.')}
            </p>
          </section>
        </div>

        {/* PRÁCTICAS AUDIOVISUALES */}

        {isAudiovisual && practices.length > 0 && (
          <section className="detail-section">
            <div className="detail-section-heading">
              <p className="section-label">
                TRABAJOS REALIZADOS
              </p>

              <h2>
                Cinco prácticas, <span>cinco técnicas.</span>
              </h2>
            </div>

            <div className="detail-practices-list">
              {practices.map((practice, index) => (
                <article
                  className="detail-practice-card"
                  key={practice.title}
                >
                  <div className="detail-practice-content">
                    <div className="practice-heading-inline">
                      <span>PRÁCTICA {index + 1}</span>
                      <span className="practice-heading-separator">·</span>
                      <h3>{practice.subtitle.replace(/^Práctica\s*\d+\s*[·:–-]?\s*/i, '')}</h3>
                    </div>

                    <p>{practice.description}</p>
                  </div>

                  <div className="detail-practice-media">
                    {practice.video ? (
                      <div className="practice-video-wrapper">
                        <video
                          controls={false}
                          preload="metadata"
                          playsInline
                          poster={practiceCovers[index]}
                          src={practice.video}
                          onPlay={(event) => {
                            const video = event.currentTarget
                            video.controls = true
                            video.parentElement.classList.add('is-playing')
                          }}
                          onEnded={(event) => {
                            const video = event.currentTarget
                            video.pause()
                            video.controls = false
                            video.parentElement.classList.remove('is-playing')
                            video.load()
                          }}
                        >
                          Tu navegador no admite vídeos HTML5.
                        </video>

                        <button
                          type="button"
                          className="practice-play-button"
                          aria-label={`Reproducir práctica ${index + 1}`}
                          onClick={(event) => {
                            const video = event.currentTarget.parentElement.querySelector('video')
                            video.play()
                          }}
                        >
                          ▶
                        </button>
                      </div>
                    ) : (
                      <div className="detail-practice-placeholder">
                        <span>▶</span>
                        <p>Vídeo próximamente</p>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* FUNCIONALIDADES Y TÉCNICAS */}

        <section className="detail-section">
          <div className="detail-section-heading">
            <p className="section-label">
              {isAudiovisual
                ? 'TÉCNICAS'
                : 'CARACTERÍSTICAS'}
            </p>

            <h2>
              {isAudiovisual ? (
                <>
                  Técnicas <span>aplicadas.</span>
                </>
              ) : (
                <>
                  Funcionalidades <span>principales.</span>
                </>
              )}
            </h2>
          </div>

          <div className="detail-features-grid">
            {project.features.map((feature, index) => (
              <div
                className="detail-feature-card"
                key={feature}
              >
                <span className="detail-feature-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECNOLOGÍAS */}

        <section className="detail-section">
          <div className="detail-section-heading">
            <p className="section-label">
              HERRAMIENTAS
            </p>

            <h2>
              Tecnologías <span>utilizadas.</span>
            </h2>
          </div>

          <div className="detail-tech-card">
            {project.technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* NAVEGACIÓN FINAL */}

        <div className="detail-bottom">
          <Link
            to="/#proyectos"
            className="btn-secondary"
          >
            ← Volver a todos los proyectos
          </Link>
        </div>
      </div>

      {/* VISOR DE IMÁGENES */}

      {selectedImage !== null && images[selectedImage] && (
        <div
          className="detail-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Visor de imágenes del proyecto"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="detail-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar imagen"
          >
            ×
          </button>

          {images.length > 1 && (
            <button
              type="button"
              className="detail-lightbox-arrow previous"
              onClick={(event) => {
                event.stopPropagation()
                previousImage()
              }}
              aria-label="Imagen anterior"
            >
              ‹
            </button>
          )}

          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            onClick={(event) => event.stopPropagation()}
          />

          {images.length > 1 && (
            <button
              type="button"
              className="detail-lightbox-arrow next"
              onClick={(event) => {
                event.stopPropagation()
                nextImage()
              }}
              aria-label="Imagen siguiente"
            >
              ›
            </button>
          )}

          <div className="detail-lightbox-caption">
            <p>{images[selectedImage].title}</p>

            <span>
              {selectedImage + 1} / {images.length}
            </span>
          </div>
        </div>
      )}
    </main>
  )
}

export default ProjectDetail
