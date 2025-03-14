import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang saya.',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman tentang saya.',
  },
};

export default function Home() {
  // Tech stack skills with elegant color scheme
  const techStack = [
    { name: "JavaScript", color: "bg-amber-100 text-amber-800 border-amber-200" },
    { name: "TypeScript", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "React", color: "bg-cyan-100 text-cyan-800 border-cyan-200" },
    { name: "Next.js", color: "bg-zinc-100 text-zinc-800 border-zinc-200" },
    { name: "HTML5", color: "bg-orange-100 text-orange-800 border-orange-200" },
    { name: "CSS3", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
    { name: "Tailwind", color: "bg-sky-100 text-sky-800 border-sky-200" },
    { name: "PHP", color: "bg-purple-100 text-purple-800 border-purple-200" },
    { name: "Laravel", color: "bg-rose-100 text-rose-800 border-rose-200" },
    { name: "CodeIgniter", color: "bg-red-100 text-red-800 border-red-200" },
    { name: "MySQL", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "Firebase", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
    { name: "Python", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
    { name: "Java", color: "bg-orange-100 text-orange-800 border-orange-200" },
    { name: "Kotlin", color: "bg-violet-100 text-violet-800 border-violet-200" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="bg-white rounded-3xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-0">
            {/* Content Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-800 mb-6 relative">
                <span className="relative inline-block">
                  Tentang Saya
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></span>
                </span>
              </h1>
              
              <div className="prose prose-zinc max-w-none">
                <p className="text-lg md:text-xl font-light leading-relaxed text-zinc-700 mb-6">
                  Halo! Saya <span className="font-medium text-zinc-900">Frankie Steinlie</span>, seorang pengembang perangkat lunak yang berfokus pada teknologi web modern. 
                  Saya memiliki passion dalam menciptakan solusi digital yang elegan dan bermanfaat.
                </p>
                
                <p className="text-base leading-relaxed text-zinc-600 mb-8">
                  Dengan pengalaman dalam <span className="font-medium text-zinc-800">React</span>, <span className="font-medium text-zinc-800">TypeScript</span>, dan <span className="font-medium text-zinc-800">Next.js</span>, saya selalu berusaha menghasilkan kode yang bersih 
                  dan aplikasi yang performa tinggi.
                </p>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <a 
                    href="https://github.com/FrankStein31" 
                    className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-800 text-white font-medium rounded-xl hover:bg-zinc-700 transition-all shadow-sm hover:shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/frankie-steinlie/" 
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white text-zinc-700 font-medium rounded-xl border-2 border-zinc-200 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            
            {/* Profile Image Section */}
            <div className="p-8 flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-full md:h-full max-w-xs">
                <Image
                  src="/images/profile.jpg"
                  alt="Frankie Steinlie"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Tech Stack Section - Elegant Style */}
        <div className="mt-12 bg-white rounded-3xl shadow-md p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-zinc-800 mb-8 flex items-center">
            <span className="relative mr-3">
              Teknologi & Bahasa Pemrograman
              <span className="absolute -bottom-2 left-0 w-1/4 h-1 bg-blue-500 rounded-full"></span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span 
                key={tech.name} 
                className={`${tech.color} py-2 px-4 rounded-xl text-sm border font-medium flex items-center justify-center transition-all hover:shadow-sm`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
