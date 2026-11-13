import { Code2, Palette, Settings } from 'lucide-react'

const categories = [
  {
    title: 'Desarrollo',
    icon: Code2,
    technologies: [
      'Flutter',
      'Dart',
      'Firebase',
      'Python',
      'Java',
      'JavaScript',
      'React',
      'HTML',
      'CSS',
      'Flask',
      'OpenCV',
      'MediaPipe',
      'TensorFlow',
      'Android SDK',
      'APIs REST',
      'Google Drive API',
      'TCP/IP',
    ],
  },
  {
    title: 'Multimedia y diseño',
    icon: Palette,
    technologies: [
      'Blender',
      'Edición de vídeo',
      'Postproducción audiovisual',
      'Motion Tracking',
      'Canva',
      'Diseño digital',
    ],
  },
  {
    title: 'Herramientas',
    icon: Settings,
    technologies: [
      'Git',
      'GitHub',
      'VS Code',
      'Android Studio',
      'Matplotlib',
      'Docker',
      'VirtualBox',
      'Wireshark',
    ],
  },
]



function Technologies() {
  return (
    <section className="technologies" id="tecnologias">
      <div className="technologies-container">

        <div className="section-heading">
          <p className="section-label">MIS HERRAMIENTAS</p>
          <h2>Tecnologías <span>y habilidades.</span></h2>
          <p className="section-subtitle">
            Herramientas que utilizo para desarrollar
            soluciones digitales y crear proyectos multimedia.
          </p>
        </div>

        <div className="technologies-grid">
          {categories.map((category) => (
            <div
              className="technology-card"
              key={category.title}
            >
              <div className="technology-icon">
                <category.icon size={28} strokeWidth={1.8} />
              </div>

              <h3>{category.title}</h3>

              <div className="technology-tags">
                {category.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Technologies
