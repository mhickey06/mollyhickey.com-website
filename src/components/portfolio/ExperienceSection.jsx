import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    company: 'DigitalOcean',
    role: 'Senior Product Manager, IAM',
    period: 'November 2024 - Present',
    location: 'Denver, CO',
    description: 'Leading the full IAM portfolio (AuthN, AuthZ/Custom RBAC, Session Management, SSO/OIDC) operating at hundreds of millions of monthly login events.',
    highlights: [
      'Shipped Custom RBAC, Session Management, and SSO/OIDC with IdP integrations (Okta, Auth0, Keycloak, JumpCloud), supporting $5M+ MRR and accelerating enterprise win cycles',
      'Drove Custom Roles to 6% penetration in Scaler segment vs 0.45% in non-Scaler, associated with larger multi-seat teams and PLG expansion',
      'Led session hardening and published serverless Keycloak SSO proof-of-concept, improving security posture and trial velocity'
    ],
    current: true
  },
  {
    company: 'Henry Schein One',
    role: 'Principal Product Manager, API Platform',
    period: 'January 2024 - August 2024',
    location: 'Remote',
    description: 'Led API platform monetization and operational governance across dozens of APIs and hundreds of endpoints in healthcare/Cures Act regulated environment.',
    highlights: [
      'Built executive business case for usage-based pricing, identifying high six-figure annual leakage and seven-figure profit opportunity',
      'Defined price bands, packaging, metering, and billing architecture using Apigee and Splunk data to model usage and margin scenarios',
      'Reduced enterprise onboarding cycle time from over 1 month to approximately 1 week by streamlining vendor security reviews'
    ]
  },
  {
    company: 'BlackLine',
    role: 'Senior Product Manager, Reporting',
    period: 'January 2022 - October 2023',
    location: 'Remote',
    description: 'Owned roadmap and delivery for Financial Close Homepage and Reporting Suite with 100% tenant coverage across 4,400 customers and 386K users.',
    highlights: [
      'Launched Reporting UI Basic Calculations, improving usability and time-to-insight for core close tasks used by 15 of the Fortune 25',
      'Validated API Reporting via Kano analysis and 30+ interviews, establishing OpenAPI-first design and phased EAP plan',
      'Led cross-functional team of 3 engineers, 1 QA, and 1 designer, aligning roadmap and GTM enablement to enterprise needs'
    ]
  },
  {
    company: 'Spectrum Enterprise',
    role: 'Product Manager, IAM & APIs',
    period: 'March 2020 - January 2022',
    location: 'Greenwood Village, CO',
    description: 'Led product management for Identity and API platforms serving approximately 270K enterprise customers.',
    highlights: [
      'Implemented IdP-initiated SSO (SAML 2.0) via Keycloak with JIT provisioning, achieving 100% SSO coverage for Meraki logins',
      'Scaled cross-functional org from 4 to 8 engineers while leading 2 TPOs, 4 QA, and 2 designers',
      'Received org-level 2022 award for Managed Network Edge (Meraki) Product Launch, delivering on time and on budget'
    ]
  },
  {
    company: 'Charles Schwab',
    role: 'Product Manager, B2B Platform',
    period: 'May 2019 - September 2019',
    location: 'Lone Tree, CO',
    description: 'Supported platform serving 2,300+ company stock and brokerage plans within Stock Plan Services.',
    highlights: [
      'Drove migration readiness from legacy SPS platform to Pivotal Platform, defining complete onboarding scope for IAM, entitlements, and SSO flows',
      'Shipped all epics and user stories required for onboarding readiness, partnering with Engineering leadership and UX',
      'Established role/entitlement model aligned to least-privilege and auditability principles for enterprise-grade IAM'
    ]
  },
  {
    company: 'DISH Network',
    role: 'Product & Data Product Leadership',
    period: 'June 2014 - May 2019',
    location: 'Englewood, CO',
    description: 'Progressive roles spanning enterprise tools, data products, and PMO leadership with nationwide impact across 3,000+ field technicians.',
    highlights: [
      'Rebuilt sales crediting for $85M Smart Home Services line, achieving 100% accurate credit assignment across all sales channels',
      'Delivered 20+ production fact tables and 20-30 Tableau dashboards with near-universal daily adoption, cutting manual reporting by ~80%',
      'Authored supply chain requirements operationalizing SOX inventory controls, reducing duplicate data entry ~30% across Oracle EBS and Samsung GSPN'
    ]
  },
  {
    company: 'Lockheed Martin',
    role: 'Product Owner, Healthcare Tracking',
    period: 'October 2012 - May 2014',
    location: 'Aurora, CO',
    description: 'Contractor supporting TRICARE and Defense Health Agency with Public Trust Security Clearance.',
    highlights: [
      'Managed monthly SDLC for Oracle Business Intelligence Suite Enterprise Edition 11g (OBIEE) Operations Reporting Data Mart',
      'Conducted regression testing and UAT of front-end application and eCommerce software',
      'Collaborated with stakeholders and developers to implement more efficient front-end application features'
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold text-orange-500 tracking-wide uppercase mb-3">Experience</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Career Journey
            </h2>
            <p className="text-lg text-slate-600">
              Building products that matter across B2B SaaS, from construction tech to financial software to cloud infrastructure.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform lg:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative pl-10 lg:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? 'lg:pr-[52%]' : 'lg:pl-[52%]'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 lg:left-1/2 w-4 h-4 rounded-full border-4 border-white shadow-md transform lg:-translate-x-1/2 ${
                  exp.current ? 'bg-orange-500' : 'bg-slate-400'
                }`} />

                {/* Content Card */}
                <div className={`bg-white rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow ${
                  exp.current ? 'border-orange-200 ring-1 ring-orange-100' : ''
                }`}>
                  {exp.current && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-4">
                      Current Role
                    </span>
                  )}

                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-slate-900">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Building2 className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-600 font-medium">{exp.company}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-sm text-slate-600">
                        <ArrowUpRight className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
