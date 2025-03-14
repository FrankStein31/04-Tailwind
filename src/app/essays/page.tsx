import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Esai',
  description: 'Kumpulan esai saya.',
  openGraph: {
    title: 'Esai',
    description: 'Kumpulan esai saya.',
  },
};

interface Article {
  slug: string;
  date: string;
  title: string;
  description: string;
  category: string;
}

const articles: Article[] = [
  {
    slug: 'memulai-dengan-nextjs',
    date: '20 Maret 2024',
    title: 'Memulai dengan Next.js',
    description: 'Panduan lengkap memulai project dengan Next.js dan TypeScript. Pelajari cara membangun aplikasi modern dengan performa tinggi.',
    category: 'Framework'
  },
  {
    slug: 'belajar-typescript',
    date: '15 Maret 2024',
    title: 'Belajar TypeScript untuk Pemula',
    description: 'Pengenalan dasar TypeScript untuk pengembang JavaScript. Pahami type system dan cara menggunakannya untuk meningkatkan kualitas kode.',
    category: 'Programming'
  },
  {
    slug: 'optimasi-react',
    date: '10 Maret 2024',
    title: 'Teknik Optimasi Performa React',
    description: 'Pelajari berbagai teknik untuk meningkatkan kecepatan aplikasi React Anda, termasuk memoization, code splitting, dan lazy loading.',
    category: 'Performance'
  },
  {
    slug: 'tailwind-css-tips',
    date: '5 Maret 2024',
    title: 'Tips dan Trik Tailwind CSS',
    description: 'Kumpulan tips dan trik untuk meningkatkan workflow pengembangan dengan Tailwind CSS. Dapatkan hasil maksimal dengan utility-first CSS.',
    category: 'Styling'
  }
];

export default function Essays() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <header className="mb-12 text-center">
          <h1 className="font-bold text-4xl md:text-5xl text-zinc-800 mb-4 relative inline-block">
            Esai
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-blue-500 rounded-full"></span>
          </h1>
          <p className="mt-6 text-zinc-600 text-lg max-w-2xl mx-auto">
            Tulisan dan pemikiran saya tentang teknologi dan pengembangan web. 
            Berbagi pengalaman dan wawasan dari perjalanan coding saya.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((article: Article) => (
            <Link 
              href={`/essays/${article.slug}`} 
              key={article.slug}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-blue-100"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
                    {article.category}
                  </span>
                  <time className="text-sm text-zinc-500">{article.date}</time>
                </div>
                
                <h2 className="font-semibold text-xl text-zinc-800 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>
                
                <p className="mt-3 text-zinc-600 line-clamp-3">{article.description}</p>
                
                <div className="mt-4 flex justify-end">
                  <span className="inline-flex items-center text-sm font-medium text-blue-600">
                    Baca selengkapnya
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>      
      </div>
    </div>
  );
}