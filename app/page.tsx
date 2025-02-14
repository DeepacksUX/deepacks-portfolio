import React from 'react';
import { Mail, Globe, FileText, BookOpen, Award, Settings, Layout, Users } from 'lucide-react';

const ResumeLanding = () => {
  const experiences = [
    {
      title: "Associate Manager - Design",
      company: "Tredence Inc., Bengaluru",
      period: "Jan 24 — Current",
      responsibilities: [
        "Directed the design vision for digital products, aligning user experience strategies with business objectives",
        "Facilitated discovery workshops to shape skill and career frameworks for HR operations",
        "Developed a skill management dashboard with intuitive data visualization for RMG, L&D, and Delivery Heads",
        "Designed end-to-end modules for the Career Compass product, including recommendation systems",
        "Created engaging empty states and UX copy, ensuring clarity and user engagement"
      ]
    },
    {
      title: "Design Lead",
      company: "Brillio",
      period: "Mar 2023 – Sep 2023",
      responsibilities: [
        "Led design projects with a focus on delivering exceptional B2B solutions in a hybrid work environment",
        "Collaborated with stakeholders to translate business needs into actionable design objectives"
      ]
    },
    {
      title: "Product Designer",
      company: "Yubi",
      period: "Dec 2021 – Sep 2022",
      responsibilities: [
        "Enhanced the usability of Yubi's Investor Marketplace through data-driven design decisions",
        "Conducted A/B testing and applied insights to improve product features and user workflows"
      ]
    },
    {
      title: "UX Designer",
      company: "Lollypop Design Studio",
      period: "Apr 2021 – Dec 2021",
      responsibilities: [
        "Delivered user-centric designs for B2B platforms, focusing on functionality and engagement"
      ]
    }
  ];

  const certifications = [
    "AI for Product Management, Pendo.io",
    "Developing Innovative Ideas for Product Leaders, University of Maryland",
    "Introduction to Marketing, Wharton Online",
    "Enterprise Design Thinking Practitioner, IBM",
    "Conducting Usability Testing, Interaction Design Foundation",
    "Product-led Certification, Pendo.io"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      {/* Header */}
      <header className="bg-gray-900/20 backdrop-blur-sm border-b border-purple-900/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-blue-400">Deepack Raja</h1>
            <nav className="flex space-x-6">
              <a href="#experience" className="text-gray-300 hover:text-blue-400 flex items-center">
                <Layout className="w-4 h-4 mr-2" />
                Experience
              </a>
              <a href="#portfolio" className="text-gray-300 hover:text-blue-400 flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                Portfolio
              </a>
              <a href="mailto:deepacksUX@gmail.com" className="text-gray-300 hover:text-blue-400 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Strategic Design Leader
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Results-driven Design Operations Leader with over 10 years of experience optimizing UX processes,
              managing cross-functional projects, and driving operational excellence in design teams. Proven track record in
              program management, process optimization, and fostering collaboration between UX, Product Management, and Engineering teams.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Download Resume
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center text-blue-400">Professional Experience</h3>
          <div className="max-w-4xl mx-auto space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="py-20 bg-gray-900/20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center text-blue-400">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-950/50 backdrop-blur-sm p-6 rounded-lg border border-purple-900/20">
              <h4 className="text-xl font-semibold mb-4 flex items-center text-white">
                <Settings className="w-5 h-5 mr-2 text-blue-400" />
                Design Tools
              </h4>
              <div className="space-y-2 text-gray-300">
                <p>Figma • Adobe XD • Sketch</p>
                <p>Framer • Miro • Zeplin</p>
                <p>Google Analytics</p>
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold mb-4 flex items-center text-white">
                <Users className="w-5 h-5 mr-2 text-blue-400" />
                Core Competencies
              </h4>
              <div className="space-y-2 text-gray-300">
                <p>Design Operations • Program Management</p>
                <p>Process Optimization • Resource Planning</p>
                <p>Cross-functional Leadership • Change Management</p>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold mb-4 flex items-center text-white">
                <Layout className="w-5 h-5 mr-2 text-blue-400" />
                Development
              </h4>
              <div className="space-y-2 text-gray-300">
                <p>HTML • CSS • Bootstrap</p>
                <p>Responsive Design</p>
                <p>Version Control</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center text-blue-400">Education & Certifications</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg border border-purple-900/20 hover:border-purple-800/30 transition-all">
                <h4 className="text-xl font-semibold mb-4 flex items-center text-white">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
                  Education
                </h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-white">Bachelor of Computer Science</p>
                    <p className="text-gray-400">California State University Fullerton</p>
                    <p className="text-gray-400">2023</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Diploma in Electrical, Electronics, and Communications</p>
                    <p className="text-gray-400">SCAD</p>
                    <p className="text-gray-400">2005 — 2008</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold mb-4 flex items-center text-white">
                  <Award className="w-5 h-5 mr-2 text-blue-400" />
                  Certifications
                </h4>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/20 backdrop-blur-sm border-t border-purple-900/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-gray-300 mb-6">Let's connect and create exceptional digital experiences together</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:deepacksUX@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="#portfolio" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Globe className="w-6 h-6" />
            </a>
            <a href="#resume" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FileText className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResumeLanding;
