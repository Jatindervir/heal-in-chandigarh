\
/*
Heal in Chandigarh — Single-file React app (App.jsx)

Notes:
- Replace placeholder images, logo, contact email and phone with real assets.
- For production contact form, configure Formspree, Netlify forms, or a backend endpoint.
*/

import React, { useState } from 'react'

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', country: '', treatment: '', message: '' })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    // Placeholder: integrate Formspree or backend endpoint here
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    setTimeout(() => setStatus('sent'), 900)
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />

        <section id="why" className="mt-12 bg-white rounded-2xl shadow-sm p-6">
          <WhyChandigarh />
        </section>

        <section id="centres" className="mt-8">
          <CentresOfExcellence />
        </section>

        <section id="services" className="mt-8 bg-white rounded-2xl shadow-sm p-6">
          <PatientServices />
        </section>

        <section id="connect" className="mt-8">
          <Connectivity />
        </section>

        <section id="contact" className="mt-8 bg-white rounded-2xl shadow-sm p-6">
          <ContactForm form={form} onChange={handleChange} onSubmit={handleSubmit} status={status} />
        </section>

        <footer className="mt-10 py-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Heal in Chandigarh • All rights reserved • Built with care
        </footer>
      </main>
    </div>
  )
}

function Header() {
  return (
    <header className="bg-white/60 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-teal-600 text-white flex items-center justify-center font-bold">H</div>
            <div>
              <div className="font-semibold">Heal in Chandigarh</div>
              <div className="text-xs text-gray-500">Your Gateway to World-Class Healthcare</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#why" className="hover:text-teal-700">Why Chandigarh</a>
            <a href="#centres" className="hover:text-teal-700">Centres</a>
            <a href="#services" className="hover:text-teal-700">Patient Services</a>
            <a href="#connect" className="hover:text-teal-700">Connectivity</a>
            <a href="#contact" className="px-4 py-2 bg-teal-600 text-white rounded-md shadow-sm hover:opacity-95">Get Estimate</a>
          </nav>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileMenu() {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="p-2 rounded-md border">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5h14v2H3V5zm0 4h14v2H3V9zm0 4h14v2H3v-2z" clipRule="evenodd"/></svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg p-3">
          <a href="#why" className="block py-2">Why Chandigarh</a>
          <a href="#centres" className="block py-2">Centres</a>
          <a href="#services" className="block py-2">Patient Services</a>
          <a href="#connect" className="block py-2">Connectivity</a>
          <a href="#contact" className="block py-2 font-semibold">Get Estimate</a>
        </div>
      )}
    </div>
  )
}

function Hero() {
  return (
    <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">Chandigarh — The Gateway to World-Class Healthcare in North India</h1>
        <p className="mt-4 text-gray-600">Advanced hospitals, seamless international patient services, and holistic care — all within reach. We help international patients access the best treatments in Cardiology, Oncology, Orthopaedics and more.</p>

        <div className="mt-6 flex gap-3">
          <a href="#contact" className="px-5 py-3 bg-teal-600 text-white rounded-md shadow">Get a Free Estimate</a>
          <a href="#centres" className="px-5 py-3 border rounded-md">Explore Centres</a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-500">
          <Stat label="Direct flights via Dubai" value="Yes" />
          <Stat label="Top treatments" value="Cardio • Ortho • Onco" />
          <Stat label="Top hospitals" value="Apollo • Fortis • PGIMER" />
          <Stat label="Language support" value="English, Hindi, Punjabi" />
        </div>
      </div>

      <div className="rounded-lg overflow-hidden shadow-lg">
        <img src="https://images.unsplash.com/photo-1580281657525-9f5e45a4a3b1?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="Chandigarh skyline / hospital" className="w-full h-64 object-cover" />
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="p-3 bg-gray-50 rounded-md">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  )
}

function WhyChandigarh() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-4">
        <h3 className="font-semibold">Strategic Location</h3>
        <p className="mt-2 text-sm text-gray-600">Easily accessible from Middle East and Africa — with nearby international gateways (Chandigarh, Amritsar, Delhi).</p>
      </div>
      <div className="p-4">
        <h3 className="font-semibold">World-Class Care</h3>
        <p className="mt-2 text-sm text-gray-600">Renowned hospitals and centres of excellence offering internationally accredited services.</p>
      </div>
      <div className="p-4">
        <h3 className="font-semibold">Patient-Centric Services</h3>
        <p className="mt-2 text-sm text-gray-600">End-to-end assistance: visas, travel, accommodation, interpreters and post-op follow-up.</p>
      </div>
    </div>
  )
}

