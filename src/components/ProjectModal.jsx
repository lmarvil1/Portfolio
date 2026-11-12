
import { useEffect } from 'react'

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Cerrar detalles"
        >
          ×
        </button>

        <p className="project-type">
          {project.type}
        </p>

        <h2 id="modal-title">{project.title}</h2>

        <p className="modal-description">
          {project.description}
        </p>

        <h3>Tecnologías utilizadas</h3>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <p className="modal-note">
          Próximamente: capturas, vídeos y más detalles
          sobre el desarrollo de este proyecto.
        </p>
      </div>
    </div>
  )
}

export default ProjectModal
