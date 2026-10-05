import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const focusAreas = [
  "Ambiguous, technically complex product problem spaces",
  "Problem framing and signal synthesis across noisy inputs",
  "Early-stage product discovery and direction setting",
  "Decision-making with incomplete information",
  "Translating technical capabilities into user and business value"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Label */}
          <p className="text-sm font-semibold text-orange-500 tracking-wide uppercase mb-6">About</p>

          {/* Headline */}
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
            I am a product leader who works where the answers aren't obvious.
          </h2>

          {/* Bio Paragraph */}
          <p className="text-lg text-slate-600 leading-relaxed mb-16">
            I lead products in ambiguous, technically complex problem spaces — focusing on problem framing,
            signal synthesis, and decision-making when the path forward is unclear. My background spans
            identity and access management, API platforms, and AI-driven products, with an emphasis on early discovery
            work that shapes direction before solutions are defined. I think in systems, stay close to the
            technical details, and rapidly prototype to deliver exceptional customer outcomes.
          </p>

          {/* Focus Areas */}
          <div className="mb-16">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-6">Focus Areas</h3>
            <ul className="space-y-4">
              {focusAreas.map((area, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                  <span className="text-slate-700">{area}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Board Membership */}
          <div className="pt-10 border-t border-slate-200">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Board Member</p>
                <h4 className="text-slate-900 font-medium">UCCS Women in Leadership Program</h4>
                <a
                  href="https://www.linkedin.com/company/university-of-colorado-colorado-spring-s-women-in-leadership-professional-certificate-program/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-orange-500 hover:text-orange-600 mt-2 transition-colors"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