function CentresOfExcellence() {
  const centres = [
    { name: 'Apollo Hospitals', focus: 'Cardiology, Oncology, Transplants', img: 'https://images.unsplash.com/photo-1580281657525-9f5e45a4a3b1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder' },
    { name: 'Fortis', focus: 'Neurosciences, Orthopaedics', img: 'https://images.unsplash.com/photo-1576765607921-6b0b6b8b8b5f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder' },
    { name: 'PGIMER', focus: 'Multi-speciality & Research', img: 'https://images.unsplash.com/photo-1584467735873-3b7a9f0b8d2d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-semibold">Centres of Excellence</h2>
      <p className="mt-2 text-gray-600">A curated list of partner hospitals and speciality centres trusted by international patients.</p>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {centres.map((c) => (
          <article key={c.name} className="bg-white rounded-lg overflow-hidden shadow">
            <img src={c.img} alt={c.name} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{c.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{c.focus}</p>
              <div className="mt-3 flex gap-2">
                <a className="text-sm px-3 py-2 border rounded-md">View Services</a>
                <a className="text-sm px-3 py-2 bg-teal-600 text-white rounded-md">Request Estimate</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function PatientServices() {
  const services = [
    { title: 'Visa & Documentation', desc: 'Help with medical visa letters and documentation.' },
    { title: 'Airport Pickup & Transfer', desc: 'Safe and comfortable transport from airport to hospital/hotel.' },
    { title: 'Interpreter Support', desc: 'Professional interpreters in English, Arabic and French.' },
    { title: 'Accommodation Assistance', desc: 'Partner hotels with negotiated rates near hospitals.' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-semibold">Patient Support Services</h2>
      <p className="mt-2 text-gray-600">We handle logistics so patients can focus on recovery.</p>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s) => (
          <div key={s.title} className="p-4 border rounded-md bg-gray-50">
            <h4 className="font-medium">{s.title}</h4>
            <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Connectivity() {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      <div>
        <h2 className="text-2xl font-semibold">Travel & Connectivity</h2>
        <p className="mt-2 text-gray-600">Chandigarh is well-connected by air, road and rail. Closest international airports: Chandigarh (domestic + limited international), Amritsar (AT), Delhi (major international hub).</p>

        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li>• Direct and 1-stop connections from UAE, Oman, Nigeria, Kenya via Dubai/Doha/Abu Dhabi.</li>
          <li>• Dedicated transfers and VIP immigration assistance on request.</li>
          <li>• Tourism packages available for companions: Shimla, Amritsar and local city tours.</li>
        </ul>
      </div>

      <div className="rounded-lg overflow-hidden shadow">
        <img src="https://images.unsplash.com/photo-1505765050736-3b7aa5b0b8c3?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="Travel connectivity" className="w-full h-64 object-cover" />
      </div>
    </div>
  )
}

function ContactForm({ form, onChange, onSubmit, status }) {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold">Contact & Estimate</h2>
      <p className="mt-2 text-gray-600">Fill the form below and our international patient team will respond within 48 hours.</p>

      <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" value={form.name} onChange={onChange} placeholder="Full name" required className="p-3 border rounded-md" />
          <input name="email" value={form.email} onChange={onChange} placeholder="Email" required className="p-3 border rounded-md" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="country" value={form.country} onChange={onChange} placeholder="Country" className="p-3 border rounded-md" />
          <input name="treatment" value={form.treatment} onChange={onChange} placeholder="Treatment interest (e.g., Cardio)" className="p-3 border rounded-md" />
        </div>

        <textarea name="message" value={form.message} onChange={onChange} placeholder="Brief medical history / message" className="p-3 border rounded-md min-h-[120px]"></textarea>

        <div className="flex items-center gap-4">
          <button type="submit" className="px-5 py-3 bg-teal-600 text-white rounded-md shadow" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Request Estimate'}
          </button>

          <a href="mailto:info@healinchandigarh.com" className="text-sm text-gray-600">Or email: info@healinchandigarh.com</a>
        </div>

        {status === 'sent' && <div className="text-sm text-green-600">Thank you — we will contact you shortly.</div>}
      </form>

      <div className="mt-6 text-xs text-gray-500">By submitting, you consent to be contacted by Heal in Chandigarh for medical travel assistance. We treat patient information as confidential.</div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ContactCard title="WhatsApp" value="+91 98887 05894" />
        <ContactCard title="Office Email" value="info@healinchandigarh.com" />
      </div>
    </div>
  )
}

function ContactCard({ title, value }) {
  return (
    <div className="p-4 border rounded-md bg-gray-50">
      <div className="text-xs text-gray-500">{title}</div>
      <div className="font-medium">{value}</div>
    </div>
  )
}
