import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play, FileText, ArrowRight, X, Shield, Cpu, Code, PenTool } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'iam', label: 'IAM & Enterprise', icon: Shield },
  { id: 'ai', label: 'AI & Innovation', icon: Cpu },
  { id: 'api', label: 'API & Platform', icon: Code },
  { id: 'thought', label: 'Thought Leadership', icon: PenTool },
];

const projects = [
  {
    id: 1,
    category: 'iam',
    title: 'Custom RBAC System',
    company: 'DigitalOcean',
    year: '2025',
    description: 'Led the development of a flexible role-based access control system enabling enterprises to create granular custom roles for their teams.',
    impact: 'Unlocked enterprise adoption and improved security posture for thousands of organizations',
    tags: ['RBAC', 'Enterprise Security', 'B2B SaaS'],
    links: [
      { type: 'webinar', label: 'Watch Webinar', url: 'https://www.linkedin.com/events/learnmoreaboutcustomrolesondigi7373857541644042240/theater/' }
    ],
    featured: true,
  },
  {
    id: 2,
    category: 'iam',
    title: 'SSO Implementation',
    company: 'DigitalOcean',
    year: '2024',
    description: 'Designed and launched enterprise Single Sign-On capabilities, enabling seamless identity federation for organizations.',
    impact: 'Critical capability for enterprise deals, reducing authentication friction',
    tags: ['SSO', 'OIDC', 'Enterprise'],
    links: [
      { type: 'article', label: 'View Announcement', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7408294447282778112' }
    ],
  },
  {
    id: 3,
    category: 'iam',
    title: 'Session Management',
    company: 'DigitalOcean',
    year: '2024',
    description: 'Built comprehensive session management features giving administrators visibility and control over active user sessions.',
    impact: 'Enhanced security controls for compliance-focused customers',
    tags: ['Security', 'Compliance', 'Admin Tools'],
  },
  {
    id: 4,
    category: 'ai',
    title: 'High Altitude Baking Assistant',
    company: 'Personal Project',
    year: '2024',
    description: 'An AI-powered application that adjusts baking recipes for high altitude conditions, demonstrating practical AI application development.',
    impact: 'Showcases end-to-end AI product development from spec to deployment',
    tags: ['AI/ML', 'Consumer App', 'Full-Stack'],
    links: [
      { type: 'article', label: 'Product Spec', url: 'https://medium.com/@molly.hickey/high-altitude-baking-assistant-product-specification-a731603e4c1e' },
      { type: 'demo', label: 'Live App', url: 'https://baking-at-high-altitude--MollyHickey80.replit.app' }
    ],
    featured: true,
  },
  {
    id: 5,
    category: 'ai',
    title: 'Camp Finder AI',
    company: 'AI Demo',
    year: '2024',
    description: 'An intelligent camping recommendation system using AI to match users with ideal campsites based on preferences and conditions.',
    impact: 'Demonstrates prompt engineering and AI UX design principles',
    tags: ['AI/ML', 'Prompt Engineering', 'UX'],
    links: [
      { type: 'video', label: 'Demo Video', url: 'https://www.youtube.com/watch?v=x-KbnEr1avc&t=2685s' },
      { type: 'article', label: 'AI Prompt Design', url: 'https://medium.com/@mollyh2033/camp-finders-ai-prompt-fb36eb0992c9' }
    ],
  },
  {
    id: 6,
    category: 'ai',
    title: 'AskDocs Agentic Experience',
    company: 'Concept',
    year: '2024',
    description: 'Conceptualized an agentic documentation assistant that proactively helps users navigate complex technical documentation.',
    impact: 'Exploring the future of AI-assisted developer experience',
    tags: ['AI Agents', 'DevEx', 'Documentation'],
  },
  {
    id: 7,
    category: 'api',
    title: 'API Monetization Strategy',
    company: 'Henry Schein One',
    year: '2022',
    description: 'Developed comprehensive API monetization strategy including pricing models, packaging, and go-to-market approach.',
    impact: 'Created new revenue stream from existing platform capabilities',
    tags: ['API Strategy', 'Monetization', 'B2B'],
    featured: true,
  },
  {
    id: 8,
    category: 'api',
    title: 'API Reporting Platform',
    company: 'BlackLine',
    year: '2020',
    description: 'Led strategy for API-based reporting capabilities enabling customers to integrate financial data into their analytics workflows.',
    impact: 'Enhanced platform value for enterprise customers',
    tags: ['APIs', 'Analytics', 'Enterprise'],
  },
  {
    id: 9,
    category: 'thought',
    title: 'Medium Articles',
    company: 'Thought Leadership',
    year: 'Ongoing',
    description: 'Regular publications on product management, AI applications, and technical product development.',
    impact: 'Building community and sharing knowledge',
    tags: ['Writing', 'PM Insights', 'AI'],
    links: [
      { type: 'article', label: 'Read Articles', url: 'https://medium.com/@molly.hickey' }
    ],
  },
];

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 hover:border-orange-200 hover:shadow-lg transition-all duration-300 ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-slate-500 mb-1">{project.company} · {project.year}</p>
          <h3 className="text-xl font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
            {project.title}
          </h3>
        </div>
        {project.featured && (
          <Badge className="bg-orange-100 text-orange-700 border-0">Featured</Badge>
        )}
      </div>

      <p className="text-slate-600 mb-4 line-clamp-2">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 3).map(tag => (
          <span key={tag} className="px-2.5 py-1 text-xs bg-slate-100 text-slate-600 rounded-md">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center text-sm text-orange-500 font-medium">
        View Details
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}

function ProjectDetail({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
      >
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-sm text-orange-500 font-medium mb-1">{project.company} · {project.year}</p>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">{project.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          <p className="text-lg text-slate-600 mb-6">{project.description}</p>

          <div className="bg-gradient-to-br from-slate-50 to-orange-50/50 rounded-2xl p-6 mb-6">
            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Impact</h4>
            <p className="text-slate-900 font-medium">{project.impact}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Technologies & Skills</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 text-sm bg-slate-100 text-slate-700 rounded-lg font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {project.links && project.links.length > 0 && (
            <div className="pt-6 border-t border-slate-200">
              <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Links & Resources</h4>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, index) => (
                  <Button
                    key={index}
                    asChild
                    variant={link.type === 'demo' ? 'default' : 'outline'}
                    className={link.type === 'demo' ? 'bg-orange-500 hover:bg-orange-600' : ''}
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.type === 'video' && <Play className="w-4 h-4 mr-2" />}
                      {link.type === 'article' && <FileText className="w-4 h-4 mr-2" />}
                      {link.type === 'demo' && <ExternalLink className="w-4 h-4 mr-2" />}
                      {link.type === 'webinar' && <Play className="w-4 h-4 mr-2" />}
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold text-orange-500 tracking-wide uppercase mb-3">Portfolio</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Featured Work
            </h2>
            <p className="text-lg text-slate-600">
              A selection of projects showcasing my expertise across IAM, AI, API platforms, and product leadership.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
