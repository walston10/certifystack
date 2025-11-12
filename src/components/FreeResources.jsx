import React from 'react';
import { ExternalLink } from 'lucide-react';
import './FreeResources.css';

function FreeResources() {
  const resources = [
    {
      name: 'ExamCompass',
      url: 'https://www.examcompass.com/comptia/network-plus-certification/free-network-plus-practice-tests',
      description: 'Free Network+ practice tests with hundreds of questions',
      category: 'Practice Tests'
    },
    {
      name: 'Professor Messer',
      url: 'https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/',
      description: 'Complete free video training course for Network+ N10-009',
      category: 'Video Training'
    },
    {
      name: 'CompTIA Exam Objectives',
      url: 'https://www.comptia.org/training/resources/exam-objectives',
      description: 'Official exam objectives document from CompTIA',
      category: 'Official Resources'
    },
    {
      name: 'NetworkChuck',
      url: 'https://www.youtube.com/@NetworkChuck',
      description: 'Engaging networking tutorials and career advice',
      category: 'Video Training'
    },
    {
      name: 'Subnetting Practice',
      url: 'https://subnettingpractice.com/',
      description: 'Interactive subnetting calculator and practice problems',
      category: 'Practice Tools'
    },
    {
      name: 'Packet Tracer',
      url: 'https://www.netacad.com/courses/packet-tracer',
      description: 'Cisco\'s free network simulation tool for hands-on practice',
      category: 'Lab Tools'
    },
    {
      name: '/r/CompTIA',
      url: 'https://www.reddit.com/r/CompTIA/',
      description: 'Reddit community with study tips, resources, and support',
      category: 'Communities'
    },
    {
      name: 'CompTIA Discord',
      url: 'https://discord.gg/comptia',
      description: 'Official CompTIA Discord server with study groups',
      category: 'Communities'
    },
    {
      name: 'Anki Flashcards',
      url: 'https://ankiweb.net/',
      description: 'Powerful spaced repetition flashcard software',
      category: 'Study Tools'
    },
    {
      name: 'Jason Dion Practice Exams',
      url: 'https://www.udemy.com/user/jason-dion/',
      description: 'High-quality practice exams on Udemy (frequently on sale)',
      category: 'Practice Tests'
    },
    {
      name: 'Mike Meyers Courses',
      url: 'https://www.udemy.com/user/mike-meyers/',
      description: 'Comprehensive video courses with engaging teaching style',
      category: 'Video Training'
    },
    {
      name: 'IT Cert Master',
      url: 'https://www.youtube.com/@itcertmaster',
      description: 'Free Network+ and other IT certification study videos',
      category: 'Video Training'
    }
  ];

  const categories = [...new Set(resources.map(r => r.category))];

  return (
    <div className="free-resources">
      <div className="resources-header">
        <h1>🌐 Free Study Resources</h1>
        <p>Curated collection of the best free resources to help you pass Network+ N10-009</p>
      </div>

      {categories.map(category => (
        <section key={category} className="resource-category">
          <h2 className="category-title">{category}</h2>
          <div className="resources-grid">
            {resources
              .filter(r => r.category === category)
              .map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-card"
                >
                  <div className="resource-header">
                    <h3>{resource.name}</h3>
                    <ExternalLink size={20} />
                  </div>
                  <p className="resource-description">{resource.description}</p>
                  <span className="resource-badge">{category}</span>
                </a>
              ))}
          </div>
        </section>
      ))}

      <div className="resources-footer">
        <p>💡 <strong>Pro Tip:</strong> Use a combination of resources for the best results. Watch videos, take practice tests, and engage with communities!</p>
      </div>
    </div>
  );
}

export default FreeResources;
