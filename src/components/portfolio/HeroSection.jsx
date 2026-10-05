import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection({ onNavigate }) {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50/30" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-indigo-200/20 to-slate-200/20 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Turning Complex
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                Problems into
              </span>
              Elegant Solutions
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              B2B SaaS Product Leader specializing in IAM, API platforms, and AI-driven products.
              I bring a rigorous curiosity to every challenge—uncovering insights others miss
              to build products that truly matter.
            </p>

            {/* Impact Stats */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-sm font-semibold text-slate-900">$5M+ MRR Impact</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-sm font-semibold text-slate-900">Enterprise IAM Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-sm font-semibold text-slate-900">API Platform Leader</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-violet-500" />
                <span className="text-sm font-semibold text-slate-900">Agentic AI Experience</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 h-12 rounded-xl font-medium"
              >
                Contact Me
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('portfolio')}
                className="border-slate-300 hover:bg-slate-50 px-8 h-12 rounded-xl font-medium"
              >
                View Work
              </Button>
              <Button
                size="lg"
                variant="ghost"
                asChild
                className="px-8 h-12 rounded-xl font-medium text-slate-600 hover:text-slate-900"
              >
                <a href="mailto:molly@mollyhickey.com?subject=Resume%20Request" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 w-4 h-4" />
                  Request Resume
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Profile Image */}
              <div className="w-72 h-72 mx-auto rounded-full shadow-2xl overflow-hidden border-4 border-white">
                {/* TODO: download this image into public/profile.png and change src to "/profile.png" so it no longer depends on Base44's storage */}
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69759c2b53a730e92f2a05e6/c8f9ed24a_ChatGPTImageJan26202612_44_47PM.png"
                  alt="Molly Hickey"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Recent Wins Cards - positioned below the image */}
              <div className="flex gap-4 mt-8 justify-center">
                <div className="w-48 bg-white rounded-xl shadow-lg border border-slate-100 p-4">
                  <div className="text-xs font-medium text-slate-400 mb-1">2026</div>
                  <div className="text-sm font-semibold text-slate-900">High Altitude Baking & Camp Finder Apps</div>
                </div>

                <div className="w-48 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-lg p-4">
                  <div className="text-xs font-medium text-slate-400 mb-1">2025</div>
                  <div className="text-sm font-semibold text-white">Session Management, Custom RBAC & SSO</div>
                  <div className="text-xs text-orange-400 mt-1">DigitalOcean</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
