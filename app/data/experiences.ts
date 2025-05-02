// experiences.ts
export type Experience = {
  id: number
  title: string
  company: string
  date: string
  description: string
  skills?: { id: number; title: string }[]
  type: 'work' | 'education'
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Technical Consultant',
    company: 'PT Global Information Technology',
    date: 'Dec 2023 - Present',
    description: `🚀 Leading and Managing Multiple High-Impact Projects:

• Successfully spearheading development of six key initiatives:
  - E-statement: Automated billing system for motorcycle parts
  - KejarTugas: Team collaboration platform
  - AI-Monitoring: Server performance analysis system
  - Tukerin: C2C barter marketplace
  - AI Chatbot: Customer service automation
  - OCR System: Automated invoice processing

💡 Technical Leadership & Innovation:
  - Orchestrated multiple cross-functional teams
  - Implemented efficient Waterfall methodology
  - Drove technical decisions across diverse tech stacks
  - Maintained high code quality and documentation standards`,
    skills: [
      { id: 1, title: 'Spring Boot' },
      { id: 2, title: 'Laravel' },
      { id: 3, title: 'React.js' },
      { id: 4, title: 'React Native' },
      { id: 5, title: 'Golang' },
      { id: 6, title: 'Python' },
      { id: 7, title: 'Grafana' },
      { id: 8, title: 'AI Integration' },
      { id: 9, title: 'Faiss' },
      { id: 10, title: 'Tech Leadership' },
    ],
    type: 'work',
  },
  {
    id: 2,
    title: 'IT Intern Mobile Developer',
    company: 'PT Media Kreasi Abadi',
    date: 'Feb 2022 - Jul 2022',
    description: `📱 Mobile Application Development:
• Led development of EduFams, a community-focused mobile app for Balikpapan
• Successfully published to Google Play Store
• Implemented core features and UI/UX improvements

🔄 Full Development Lifecycle Experience:
• Conducted requirement analysis and planning
• Developed and tested core functionalities
• Managed deployment and release processes
• Applied Agile/Kanban methodologies

🎯 Key Achievements:
• Completed project ahead of schedule
• Implemented robust error handling
• Maintained 95% crash-free sessions`,
    skills: [
      { id: 1, title: 'Android Studio' },
      { id: 2, title: 'Kotlin' },
      { id: 3, title: 'Kanban' },
    ],
    type: 'work',
  },
  {
    id: 3,
    title: 'Bachelors Degree in Informatics',
    company: 'Universitas Budiluhur',
    date: '2019 - 2023',
    description: `🎓 Academic Achievement:
• Graduated with specialization in Expert Programming
• Focus on advanced software development practices
• Comprehensive study of algorithms and data structures

💻 Key Areas of Study:
• Software Engineering
• Mobile Development
• Web Technologies
• Artificial Intelligence
• Database Management`,
    type: 'education',
  },
]
