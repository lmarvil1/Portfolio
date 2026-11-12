
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import {
  Clock,
  Files,
  Play,
  CookingPot,
  House,
  Activity,
  Cat,
} from 'lucide-react'

const projectSummaries = {
  'control-horario':
    'Gestión de fichajes, vacaciones y documentación laboral para una empresa real.',
  'gestion-empresarial':
    'Dos aplicaciones multiplataforma para digitalizar la gestión de albaranes y presupuestos de una empresa.',
  'postproduccion-audiovisual':
    'Cinco proyectos de edición de vídeo, seguimiento de movimiento y efectos visuales.',
  findncook:
    'App de recetas a partir de ingredientes disponibles, con listas de compra.',
  tecweb:
    'Sitio web sobre viviendas sostenibles con galería, blog y contacto.',
  saltaroo:
    'Aplicación para analizar saltos verticales mediante sensores, visualizar resultados y comparar clasificaciones.',
  javacat:
    'Aplicación Android para cuidar de un gato virtual y disfrutar de tres minijuegos interactivos.',
  }

const projectTypes = {
  'control-horario': 'TRABAJO DE FIN DE GRADO',
  'gestion-empresarial': 'PROYECTO INDEPENDIENTE',
  'postproduccion-audiovisual': 'PROYECTO ACADÉMICO',
  findncook: 'PROYECTO ERASMUS',
  tecweb: 'PROYECTO ACADÉMICO',
  saltaroo: 'PROYECTO ACADÉMICO',
  javacat: 'PROYECTO ACADÉMICO',
}

const projectIcons = {
  clock: Clock,
  files: Files,
  play: Play,
  'cooking-pot': CookingPot,
  house: House,
  activity: Activity,
  cat: Cat,
}

function Projects() {

  return (
    <section className="projects" id="proyectos">
      <div className="projects-container">

        <div className="section-heading">
          <p className="section-label">MI TRABAJO</p>

          <h2>
            Mis <span>proyectos.</span>
          </h2>

          <p className="section-subtitle">
            Una selección de proyectos donde combino
            tecnología, desarrollo y creatividad.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              to={`/proyectos/${project.slug}`}
              className="project-card"
              key={project.id}
            >
              <div
                className={`project-image ${project.category}`}
              >
                {(() => {
                  const Icon = projectIcons[project.icon]

                  return Icon ? (
                    <Icon className="project-icon" />
                  ) : null
                })()}
              </div>

              <div className="project-info">
                <p className="project-type">
                  {projectTypes[project.slug] || project.type}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {projectSummaries[project.slug] ||
                    project.description}
                </p>
                <span className="project-more">
                  Ver proyecto →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
