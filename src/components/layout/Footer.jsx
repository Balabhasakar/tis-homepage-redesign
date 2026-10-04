import { Mail, MapPin, Phone } from 'lucide-react'
import { navItems } from '../../data/navigation'
import { siteInfo, socialLinks } from '../../data/site'

// Calculated once when the file loads, not on every render
const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-brand-dark">
              TIS
            </span>
            <span className="text-lg font-bold">{siteInfo.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
            {siteInfo.established}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-accent">Contact Us</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
              <span>{siteInfo.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
              <span>
                <a href={siteInfo.helplineHref} className="hover:text-accent">
                  Admission Helpline: {siteInfo.helpline}
                </a>
                <br />
                Landline:{' '}
                {siteInfo.landlines.map((number, index) => (
                  <span key={number}>
                    {index > 0 && ', '}
                    <a href={`tel:${number}`} className="hover:text-accent">
                      {number}
                    </a>
                  </span>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-accent" />
              <a href={`mailto:${siteInfo.email}`} className="hover:text-accent">
                {siteInfo.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-accent">Quick Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/80">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={siteInfo.virtualTourUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Virtual Tour
              </a>
            </li>
          </ul>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white hover:text-accent"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/70">
        Copyright © {currentYear} {siteInfo.name}, Dehradun | All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer