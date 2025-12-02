export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black text-white/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-10 md:grid-cols-3 text-sm">

        {/* Brand */}
        <div>
          <div className="text-lg font-extrabold tracking-wide text-white">GYM TRAINER</div>
          <p className="text-white/60 mt-2 max-w-xs leading-relaxed">
            Bold. Modern. Results-driven fitness coaching built for real transformations.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex gap-12">
          {/* Sitemap */}
          <div>
            <h3 className="font-semibold text-white/90">Sitemap</h3>
            <ul className="mt-3 space-y-1">
              <li><a className="hover:text-white transition" href="#about">About</a></li>
              <li><a className="hover:text-white transition" href="#services">Services</a></li>
              <li><a className="hover:text-white transition" href="#pricing">Pricing</a></li>
              <li><a className="hover:text-white transition" href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-white/90">Social</h3>
            <ul className="mt-3 space-y-1">
              <li>
                <a
                  className="hover:text-white transition"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Copyright + Designer */}
        <div className="flex flex-col justify-between text-white/60 space-y-3 md:space-y-0">
          <p>© {year} Gym Trainer. All rights reserved.</p>

          {/* Designer Credit — kept minimal, classy */}
          <p className="text-white/50 text-xs">
            Designed by <span className="font-semibold text-white/70">Sai Krishna</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
