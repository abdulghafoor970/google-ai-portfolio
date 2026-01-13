
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter, ExternalLink, Mail, ArrowRight, Download, Terminal, Database, Layout } from 'lucide-react';
import { PROJECTS, SKILLS, TESTIMONIALS } from './constants';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

// --- Internal Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/80 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-white">
          ALEX<span className="text-blue-500">.</span>RIVERA
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-all">
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800 p-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-300">
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-blue-500 font-semibold tracking-widest uppercase mb-4">Available for new projects</h2>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Designing digital <span className="text-gradient">experiences</span> that matter.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl">
            I'm Alex, a Full Stack Developer specializing in building scalable web applications with React, Node.js, and modern architectural patterns.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
              View Work <ArrowRight size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 glass-card hover:bg-white/10 text-white rounded-xl font-bold transition-all">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 aspect-square shadow-2xl">
            <img 
              src="https://picsum.photos/seed/alexrivera/800/800" 
              alt="Alex Rivera" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 p-4 glass-card rounded-2xl animate-bounce shadow-xl">
            <Terminal className="text-blue-400" />
          </div>
          <div className="absolute -bottom-6 -left-6 p-4 glass-card rounded-2xl animate-pulse shadow-xl">
            <Database className="text-purple-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "40+" },
    { label: "Happy Clients", value: "25+" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Driven by <span className="text-blue-500">Passion</span> and Code.</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              I started my journey into web development 6 years ago. Since then, I've worked with startups and established companies to create digital products that are not only functional but delightful to use.
              <br /><br />
              My approach focuses on clean architecture, performance optimization, and inclusive design. I believe that every line of code should contribute to a better user experience.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 glass-card rounded-xl text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
            <button className="flex items-center gap-2 text-blue-500 font-bold hover:text-blue-400 transition-colors">
              <Download size={20} /> Download Resume
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 glass-card rounded-3xl hover:border-blue-500/50 transition-all group">
              <Layout className="mb-4 text-blue-500" size={32} />
              <h3 className="text-xl font-bold mb-2">Frontend</h3>
              <p className="text-gray-500 text-sm">Building responsive, animated, and performant UIs with React and Next.js.</p>
            </div>
            <div className="p-8 glass-card rounded-3xl mt-12 hover:border-purple-500/50 transition-all group">
              <Database className="mb-4 text-purple-500" size={32} />
              <h3 className="text-xl font-bold mb-2">Backend</h3>
              <p className="text-gray-500 text-sm">Crafting secure APIs and robust server-side logic using Node and Python.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const data = SKILLS.map(s => ({ name: s.name, level: s.level }));
  
  return (
    <section id="skills" className="py-24 px-6 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-blue-500">Mastery</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">My diverse toolkit allows me to bridge the gap between complex engineering and beautiful design.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] w-full glass-card p-6 rounded-3xl">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical">
                <XAxis type="number" hide domain={[0, 100]} />
                <YAxis dataKey="name" type="category" stroke="#9ca3af" fontSize={12} width={100} />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}} 
                  contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', color: '#fff' }} 
                />
                <Bar dataKey="level" radius={[0, 10, 10, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#3b82f6' : '#a855f7'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="p-6 glass-card rounded-2xl flex flex-col items-center justify-center hover:bg-white/5 transition-all text-center">
                <span className="text-white font-semibold">{skill.name}</span>
                <span className="text-blue-400 text-sm">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured <span className="text-blue-500">Projects</span></h2>
            <p className="text-gray-400">A collection of things I've built with grit and coffee.</p>
          </div>
          <button className="text-blue-500 font-bold flex items-center gap-2 hover:underline">
            View All Projects <ExternalLink size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              className="group glass-card rounded-3xl overflow-hidden"
            >
              <div className="relative overflow-hidden aspect-video">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="flex gap-4">
                    <a href={project.liveUrl} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"><ExternalLink size={20} /></a>
                    <a href={project.githubUrl} className="p-3 bg-white/20 backdrop-blur text-white rounded-full hover:scale-110 transition-transform"><Github size={20} /></a>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                <p className="text-gray-400 line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Kind <span className="text-blue-500">Words</span></h2>
          <p className="text-gray-400">Feedback from the people I've worked with.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-8 glass-card rounded-3xl relative">
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-blue-500" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{t.content}"</p>
              <div className="absolute top-8 right-8 text-blue-500/20">
                <svg width="45" height="36" viewBox="0 0 45 36" fill="currentColor">
                  <path d="M13.4375 0C6.01562 0 0 6.01562 0 13.4375C0 20.8594 6.01562 26.875 13.4375 26.875C14.1562 26.875 14.8438 26.8438 15.5312 26.75C13.9375 31.7812 9.25 35.25 3.75 35.25H2.8125V36H3.75C11.5 36 17.8125 29.6875 17.8125 21.9375V4.375C17.8125 1.96875 15.8438 0 13.4375 0ZM40.625 0C33.2031 0 27.1875 6.01562 27.1875 13.4375C27.1875 20.8594 33.2031 26.875 40.625 26.875C41.3438 26.875 42.0312 26.8438 42.7188 26.75C41.125 31.7812 36.4375 35.25 30.9375 35.25H30V36H30.9375C38.6875 36 45 29.6875 45 21.9375V4.375C45 1.96875 43.0312 0 40.625 0Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<null | 'success' | 'loading'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full bg-blue-600/5 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-6">Let's build <br/><span className="text-blue-500">something together</span>.</h2>
          <p className="text-gray-400 mb-12 text-lg">
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 glass-card flex items-center justify-center rounded-2xl text-blue-500">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Email</p>
                <p className="text-white font-medium">hello@alexrivera.dev</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 glass-card flex items-center justify-center rounded-2xl text-blue-500">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">LinkedIn</p>
                <p className="text-white font-medium">linkedin.com/in/alexrivera</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-10 rounded-[2.5rem] border-white/10 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-white" 
                placeholder="Your Name" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
              <input 
                required
                type="email" 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-white" 
                placeholder="name@example.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea 
                required
                rows={4} 
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-white resize-none" 
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button 
              disabled={status === 'loading'}
              type="submit" 
              className={`w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'} 
              {status === 'success' ? '✓ Sent' : <ArrowRight size={20} />}
            </button>
          </form>
          {status === 'success' && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className="absolute inset-0 bg-blue-600 rounded-[2.5rem] flex flex-col items-center justify-center p-10 text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Mail size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
              <p className="text-blue-100 mb-8">Thanks for reaching out. I'll get back to you within 24 hours.</p>
              <button onClick={() => setStatus(null)} className="px-8 py-3 bg-white text-blue-600 rounded-xl font-bold">Send Another</button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-xl font-bold mb-2">ALEX<span className="text-blue-500">.</span>RIVERA</p>
          <p className="text-gray-500 text-sm">Built with React, Tailwind & Love.</p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="#" className="p-3 glass-card rounded-xl text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" className="p-3 glass-card rounded-xl text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="p-3 glass-card rounded-xl text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
        </div>
      </div>
      <div className="mt-12 text-center text-gray-600 text-xs">
        &copy; {new Date().getFullYear()} Alex Rivera. All rights reserved.
      </div>
    </footer>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
