import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download, ExternalLink, Menu, X, Phone, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const { toast } = useToast();

  const resumeUrl = "https://drive.google.com/file/d/1zLr2PeUR6g0Q_pVst-l0a79G9SaL_Noy/view?usp=drive_link";

  const skills = ['Python', 'JavaScript', 'React', 'Node.js', 'FastAPI', 'OpenAI', 'LangChain', 'UIPath', 'Streamlit', 'Hugging Face', 'AWS SageMaker', 'Docker', 'Kubernetes', 'MongoDB Atlas', 'MySQL', 'MongoDB', 'BERT', 'GPT', 'CNNs', 'YOLO', 'Vision Transformers', 'OpenCV', 'Tesseract'];
  const projects = [
    {
      title: "Real-Time Drone Detection System",
      description: "Real-time drone detection system integrating YOLOv8 for fast object detection and Vision Transformers for precise validation with parallel processing and decision fusion.",
      techStack: ["YOLOv8", "Vision Transformers", "Streamlit", "MongoDB"],
      tags: ["#ComputerVision", "#ObjectDetection", "#RealTime"],
      githubUrl: "https://github.com/aryanmarshian/Real-Time-Drone-Detection-System",
      featured: true
    },
    {
      title: "Student Dropout Risk Predictor",
      description: "Machine learning model using XGBoost to predict student dropout risk based on academic and demographic data with class imbalance handling and real-time assessment.",
      techStack: ["XGBoost", "Streamlit", "Python", "Scikit-learn"],
      tags: ["#MachineLearning", "#Education", "#Prediction"],
      githubUrl: "https://github.com/aryanmarshian/Student-Dropout-Risk-Predictor",
      featured: true
    },
    {
      title: "FeedbackSense: Customer Sentiment Analyzer",
      description: "Sentiment classification pipeline using NLTK for text preprocessing and Logistic Regression to analyze customer feedback with stemming, stopword removal, and TF-IDF vectorization.",
      techStack: ["NLTK", "Logistic Regression", "Python", "TF-IDF"],
      tags: ["#NLP", "#SentimentAnalysis", "#CustomerInsights"],
      githubUrl: "https://github.com/aryanmarshian/FeedbackSense",
      featured: true
    },
    {
      title: "AI Email Sorting & Priority Highlighting",
      description: "Automated email categorization & prioritization for GSuite inboxes using NLP models and UiPath-based RPA bots, reducing email processing time by 50%.",
      techStack: ["UiPath", "NLP", "FastAPI", "GSuite"],
      tags: ["#RPA", "#Automation", "#EmailProcessing"],
      githubUrl: "https://github.com/aryanmarshian/AI-Email-Sorting",
      featured: false
    },
    {
      title: "SpeakEase: AI Speech Therapy App",
      description: "Application leveraging OpenAI's Whisper and Google's Gemini API to assist children with stuttering, tracking progress and providing personalized counselling support.",
      techStack: ["OpenAI Whisper", "Gemini API", "Python", "React"],
      tags: ["#AI", "#HealthTech", "#SpeechTherapy"],
      githubUrl: "https://github.com/aryanmarshian/SpeakEase",
      featured: false
    },
    {
      title: "Zen Zone: AI-Powered Mental Health Companion",
      description: "Vite + React web app for student mental health and substance abuse support with MongoDB and Gemini AI integration. Completed in 24 hours, ranked top 5 in Wincibl hackathon.",
      techStack: ["Vite", "React", "MongoDB", "Gemini AI"],
      tags: ["#MentalHealth", "#AI", "#Hackathon"],
      githubUrl: "https://github.com/aryanmarshian/Zen-Zone",
      featured: false
    }
  ];
  const experiences = [{
    company: "VIT Chennai",
    role: "Summer Research Intern Under Prof. Karthik R",
    timeline: "May 2024 – July 2024",
    contributions: ["Engineered an advanced plant leaf disease classification model, combining Vision Transformers (ViT) with custom CNN architecture using RSCA, Coordinate Attention, Condensation Attention, and CycleGAN techniques", "Achieved 88% accuracy (previous baseline: 82%) and co-authored a research paper on novel deep learning techniques for plant disease identification"]
  }, {
    company: "R Systems, Noida",
    role: "AI Intern",
    timeline: "Aug 2023 – Dec 2023",
    contributions: ["Developed a SQL Query Generator leveraging OpenAI API & LangChain, enabling non-technical users to interact with SQL databases using natural language", "Designed and optimized AI-driven database automation workflows, improving query efficiency by 30%", "Conducted research on LLM-powered enterprise AI solutions, integrating OpenAI's GPT models for data-driven applications"]
  }];
  const education = [{
    institution: "Vellore Institute of Technology, Chennai",
    degree: "Bachelor of Technology in Computer Science specialization in Robotics and AI",
    timeline: "2021 – 2025",
    grade: "CGPA: 8.18"
  }, {
    institution: "Seth Anand Ram Jaipuria School, Ghaziabad",
    degree: "Senior Secondary, Science",
    timeline: "2015 – 2021",
    grade: "86%"
  }];
  const research = [{
    title: "Advanced Plant Leaf Disease Classification using Vision Transformers and Custom CNN",
    publication: "Research Paper (In Progress) - VIT Chennai",
    abstract: "Novel deep learning approach combining Vision Transformers with custom CNN architecture achieving 88% accuracy in plant disease identification."
  }];
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon."
    });
  };

  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="text-xl font-bold tracking-tight"
          >
            <span className="text-foreground">Aryan</span>
            <span className="text-muted-foreground font-normal ml-1">Singh</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8 text-sm font-medium">
              {['About', 'Projects', 'Experience', 'Education', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  {item}
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button className="text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border"
          >
            <div className="px-6 py-6 space-y-4 text-sm font-medium">
              {['About', 'Projects', 'Experience', 'Education', 'Contact'].map(item => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-200" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-muted/40">        
        <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10 max-w-7xl">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-normal">Hello! I'm Aryan.</h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] text-foreground">
                  Specializing in{' '}
                  <span className="text-foreground/90 block sm:inline">
                    machine learning
                  </span>
                  <br className="hidden sm:block" />
                  <span className="block sm:inline">solutions with{' '}</span>
                  <br className="hidden sm:block" />
                  <span className="block sm:inline">emphasis on{' '}</span>
                  <span className="text-foreground/80 block sm:inline">
                    visual intelligence
                  </span>
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
                    Machine Learning | Deep Learning | Artificial Intelligence
                  </p>
                  <div className="pt-4 sm:pt-6">
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                      onClick={() => window.open(resumeUrl, '_blank')}
                    >
                      <Eye className="mr-2" size={18} />
                      View Resume
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About/Selected Works Section */}
      <section id="about" className="py-16 sm:py-20 relative bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-foreground">Selected works</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A multidisciplinary AI engineer passionate about building scalable intelligent systems, 
              solving real-world problems through machine learning and computer vision to achieve 
              impactful solutions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            viewport={{ once: true }} 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 mb-8 sm:mb-12"
          >
            {skills.map((skill, index) => (
              <Badge 
                key={skill} 
                variant="outline" 
                className="text-center py-2 px-2 sm:px-3 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 text-xs bg-white"
              >
                {skill}
              </Badge>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }} 
            viewport={{ once: true }} 
            className="max-w-3xl"
          >
            <Button 
              variant="outline"
              className="border-gray-400 text-gray-700 hover:bg-gray-100 hover:border-gray-500 px-4 sm:px-6 py-2 rounded-lg text-sm transition-all duration-200"
              onClick={() => window.open(resumeUrl, '_blank')}
            >
              <Download className="mr-2" size={16} />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 relative bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-gray-900">Featured Projects</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
              A showcase of my recent projects in machine learning, computer vision, and AI research
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: index * 0.1 }} 
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group h-full">
                  <CardContent className="p-4 sm:p-6">
                    {project.featured && <Badge className="mb-4 bg-gray-200 text-gray-800 text-xs border-0">Featured</Badge>}
                    <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-gray-700 transition-colors text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map(tech => (
                        <Badge key={tech} variant="outline" className="text-xs border-gray-300 px-2 py-1 text-gray-600 bg-gray-50 hover:bg-gray-100 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-gray-500 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-gray-300 hover:bg-gray-100 hover:border-gray-400 text-xs text-gray-700 transition-all duration-200"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="mr-1" size={16} strokeWidth={2} />
                        GitHub
                      </Button>
                      <ExternalLink size={14} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Experience</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.company} 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: index * 0.2 }} 
                viewport={{ once: true }} 
                className="relative pl-6 pb-12 border-l border-gray-300 last:border-l-0"
              >
                <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 top-0"></div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                      <h4 className="text-base text-gray-700">{exp.company}</h4>
                    </div>
                    <span className="text-gray-600 mt-1 md:mt-0 text-sm">{exp.timeline}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.contributions.map((contribution, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start text-sm">
                        <span className="text-gray-500 mr-2">•</span>
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Education</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto grid gap-6">
            {education.map((edu, index) => (
              <motion.div 
                key={edu.institution} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: index * 0.2 }} 
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{edu.institution}</h3>
                        <h4 className="text-base text-gray-600">{edu.degree}</h4>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <span className="text-gray-500 text-sm block">{edu.timeline}</span>
                        <span className="text-gray-600 text-sm">{edu.grade}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 relative bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Research & Publications</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto grid gap-6">
            {research.map((paper, index) => (
              <motion.div 
                key={paper.title} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: index * 0.2 }} 
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{paper.title}</h3>
                    <p className="text-gray-600 mb-2 font-medium text-sm">{paper.publication}</p>
                    <p className="text-gray-500 text-sm">{paper.abstract}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Get in Touch</h2>
            <p className="text-lg text-gray-700 max-w-xl">
              Ready to collaborate or discuss opportunities? Feel free to reach out through any of the channels below.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            viewport={{ once: true }} 
            className="max-w-xl mx-auto"
          >
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-900 p-3 rounded-lg">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <a href="mailto:aryansingh9503@gmail.com" className="text-gray-700 hover:text-gray-900 transition-colors">
                        aryansingh9503@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-900 p-3 rounded-lg">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <a href="tel:+917428716989" className="text-gray-700 hover:text-gray-900 transition-colors">
                        +91 7428716989
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-900 p-3 rounded-lg">
                      <Linkedin size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">LinkedIn</h3>
                      <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                        Connect with me on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }} 
            viewport={{ once: true }} 
            className="text-center mt-12"
          >
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/aryanmarshian" className="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-100">
                <Github size={28} strokeWidth={1.5} />
              </a>
              <a href="mailto:aryansingh9503@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-100">
                <Mail size={28} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-100">
                <Linkedin size={28} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p className="text-sm">&copy; 2024 Aryan Singh. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>;
};

export default Index;
