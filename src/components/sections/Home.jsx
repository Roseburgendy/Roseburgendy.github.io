import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
   <section id="home" className="section section-pad">
  <RevealOnScroll>
    <div className="text-center z-10 px-4">
      <h1 className="hero-title">Hi, I'm Wang Ye</h1>

      <p className="muted text-lg mb-8 max-w-lg mx-auto">
        I’m a full-stack developer who loves crafting clean, scalable web applications. My goal is to build solutions that offer both exceptional performance and a delightful user experience.
      </p>

      <div className="flex justify-center gap-4">
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="#contact" className="btn-secondary">Contact Me</a>
      </div>
    </div>
  </RevealOnScroll>
</section>

  );
};
