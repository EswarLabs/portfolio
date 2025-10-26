import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="hero-content flex-col lg:flex-row gap-16 px-6 py-20 max-w-7xl mx-auto relative z-10 items-center min-h-screen">
        
        <div className="flex-shrink-0 order-2 lg:order-1 flex items-center justify-center lg:justify-start">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-2 ring-white/20 backdrop-blur-sm bg-white/5">
              <img
                src={profileImg}
                alt="Eswar Kumar G"
                className="w-72 h-72 md:w-96 md:h-96 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-secondary rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left space-y-8 max-w-2xl order-1 lg:order-2 flex flex-col justify-center items-center lg:items-start">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-tight leading-tight">
              Eswar Kumar G
            </h1>
            
            <div className="relative inline-block">
              <p className="text-2xl md:text-3xl font-semibold text-base-content/90 relative z-10">
                MERN Developer
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>

          <div className="space-y-4 text-base-content/80 text-lg md:text-xl leading-relaxed">
            <p className="font-medium">
              Experienced in building <span className="text-primary font-bold">scalable web applications</span> with modern frameworks
              like <span className="text-secondary font-bold">React, Node.js</span>.
            </p>
            <p>
              Passionate about clean code, performance optimization, and delivering exceptional user experiences that make a difference.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
            {['React', 'Node.js', 'Java Script', 'Python', 'JAVA', 'PHP'].map((skill) => (
              <span key={skill} className="badge badge-primary badge-lg font-medium px-4 py-2">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
            <a 
              href="#contact" 
              className="btn btn-primary btn-lg px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </a>
            <a 
              href="https://drive.google.com/file/d/1bRXAlMYhcv4c6LDeoz7mWTljJCKt2a1c/view?usp=sharing" 
              target="_blank" 
              className="btn btn-outline btn-lg px-8 py-4 text-lg font-semibold hover:btn-primary transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>

          <div className="flex gap-4 justify-center lg:justify-start pt-4">
            {[
              { name: 'GitHub', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
              { name: 'LinkedIn', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z' },
             
            ].map((social) => (
              <a 
                key={social.name}
                href="#" 
                className="btn btn-ghost btn-circle btn-lg hover:btn-primary transition-all duration-300"
                aria-label={social.name}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}