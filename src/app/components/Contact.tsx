import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/STamilvalavan' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/s-tamilvalavan-/' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:itzmestamil@gmail.com' }
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 🔒 Validation
    if (!formData.from_name || !formData.from_email || !formData.message) {
      toast.error('Please fill all fields ❌');
      return;
    }

    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_wjtaz83",
        "template_fsz87e9",
        formRef.current,
        "re4OKY2MmCZiKu_9x",
      )
      .then(() => {
        toast.success('Message Sent! 🎉', {
          description: "Thanks for reaching out! I'll get back to you soon.",
          duration: 4000,
        });

        setFormData({
          from_name: '',
          from_email: '',
          message: ''
        });

        formRef.current?.reset();
      })
      .catch(() => {
        console.error("EmailJS Error:", error);
        toast.error('Failed to send message ❌');
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            Let's Work Together
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Have a project in mind? Let's create something amazing together
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a 
                    key={index}
                    href={link.href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <link.icon className="w-6 h-6" />
                    </motion.div>
                    <span className="text-lg">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE FORM */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

                <motion.div>
                  <Input 
                    type="text"
                    placeholder="Your Name"
                    name="from_name"
                    required
                    value={formData.from_name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 transition-colors"
                  />
                </motion.div>

                <motion.div>
                  <Input 
                    type="email"
                    placeholder="Your Email"
                    name="from_email"
                    required
                    value={formData.from_email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 transition-colors"
                  />
                </motion.div>

                <motion.div>
                  <Textarea 
                    placeholder="Your Message"
                    rows={5}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 transition-colors"
                  />
                </motion.div>

                <motion.div>
                  <Button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-transform"
                    size="lg"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </motion.div>

              </form>
            </motion.div>
          </div>

          <motion.div 
            className="mt-16 pt-8 border-t border-white/20 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p>&copy; {new Date().getFullYear()} Tamilvalavan S. All rights reserved.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
