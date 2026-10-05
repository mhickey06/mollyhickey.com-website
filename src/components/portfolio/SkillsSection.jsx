import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    title: 'Technical',
    icon: Code,
    color: 'from-blue-500 to-indigo-500',
    skills: [
      { name: 'Identity & Access Management', level: 95 },
      { name: 'SSO & OIDC Protocols', level: 90 },
      { name: 'RBAC System Design', level: 95 },
      { name: 'API Architecture', level: 85 },
      { name: 'SQL & Data Analytics', level: 80 },
      { name: 'AI/ML Product Development', level: 75 },
    ]
  },
  {
    title: 'Product',
    icon: Lightbulb,
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Product Strategy', level: 95 },
      { name: 'Roadmap Planning', level: 90 },
      { name: 'User Research & Discovery', level: 90 },
      { name: 'Prioritization Frameworks', level: 95 },
      { name: 'API Monetization', level: 85 },
      { name: 'Metrics & Analytics', level: 90 },
    ]
  },
  {
    title: 'Leadership',
    icon: Users,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Cross-Functional Leadership', level: 95 },
      { name: 'Stakeholder Management', level: 90 },
      { name: 'Executive Communication', level: 90 },
      { name: 'Team Mentorship', level: 85 },
      { name: 'Agile/Scrum Practices', level: 90 },
      { name: 'Vendor Management', level: 80 },
    ]
  }
];

const toolsAndTechnologies = [
  'Jira', 'Confluence', 'Figma', 'SQL', 'Amplitude', 'Mixpanel',
  'Looker', 'Git', 'Postman', 'OpenAPI', 'Auth0', 'Okta'
];

function SkillBar({ skill, delay }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-slate-700">{skill.name}</span>
        <span className="text-xs text-slate-500">{skill.level}%</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-slate-400 to-slate-600 rounded-full"
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold text-orange-500 tracking-wide uppercase mb-3">Skills & Expertise</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Capabilities
            </h2>
            <p className="text-lg text-slate-600">
              A comprehensive skill set spanning technical depth, product strategy, and leadership.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, catIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-6">{category.title}</h3>
                  <div>
                    {category.skills.map((skill, index) => (
                      <SkillBar key={skill.name} skill={skill} delay={catIndex * 0.1 + index * 0.05} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Tools & Technologies */}
          <div className="bg-gradient-to-br from-slate-50 to-orange-50/30 rounded-3xl p-8 lg:p-12">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {toolsAndTechnologies.map((tool) => (
                <motion.span
                  key={tool}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white rounded-xl text-sm font-medium text-slate-700 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
