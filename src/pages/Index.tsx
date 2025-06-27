import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download, ExternalLink, Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

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
  return <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-gray-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/20 backdrop-blur-lg border-b border-gray-700/30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} className="text-lg font-bold">
            aryan<span className="text-gray-400">singh</span>.
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-sm">
            {['About', 'Projects', 'Experience', 'Education', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gray-400 transition-colors duration-200">
                {item}
              </a>)}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="md:hidden bg-gray-900/90 backdrop-blur-lg border-t border-gray-700/30">
            <div className="px-6 py-4 space-y-4 text-sm">
              {['About', 'Projects', 'Experience', 'Education', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="block hover:text-gray-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>)}
            </div>
          </motion.div>}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-full blur-3xl transform -translate-y-1/2"
        />
        
        <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-xl md:text-2xl text-gray-300 mb-3">Hello! I'm Aryan.</h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
              Specializing in machine learning solutions driven by visual intelligence and real-world impact.
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl mx-auto">Machine Learning | Computer Vision | Deep Learning</p>
            <p className="text-base text-gray-300 mb-8 max-w-xl mx-auto">
              I'm an enthusiastic AI/ML engineer passionate about building scalable intelligent systems, 
              solving real-world problems, and contributing to open-source.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button 
                className="bg-gray-200 text-gray-900 hover:bg-gray-300 px-6 py-2 rounded-full text-base font-medium"
                onClick={() => window.open(resumeUrl, '_blank')}
              >
                View Resume <ArrowRight className="ml-2" size={18} />
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full border-gray-600 hover:bg-gray-800 w-10 h-10">
                  <Github size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-gray-600 hover:bg-gray-800 w-10 h-10">
                  <Linkedin size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-gray-600 hover:bg-gray-800 w-10 h-10">
                  <Mail size={18} />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a multidisciplinary AI engineer with expertise in computer vision, natural language processing, 
              and machine learning operations. With a passion for turning complex problems into elegant solutions, 
              I've spent the last few years building scalable AI systems that make a real impact. When I'm not 
              training models or optimizing pipelines, you'll find me contributing to open-source projects and 
              exploring the latest research in artificial intelligence.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
            {skills.map((skill, index) => <Badge key={skill} variant="outline" className="text-center py-2 px-3 border-gray-600 hover:bg-gray-800 transition-colors duration-200 text-xs">
                {skill}
              </Badge>)}
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} viewport={{
          once: true
        }} className="text-center">
            <Button 
              className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-full text-sm"
              onClick={() => window.open(resumeUrl, '_blank')}
            >
              <Download className="mr-2" size={16} />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Selected Works</h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent projects in machine learning, computer vision, and AI research
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div key={project.title} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group h-full">
                  <CardContent className="p-5">
                    {project.featured && <Badge className="mb-3 bg-gray-600 text-xs">Featured</Badge>}
                    <h3 className="text-lg font-bold mb-2 group-hover:text-gray-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-3 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.techStack.map(tech => <Badge key={tech} variant="outline" className="text-xs border-gray-600 px-2 py-1">
                          {tech}
                        </Badge>)}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map(tag => <span key={tag} className="text-gray-400 text-xs">
                          {tag}
                        </span>)}
                    </div>

                    <div className="flex justify-between items-center">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-gray-600 hover:bg-gray-700 text-xs"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="mr-1" size={14} />
                        GitHub
                      </Button>
                      <ExternalLink size={14} className="text-gray-400 group-hover:text-gray-300 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => <motion.div key={exp.company} initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.2
          }} viewport={{
            once: true
          }} className="relative pl-6 pb-10 border-l border-gray-600 last:border-l-0">
                <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-1.5 top-0"></div>
                <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-400">{exp.role}</h3>
                      <h4 className="text-base text-gray-300">{exp.company}</h4>
                    </div>
                    <span className="text-gray-400 mt-1 md:mt-0 text-sm">{exp.timeline}</span>
                  </div>
                  <ul className="space-y-1">
                    {exp.contributions.map((contribution, idx) => <li key={idx} className="text-gray-300 flex items-start text-sm">
                        <span className="text-gray-400 mr-2">•</span>
                        {contribution}
                      </li>)}
                  </ul>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Education</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto grid gap-6">
            {education.map((edu, index) => <motion.div key={edu.institution} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.2
          }} viewport={{
            once: true
          }}>
                <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                  <CardContent className="p-5">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-400">{edu.institution}</h3>
                        <h4 className="text-base text-gray-300">{edu.degree}</h4>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <span className="text-gray-400 text-sm block">{edu.timeline}</span>
                        <span className="text-gray-300 text-sm">{edu.grade}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-16 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Research & Publications</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto grid gap-6">
            {research.map((paper, index) => <motion.div key={paper.title} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.2
          }} viewport={{
            once: true
          }}>
                <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold mb-2 text-gray-400">{paper.title}</h3>
                    <p className="text-gray-300 mb-2 font-medium text-sm">{paper.publication}</p>
                    <p className="text-gray-400 text-sm">{paper.abstract}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-base text-gray-300 max-w-xl mx-auto">
              Ready to collaborate or discuss opportunities? Feel free to reach out through any of the channels below.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="max-w-xl mx-auto">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-700 p-3 rounded-full">
                      <Mail size={20} className="text-gray-300" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-200">Email</h3>
                      <a href="mailto:aryansingh9503@gmail.com" className="text-gray-400 hover:text-gray-300 transition-colors">
                        aryansingh9503@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-700 p-3 rounded-full">
                      <Phone size={20} className="text-gray-300" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-200">Phone</h3>
                      <a href="tel:+917428716989" className="text-gray-400 hover:text-gray-300 transition-colors">
                        +91 7428716989
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-700 p-3 rounded-full">
                      <Linkedin size={20} className="text-gray-300" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-200">LinkedIn</h3>
                      <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                        Connect with me on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} viewport={{
          once: true
        }} className="text-center mt-10">
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/aryanmarshian" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:aryansingh9503@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p className="text-sm">&copy; 2024 Aryan Singh. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>;
};

export default Index;
