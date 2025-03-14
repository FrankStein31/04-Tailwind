import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tentang Saya | Frankie Steinlie - Pengembang Web',
  description: 'Frankie Steinlie adalah seorang pengembang perangkat lunak yang berfokus pada teknologi web modern seperti React, TypeScript, dan Next.js.',
  openGraph: {
    title: 'Tentang Saya | Frankie Steinlie',
    description: 'Pengembang perangkat lunak yang berfokus pada teknologi web modern.',
    images: [{ url: '/images/profile.jpg', width: 1200, height: 630, alt: 'Frankie Steinlie' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tentang Saya | Frankie Steinlie',
    description: 'Pengembang perangkat lunak yang berfokus pada teknologi web modern.',
    images: [{ url: '/images/profile.jpg', alt: 'Frankie Steinlie' }],
  }
};

export default function About() {
  // Tech stack skills organized by category for better presentation
  const techStack = {
    frontend: [
      { name: "JavaScript", color: "bg-amber-100 text-amber-800 border-amber-200" },
      { name: "TypeScript", color: "bg-blue-100 text-blue-800 border-blue-200" },
      { name: "React", color: "bg-cyan-100 text-cyan-800 border-cyan-200" },
      { name: "Next.js", color: "bg-zinc-100 text-zinc-800 border-zinc-200" },
      { name: "HTML5", color: "bg-orange-100 text-orange-800 border-orange-200" },
      { name: "CSS3", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
      { name: "Tailwind", color: "bg-sky-100 text-sky-800 border-sky-200" },
    ],
    backend: [
      { name: "PHP", color: "bg-purple-100 text-purple-800 border-purple-200" },
      { name: "Laravel", color: "bg-rose-100 text-rose-800 border-rose-200" },
      { name: "CodeIgniter", color: "bg-red-100 text-red-800 border-red-200" },
      { name: "MySQL", color: "bg-blue-100 text-blue-800 border-blue-200" },
      { name: "Firebase", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
    ],
    other: [
      { name: "Python", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
      { name: "Java", color: "bg-orange-100 text-orange-800 border-orange-200" },
      { name: "Kotlin", color: "bg-violet-100 text-violet-800 border-violet-200" },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-0">
            {/* Content Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                Full Stack Developer
              </div>
              
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-800 mb-6 relative">
                <span className="relative inline-block">
                  Frankie Steinlie
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></span>
                </span>
              </h1>
              
              <div className="prose prose-zinc max-w-none">
                <p className="text-lg md:text-xl font-light leading-relaxed text-zinc-700 mb-6">
                  Halo! Saya seorang pengembang perangkat lunak yang berfokus pada teknologi web modern. 
                  Saya memiliki <span className="font-medium text-zinc-900">passion dalam menciptakan solusi digital</span> yang elegan dan bermanfaat.
                </p>
                
                <p className="text-base leading-relaxed text-zinc-600 mb-8">
                  Dengan pengalaman lebih dari 5 tahun dalam <span className="font-medium text-zinc-800">React</span>, <span className="font-medium text-zinc-800">TypeScript</span>, dan <span className="font-medium text-zinc-800">Next.js</span>, saya selalu berusaha menghasilkan kode yang bersih, 
                  aplikasi yang performa tinggi, dan antarmuka pengguna yang intuitif. Saya percaya bahwa teknologi terbaik 
                  adalah yang mampu menyederhanakan masalah kompleks.
                </p>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <a 
                    href="https://github.com/FrankStein31" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-800 text-white font-medium rounded-xl hover:bg-zinc-700 transition-all shadow-sm hover:shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/frankie-steinlie/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white text-zinc-700 font-medium rounded-xl border-2 border-zinc-200 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    LinkedIn
                  </a>
                  
                  <a 
                    href="mailto:frankie.steinlie@gmail.com" 
                    className="inline-flex items-center gap-2 px-5 py-3 bg-blue-50 text-blue-700 font-medium rounded-xl border-2 border-blue-100 hover:bg-blue-100 transition-all shadow-sm hover:shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Email
                  </a>
                </div>
              </div>
            </div>
            
            {/* Profile Image Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-full md:h-full max-w-xs">
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl blur-sm opacity-75"></div>
                <Image
                  src="/images/profile.jpg"
                  alt="Frankie Steinlie"
                  width={300}
                  height={300}
                  className="relative rounded-2xl shadow-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Tech Stack Section - Categorized */}
        <div className="bg-white rounded-3xl shadow-md p-8 border border-blue-100 mb-12">
          <h2 className="text-2xl font-bold text-zinc-800 mb-8 flex items-center">
            <span className="relative mr-3">
              Teknologi & Keahlian
              <span className="absolute -bottom-2 left-0 w-1/4 h-1 bg-blue-500 rounded-full"></span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-zinc-700 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500">
                  <path d="M2 9l10 3 10-3"></path>
                  <path d="M12 12v9"></path>
                  <rect x="2" y="6" width="20" height="3" rx="1"></rect>
                </svg>
                Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.frontend.map((tech) => (
                  <span 
                    key={tech.name} 
                    className={`${tech.color} py-2 px-4 rounded-xl text-sm border font-medium flex items-center justify-center transition-all hover:shadow-sm`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-zinc-700 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
                Backend
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.backend.map((tech) => (
                  <span 
                    key={tech.name} 
                    className={`${tech.color} py-2 px-4 rounded-xl text-sm border font-medium flex items-center justify-center transition-all hover:shadow-sm`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-zinc-700 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                Lainnya
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.other.map((tech) => (
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
        
      </div>
    </div>
  );
}