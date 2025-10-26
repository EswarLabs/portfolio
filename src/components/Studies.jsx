export default function Studies() {
  return (
    <section className="py-20 bg-gradient-to-br from-base-200 via-base-100 to-base-300 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-tight leading-tight mb-6">
            Education
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-base-content/90">
            My Academic Journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <div className="relative bg-base-100 rounded-3xl shadow-2xl ring-2 ring-white/20 backdrop-blur-sm p-8 hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Diploma in CSE</h3>
                  <p className="text-base-content/70 font-medium">2022 - 2025</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-base-content">Geethanjali Institute of Science and Technology</h4>
                <p className="text-base-content/80 leading-relaxed">
                  Completed Diploma in Computer Science and Engineering with focus on programming fundamentals, 
                  data structures, and software development practices.
                </p>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {['Programming', 'Data Structures', 'Web Development', 'Database Management'].map((subject) => (
                    <span key={subject} className="badge badge-outline badge-sm">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary via-accent to-primary rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <div className="relative bg-base-100 rounded-3xl shadow-2xl ring-2 ring-white/20 backdrop-blur-sm p-8 hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">B.Tech in CSE</h3>
                  <p className="text-base-content/70 font-medium">2025 - Present</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-base-content">NBKR Institute of Science and Technology</h4>
                <p className="text-base-content/80 leading-relaxed">
                  Currently pursuing Bachelor of Technology in Computer Science and Engineering, 
                  focusing on advanced programming concepts, system design, and emerging technologies.
                </p>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {['Advanced Programming', 'System Design', 'Machine Learning', 'Cloud Computing'].map((subject) => (
                    <span key={subject} className="badge badge-outline badge-sm">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-base-100 rounded-2xl px-8 py-4 shadow-lg ring-2 ring-white/20">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-lg font-semibold text-base-content">Currently Pursuing B.Tech</span>
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
