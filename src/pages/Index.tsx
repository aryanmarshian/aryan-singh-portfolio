
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download, ExternalLink, Menu, X } from 'lucide-react';
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

  const skills = [
    'Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Docker', 'Kubernetes',
    'AWS', 'Machine Learning', 'Computer Vision', 'NLP', 'Deep Learning',
    'MLOps', 'React', 'Node.js', 'SQL', 'Git'
  ];

  const projects = [
    {
      title: "AI-Powered Video Analytics",
      description: "Real-time object detection and tracking system using YOLO and OpenCV for surveillance applications.",
      techStack: ["Python", "OpenCV", "YOLO", "FastAPI"],
      tags: ["#ComputerVision", "#ObjectDetection"],
      githubUrl: "https://github.com/aryanmarshian",
      featured: true
    },
    {
      title: "Intelligent Chatbot Platform",
      description: "Multi-modal chatbot using transformer models with context awareness and memory capabilities.",
      techStack: ["Python", "Transformers", "LangChain", "FastAPI"],
      tags: ["#LLM", "#Chatbot", "#NLP"],
      githubUrl: "https://github.com/aryanmarshian",
      featured: true
    },
    {
      title: "MLOps Pipeline Automation",
      description: "End-to-end ML pipeline with automated training, validation, and deployment using Docker and Kubernetes.",
      techStack: ["Python", "Docker", "Kubernetes", "MLflow"],
      tags: ["#MLOps", "#DevOps"],
      githubUrl: "https://github.com/aryanmarshian",
      featured: false
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Interactive dashboard for predictive analytics with real-time data visualization and model monitoring.",
      techStack: ["Python", "Streamlit", "Plotly", "Scikit-learn"],
      tags: ["#MachineLearning", "#DataViz"],
      githubUrl: "https://github.com/aryanmarshian",
      featured: false
    },
    {
      title: "Neural Style Transfer App",
      description: "Web application for artistic style transfer using deep neural networks and TensorFlow.",
      techStack: ["Python", "TensorFlow", "React", "Flask"],
      tags: ["#DeepLearning", "#WebApp"],
      githubUrl: "https://github.com/aryanmarshian",
      featured: false
    },
    {
      title: "Recommendation Engine",
      description: "Collaborative filtering recommendation system with hybrid approaches and A/B testing framework.",
      techStack: ["Python", "Pandas", "Scikit-learn", "Redis"],
      tags: ["#MachineLearning", "#RecommenderSystems"],
      githubUrl: "https://github.com/aryanmarshian",
      featured: false
    }
  ];

  const experiences = [
    {
      company: "TechCorp AI",
      role: "Senior ML Engineer",
      timeline: "2023 - Present",
      contributions: [
        "Led development of computer vision models that improved accuracy by 25%",
        "Implemented MLOps pipelines reducing deployment time by 60%",
        "Mentored junior engineers and established ML best practices"
      ]
    },
    {
      company: "DataInnovate",
      role: "Machine Learning Engineer",
      timeline: "2022 - 2023",
      contributions: [
        "Built and deployed recommendation systems serving 1M+ users",
        "Optimized model inference reducing latency by 40%",
        "Collaborated with cross-functional teams on product features"
      ]
    },
    {
      company: "AI Research Lab",
      role: "Research Intern",
      timeline: "2021 - 2022",
      contributions: [
        "Conducted research on novel deep learning architectures",
        "Published findings in peer-reviewed conferences",
        "Developed prototypes for computer vision applications"
      ]
    }
  ];

  const research = [
    {
      title: "Efficient Neural Architecture Search for Mobile Devices",
      publication: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2023",
      abstract: "Novel approach to automated neural architecture search optimized for mobile deployment constraints."
    },
    {
      title: "Multi-Modal Learning for Video Understanding",
      publication: "International Conference on Machine Learning (ICML) 2022",
      abstract: "Framework combining visual and audio features for improved video classification accuracy."
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold"
          >
            aryan<span className="text-blue-400">singh</span>.
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['About', 'Projects', 'Experience', 'Research', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-4">
              {['About', 'Projects', 'Experience', 'Research', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block hover:text-blue-400 transition-colors duration-200"
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
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl transform -translate-y-1/2"
        />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl md:text-3xl text-gray-300 mb-4">Hello! I'm Aryan.</h1>
            <h2 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
              Designing digital
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ML solutions
              </span>{' '}
              with emphasis
              <br />
              on <span className="text-gray-400">visual intelligence</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Machine Learning Engineer | Computer Vision | AI Researcher
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm an enthusiastic AI/ML engineer passionate about building scalable intelligent systems, 
              solving real-world problems, and contributing to open-source.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-medium">
                View Resume <ArrowRight className="ml-2" size={20} />
              </Button>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full border-gray-600 hover:bg-gray-800">
                  <Github size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-gray-600 hover:bg-gray-800">
                  <Linkedin size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-gray-600 hover:bg-gray-800">
                  <Mail size={20} />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">About Me</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              I'm a multidisciplinary AI engineer with expertise in computer vision, natural language processing, 
              and machine learning operations. With a passion for turning complex problems into elegant solutions, 
              I've spent the last few years building scalable AI systems that make a real impact. When I'm not 
              training models or optimizing pipelines, you'll find me contributing to open-source projects and 
              exploring the latest research in artificial intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12"
          >
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-center py-3 px-4 border-gray-600 hover:bg-gray-800 transition-colors duration-200"
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
            className="text-center"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full">
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Selected Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent projects in machine learning, computer vision, and AI research
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
                  <CardContent className="p-6">
                    {project.featured && (
                      <Badge className="mb-4 bg-blue-600">Featured</Badge>
                    )}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-gray-600">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-blue-400 text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <Button variant="outline" size="sm" className="border-gray-600 hover:bg-gray-700">
                        <Github className="mr-2" size={16} />
                        GitHub
                      </Button>
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Experience</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 border-l border-gray-600 last:border-l-0"
              >
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0"></div>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-400">{exp.role}</h3>
                      <h4 className="text-xl text-gray-300">{exp.company}</h4>
                    </div>
                    <span className="text-gray-400 mt-2 md:mt-0">{exp.timeline}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.contributions.map((contribution, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
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

      {/* Research Section */}
      <section id="research" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Research & Publications</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid gap-8">
            {research.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-blue-400">{paper.title}</h3>
                    <p className="text-gray-300 mb-3 font-medium">{paper.publication}</p>
                    <p className="text-gray-400">{paper.abstract}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's Talk</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Interested in collaborating or have a project in mind? I'd love to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input 
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input 
                        type="email"
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      className="bg-gray-700 border-gray-600 text-white min-h-[120px]"
                      placeholder="Tell me about your project or just say hi!"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
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
            <p className="text-gray-300 mb-6">Or connect with me directly:</p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/aryanmarshian" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="mailto:aryan@example.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com/in/aryansingh" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 Aryan Singh. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
