import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon, MessageCircleIcon, SendIcon } from 'lucide-react';
import { SOCIAL } from '../data/social';

const CHAT = [
  "Hey! I'm Roobaan — iOS & Flutter developer based in Chennai.",
  "I've shipped 4 apps to the App Store and Play Store, including a banking platform used by 9,000+ employees.",
  "Got a project in mind? I'd love to hear about it. Drop me a message 👇",
];

const INFO = [
  { icon: <MailIcon size={16} />,           label: 'Email',    value: 'roobaanmt@gmail.com',   href: 'mailto:roobaanmt@gmail.com' },
  { icon: <PhoneIcon size={16} />,          label: 'Phone',    value: '+91 8148411612',         href: 'tel:+918148411612' },
  { icon: <MessageCircleIcon size={16} />,  label: 'WhatsApp', value: '+91 8148411612',         href: 'https://wa.me/918148411612' },
  { icon: <MapPinIcon size={16} />,         label: 'Location', value: 'Chennai, India',         href: undefined },
];

export default function Contact() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm]           = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending]     = useState(false);
  const [status, setStatus]       = useState<'idle' | 'success' | 'error'>('idle');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus('idle');
    try {
      const res = await fetch('https://formspree.io/f/xwvnzvgo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-[#0D0D1A]">
      <div className="orb w-[400px] h-[400px] left-0 bottom-0 bg-cyan-500/6" />
      <div className="orb w-[300px] h-[300px] right-0 top-0 bg-violet-600/6" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="section-label block mb-3">Contact</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ── Left: chat + info ── */}
          <div className="space-y-8">
            {/* chat bubbles */}
            <div className="space-y-3">
              {CHAT.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.2 }}
                  className="flex items-start gap-3"
                >
                  {i === 0 && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                      R
                    </div>
                  )}
                  {i !== 0 && <div className="w-8 flex-shrink-0" />}
                  <div className="bubble-left">{msg}</div>
                </motion.div>
              ))}
            </div>

            {/* contact cards */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 gap-3"
            >
              {INFO.map(item => (
                <div key={item.label}
                  className="glass rounded-xl p-4 hover:border-white/12 transition-colors duration-200">
                  <div className="text-violet-400 mb-2">{item.icon}</div>
                  <p className="text-slate-500 text-xs mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-white text-sm font-medium hover:text-violet-300 transition-colors truncate block">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  )}
                </div>
              ))}
            </motion.div>

            {/* social links */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="flex gap-3"
            >
              {[
                { href: SOCIAL.github,   label: 'GitHub' },
                { href: SOCIAL.linkedin, label: 'LinkedIn' },
                { href: SOCIAL.medium,   label: 'Medium' },
              ].map(s => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 glass rounded-xl text-sm text-slate-400 hover:text-white hover:border-white/15 transition-all duration-200">
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form onSubmit={onSubmit} className="glass rounded-2xl p-6 space-y-4">
              <h3 className="text-white font-semibold mb-2">Send a message</h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-500 block mb-1.5">Your Name</label>
                  <input name="name" value={form.name} onChange={onChange} required
                    placeholder="John Doe" className="form-input" />
                </div>
                <div>
                  <label className="text-xs text-slate-500 block mb-1.5">Email</label>
                  <input type="email" name="email" value={form.email} onChange={onChange} required
                    placeholder="john@example.com" className="form-input" />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-500 block mb-1.5">Subject</label>
                <input name="subject" value={form.subject} onChange={onChange} required
                  placeholder="Project Inquiry" className="form-input" />
              </div>

              <div>
                <label className="text-xs text-slate-500 block mb-1.5">Message</label>
                <textarea name="message" value={form.message} onChange={onChange} required
                  rows={5} placeholder="Tell me about your project..." className="form-input" />
              </div>

              {status === 'success' && (
                <p className="text-green-400 text-sm">Message sent! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm">Something went wrong. Try emailing directly.</p>
              )}

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: sending ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <SendIcon size={16} />
                {sending ? 'Sending…' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
