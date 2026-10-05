import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, FileText, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'molly@mollyhickey.com',
    href: 'mailto:molly@mollyhickey.com',
    primary: true
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/mollyhhickey/'
  },
  {
    icon: FileText,
    label: 'Medium',
    value: 'Read my articles',
    href: 'https://medium.com/@molly.hickey'
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/50 to-amber-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-slate-100/50 to-indigo-100/30 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-orange-500 tracking-wide uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-lg text-slate-600">
            I'm always interested in discussing product challenges, potential opportunities,
            or just connecting with fellow product people.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 group ${
                    link.primary
                      ? 'bg-gradient-to-r from-slate-900 to-slate-800 border-slate-800 hover:from-slate-800 hover:to-slate-700'
                      : 'bg-white border-slate-200 hover:border-orange-200 hover:shadow-lg'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    link.primary
                      ? 'bg-orange-500'
                      : 'bg-slate-100 group-hover:bg-orange-100'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      link.primary
                        ? 'text-white'
                        : 'text-slate-600 group-hover:text-orange-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm ${link.primary ? 'text-slate-400' : 'text-slate-500'}`}>
                      {link.label}
                    </p>
                    <p className={`font-medium ${link.primary ? 'text-white' : 'text-slate-900'}`}>
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-slate-400" />
                </motion.a>
              );
            })}

            <div className="flex items-center gap-2 pt-4 text-slate-500">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Colorado, USA · Open to Remote</span>
            </div>
          </motion.div>

          {/* Visual/CTA Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-medium">Open to Opportunities</span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Looking for a Product Leader?
            </h3>
            <p className="text-slate-300 mb-8">
              I'm particularly interested in roles focusing on IAM, developer platforms,
              AI products, or API strategy at companies solving meaningful problems.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span className="text-sm">Senior PM / Principal PM roles</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span className="text-sm">B2B SaaS, Dev Tools, Infrastructure</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span className="text-sm">Remote-first or Colorado-based</span>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 rounded-xl font-medium"
            >
              <a href="mailto:molly@mollyhickey.com?subject=Let's%20Connect">
                Start a Conversation
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
