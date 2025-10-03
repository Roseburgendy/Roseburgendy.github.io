import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  return (
    <section id="about" className="section section-pad">
  <RevealOnScroll>
    <div className="container-narrow">
      <h2 className="section-title">About Me</h2>

      <div className="card card-lg card-hover">
        <p className="muted mb-6">
          I am a multi-disciplinary passionate learner with a focus on game design and programming. I am enthusiastic for creating creative solutions and bring joy to people and the world around us.Currently, I am a year 3 student in Xiamen University Malaysia, pursuing bachelor degree of Digital Media Technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["React","Vue","TypeScript","TailwindCSS","Svelte"].map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["Node.js","Python","AWS","MongoDB","GraphQL"].map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="card card-hover">
          <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
          <ul className="list-disc list-inside muted space-y-2">
            <li><strong>B.S. in Computer Science</strong> - XYZ University (2016–2020)</li>
            <li>Relevant Coursework: Data Structures, Web Development, Cloud Computing...</li>
          </ul>
        </div>

        <div className="card card-hover">
          <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
          <div className="space-y-4 muted">
            <div>
              <h4 className="font-semibold text-gray-900">Software Engineer at ABC Corp (2020–Present)</h4>
              <p>Developed and maintained microservices for cloud-based applications.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Intern at DEF Startups (2019)</h4>
              <p>Assisted in building front-end components and integrating REST APIs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </RevealOnScroll>
</section>

  );
};
