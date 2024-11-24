'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="container mx-auto px-5">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: About */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Tentang Kami</h2>
            <p className="text-gray-400">
              RoyCleaner adalah penyedia layanan pembersihan profesional untuk rumah, kantor, dan furnitur Anda. Kami
              hadir untuk memberikan kebersihan terbaik dengan tim yang berpengalaman.
            </p>
          </div>

          {/* Section 2: Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Tautan Cepat</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline text-gray-300">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:underline text-gray-300">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline text-gray-300">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline text-gray-300">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Hubungi Kami</h2>
            <ul className="space-y-2">
              <li>
                <span className="font-medium">Alamat:</span> Jl. Kebersihan No. 123, Jakarta
              </li>
              <li>
                <span className="font-medium">Telepon:</span> +62 812-3456-7890
              </li>
              <li>
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:info@roycleaner.com" className="hover:underline text-gray-300">
                  info@roycleaner.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} RoyCleaner. Semua Hak Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
