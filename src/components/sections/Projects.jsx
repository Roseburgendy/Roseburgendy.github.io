import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="section section-pad"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          {/* 标题 */}
          <h2 className="section-title-black">
            Featured Projects
          </h2>
          {/* 项目网格 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 项目卡片 */}
            <div className="card card-hover card-border-hover">
              <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                <p className="muted mb-4">
                 Scalable cloud infrastructure management with real-time monitoring...
                </p>

              <div className="flex flex-wrap gap-2 mb-4">
                 {["React","Node.js","AWS","Docker"].map(t => <span key={t} className="tag">{t}</span>)}
              </div>

          <a href="#" className="link-primary my-4 inline-block">View Project →</a>
            </div>

            {/* 其它项目卡片（保持一致样式） */}
            <div className="card card-hover card-border-hover">
              <h3 className="text-xl font-bold mb-2">AI Analytics Dashboard</h3>
               <p className="muted mb-4">
                ML-powered data visualization platform with predictive analytics
                and interactive reports.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "TensorFlow", "D3.js", "Flask"].map((tech, key) => (
                  <span
                    key={key}
                    className="tag"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="link-primary my-4 inline-block"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_2px_12px_rgba(59,130,246,0.15)] transition bg-white">
              <h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
              <p className="text-gray-600 mb-4">
                Full-stack e-commerce with modern UI, secure payment
                integration, and customizable product inventory.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TypeScript", "Stripe", "PostgreSQL"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-50 text-blue-600 py-1 px-3 rounded-full text-sm hover:bg-blue-100 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_2px_12px_rgba(59,130,246,0.15)] transition bg-white">
              <h3 className="text-xl font-bold mb-2">Real-Time Chat App</h3>
              <p className="text-gray-600 mb-4">
                Scalable chat platform supporting real-time messaging, presence,
                and group chat features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-50 text-blue-600 py-1 px-3 rounded-full text-sm hover:bg-blue-100 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
