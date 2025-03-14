import type { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import image1 from '../../../public/images/app1.png';
import image2 from '../../../public/images/app2.png';

export const metadata: Metadata = {
  title: 'Proyek',
  description: 'Kumpulan proyek saya.',
  openGraph: {
    title: 'Proyek',
    description: 'Kumpulan proyek saya.',
  },
};

interface Project {
  name: string;
  slug: string;
  url: string;
  urlDisplay: string;
  description: string;
  imageSrc: StaticImageData;
  technologies: string[];
  color: string;
}

const projects: Project[] = [
  {
    name: "Penyewaan Bis",
    slug: "penyewaan-bis",
    url: "https://github.com/FrankStein31/Penyewaan-Bis-Laravel",
    urlDisplay: "Website Laravel",
    description: "Aplikasi manajemen penyewaan bis dengan fitur pemesanan, pembayaran, dan pelacakan inventaris kendaraan secara real-time.",
    imageSrc: image1,
    technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    color: "bg-rose-100 text-rose-800 border-rose-200"
  },
  {
    name: "Penyewaan Taman",
    slug: "penyewaan-taman",
    url: "https://github.com/FrankStein31/Penyewaan-Taman-Laravel",
    urlDisplay: "Website Laravel",
    description: "Platform reservasi taman untuk acara pribadi dan komersial dengan manajemen jadwal dan sistem pembayaran terintegrasi.",
    imageSrc: image2,
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Alpine.js"],
    color: "bg-emerald-100 text-emerald-800 border-emerald-200"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <header className="mb-12 text-center">
          <h1 className="font-bold text-4xl md:text-5xl text-zinc-800 mb-4 relative inline-block">
            Proyek
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-blue-500 rounded-full"></span>
          </h1>
          <p className="mt-6 text-zinc-600 text-lg max-w-2xl mx-auto">
            Kumpulan proyek yang telah saya kembangkan. Eksplorasi karya dan solusi 
            teknologi yang telah saya buat untuk berbagai kebutuhan.
          </p>
        </header>

        {/* Featured Projects Section */}
        <div className="mb-16">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div 
                key={project.slug}
                className="bg-white rounded-3xl shadow-md overflow-hidden border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image 
                    src={project.imageSrc} 
                    alt={project.name} 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    layout="fill"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className={`inline-block px-4 py-1.5 ${project.color} text-xs rounded-full font-medium border`}>
                      {project.urlDisplay}
                    </span>
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-blue-600 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                  
                  <h2 className="font-semibold text-2xl text-zinc-800 group-hover:text-blue-600 transition-colors mb-3">
                    {project.name}
                  </h2>
                  
                  <p className="text-zinc-600">{project.description}</p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1.5 bg-zinc-100 text-zinc-700 rounded-xl border border-zinc-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={`${project.url}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600">
                    Lihat detail
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}