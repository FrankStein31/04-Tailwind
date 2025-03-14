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
  return (
    <div className="mt-16 px-8 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-12 items-start">
        <div>
          <h1 className="font-bold text-4xl text-zinc-800 mb-6">Tentang Saya</h1>
          <div className="prose prose-zinc">
            <p className="text-lg leading-relaxed mb-6">
              Halo! Saya Frankie Steinlie, seorang pengembang perangkat lunak yang berfokus pada teknologi web modern. 
              Saya memiliki passion dalam menciptakan solusi digital yang elegan dan bermanfaat.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Dengan pengalaman dalam React, TypeScript, dan Next.js, saya selalu berusaha menghasilkan kode yang bersih 
              dan aplikasi yang performa tinggi.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/yourusername" className="inline-flex items-center px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" className="inline-flex items-center px-4 py-2 border border-zinc-300 rounded-lg hover:bg-zinc-50 transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <Image
            src="/images/profile.jpg"
            alt="Frankie Steinlie"
            width={300}
            height={300}
            className="rounded-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
