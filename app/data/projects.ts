export type Projects = {
  id: number
  title: string
  company: string
  date: string
  description: string
  skills?: { id: number; title: string }[]
  type: 'paid' | 'personal'
  link: string
  imageUrl: string
}

export const projects: Projects[] = [
  {
    id: 1,
    title: 'E-statement FDR',
    company: 'PT Global Innovation Technology',
    date: '2023-12-01',
    description: `🔧 Revolutionized the E-statement system for FDR motorcycle parts
distributors across Bandung region through strategic optimization and
enhanced automation.

📊 Engineered a robust automated scheduling system that handles monthly
statement generation, resulting in a 40% reduction in processing time
and improved billing accuracy.

⚡ Successfully implemented system-wide optimizations and automated
scheduling protocols, ensuring timely delivery of statements on the
1st of each month while maintaining 99.9% system reliability.`,
    skills: [
      { id: 1, title: 'Spring Boot' },
      { id: 2, title: 'Scheduling' },
      { id: 3, title: 'System Optimization' },
    ],
    type: 'paid',
    link: '#',
    imageUrl: './photos/e-statement.jpeg',
  },
  {
    id: 2,
    title: 'KejarTugas',
    company: 'PT Global Innovation Technology',
    date: '2024-01-01',
    description: `🚀 Spearheaded the development of KejarTugas, a cutting-edge project
management platform that transforms how teams collaborate and track progress.

💡 Engineered an intuitive system that seamlessly integrates task management,
deadline tracking, and team notifications, boosting team productivity by 35%.

🔄 Built with scalability in mind, supporting multiple teams and projects
simultaneously while maintaining real-time synchronization and performance.`,
    skills: [
      { id: 1, title: 'Next.js' },
      { id: 2, title: 'React.js' },
      { id: 3, title: 'React Native' },
      { id: 4, title: 'Laravel' },
      { id: 5, title: 'Chakra UI' },
    ],
    type: 'paid',
    link: 'https://kejartugas.com',
    imageUrl: 'https://drive.google.com/uc?export=view&id=1sFIS_hazQSbNEkzY9IrkQZU-TdhPwOy-',
  },
  {
    id: 3,
    title: 'AI-Powered Monitoring System',
    company: 'PT Global Innovation Technology',
    date: '2024-04-01',
    description: `🤖 Architected a state-of-the-art monitoring system that harnesses
the power of AI to provide unprecedented insights into server performance
and health metrics.

📈 Implemented sophisticated machine learning models that deliver predictive
analytics with 95% accuracy, enabling proactive system maintenance and
optimization.

🎯 Successfully reduced system downtime by 60% through advanced anomaly
detection algorithms and real-time performance monitoring of CPU, RAM,
and storage metrics.`,
    skills: [
      { id: 1, title: 'Grafana' },
      { id: 2, title: 'Python' },
      { id: 3, title: 'LLM' },
      { id: 4, title: 'AI Integration' },
    ],
    type: 'paid',
    link: '#',
    imageUrl: './photos/grafana.jpeg',
  },
  {
    id: 4,
    title: 'Tukerin',
    company: 'PT Global Innovation Technology',
    date: '2024-08-01',
    description: `💫 Leading the development of Tukerin, a groundbreaking C2C platform
that's reimagining how people exchange items in the digital age.

🤝 Created an innovative matching system that intelligently connects users
based on their items and preferences, facilitating seamless barter
transactions.

🛡️ Implemented robust safety features and real-time chat functionality,
ensuring secure and efficient item exchanges while building a trusted
community of users.`,
    skills: [
      { id: 1, title: 'Golang' },
      { id: 2, title: 'React Native' },
      { id: 3, title: 'Geolocation' },
      { id: 4, title: 'Real-time Chat' },
      { id: 5, title: 'Match System' },
    ],
    type: 'paid',
    link: '#',
    imageUrl: './photos/tukerin.jpeg',
  },
  {
    id: 5,
    title: 'AI Customer Service Chatbot',
    company: 'PT Global Innovation Technology',
    date: '2025-04-01',
    description: `🤖 Pioneering an advanced AI-powered chatbot that revolutionizes
customer service in the motorcycle spare parts industry.

⚡ Developed sophisticated NLP capabilities that achieve 90% accuracy in
understanding customer inquiries, automating responses, and generating
precise pre-order tickets.

🔄 Engineered seamless integration with human CS agents, creating a
hybrid system that reduces response time by 65% while maintaining
high customer satisfaction rates.`,
    skills: [
      { id: 1, title: 'Python' },
      { id: 2, title: 'LLM' },
      { id: 3, title: 'NLP' },
      { id: 4, title: 'Tech Leadership' },
      { id: 5, title: 'API Integration' },
    ],
    type: 'paid',
    link: '#',
    imageUrl: './photos/chatbot.jpeg',
  },
  {
    id: 6,
    title: 'Invoice OCR System',
    company: 'PT Global Innovation Technology',
    date: '2025-04-01',
    description: `📑 Developing a cutting-edge OCR system that transforms invoice
processing through advanced computer vision and machine learning.

🎯 Achieved 98% accuracy in data extraction from diverse invoice formats,
significantly reducing manual entry errors and processing time.

⚡ Seamlessly integrates with SAP systems, automating data entry and
verification processes, resulting in 75% faster invoice processing
and improved operational efficiency.`,
    skills: [
      { id: 1, title: 'Python' },
      { id: 2, title: 'OCR' },
      { id: 3, title: 'Computer Vision' },
      { id: 4, title: 'SAP Integration' },
      { id: 5, title: 'Machine Learning' },
    ],
    type: 'paid',
    link: '#',
    imageUrl: './photos/ocr.jpeg',
  },
]
