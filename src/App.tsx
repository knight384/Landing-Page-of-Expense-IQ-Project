/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  ReceiptText, 
  Wallet, 
  LineChart, 
  Smartphone, 
  ArrowRight, 
  PlayCircle, 
  Star, 
  Mail, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Heart,
  Menu
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Detect when middle of section passes middle of viewport
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Sections to observe
    const sections = ['features', 'how-it-works', 'testimonials', 'download'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const navLinks = [
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Download', href: '#download', id: 'download' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 w-full z-50 border-b border-surface-container shadow-sm h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-8 w-full flex justify-between items-center">
          <a href="#" className="text-2xl font-display font-extrabold tracking-tight text-primary">
            ExpenseIQ
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={link.href} 
                className={`transition-all text-body-sm font-medium border-b-2 py-1 ${
                  activeSection === link.id 
                    ? 'text-primary border-primary font-semibold' 
                    : 'text-on-surface-variant border-transparent hover:text-primary transition-colors'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-primary-container bg-primary-container/10 px-6 py-2.5 rounded-full text-label-md hover:bg-primary-container/20 transition-colors">
              Get Started
            </button>
            <div className="md:hidden text-primary cursor-pointer">
              <Menu size={24} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-margin overflow-hidden bg-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-display-lg text-on-surface mb-6">
              Track Every Rupee. <br className="hidden lg:block" />
              <span className="text-primary font-bold">Understand Every Trend.</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-10 max-w-lg">
              Master your finances with smart expense tracking, intuitive budgeting, and powerful insights that help you save more every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView()}
                className="bg-primary text-on-primary hover:bg-primary-container transition-all duration-300 px-8 py-4 rounded-xl text-label-md flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(70,72,212,0.39)] active:scale-95 group"
              >
                Start Tracking
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                className="bg-white border-2 border-primary/20 text-primary hover:border-primary transition-all duration-300 px-8 py-4 rounded-xl text-label-md flex items-center justify-center gap-2 active:scale-95"
              >
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-primary/10">
                  <PlayCircle size={14} fill="currentColor" />
                </div>
                View Demo
              </button>
            </div>
            <div className="mt-10 flex items-center gap-4 text-on-surface-variant text-body-sm">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVzyOmLJ7v72vnZ37H2CHbp_2AKE5Z-x80gZ2gn-PIqlJUYXBCEJ4eEwe6FP-sCiD7-_Tp025E1M5cQW-hYqcoyWOLCbj1s_gujynk1iOGb6AKYACGTO1fGlcPn609Gao1Wq633xZe5_6aBGvLri8e5SXxY3giTlDyq6qiV0xwHD_gOLLzzuzIvWERveNnS3wEe70MzFM6toBxVu4bsm_vgRnhz_MnSl_1RkeAle8x3nUhI0L1bMFIYtQNk-nhM7Hu2Z2RWwN_TUW8" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuJVScWEUI-UMhq9Tp508iP5XhzJOUlLfUEVhsPevMisRTrgOwNL1XERXN5W_d6W-Ge0YduYGbh0i_Qkab-kyMaBC_DDVTPsYi4tBzSD8ebA58fXL09BciJ2bauisPLHBPdsRmxDclPN6VSqHNN2Qtf0kyizpEnH1C-xQzp7H7CMrHf9UG27O3PjXI3N48_T9isgoXRgny1qXN2mcnmBi0NQrDOTmG11s4BPyLpmCfzBI_wyxBfZoo8nO4E3SevfJl6Os59NWwa5UA" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7LPkQc4yRQMVCiaDn3XIG-JVlQ8WPiMz0sBHkSzeD5SAyPXtYStJ3jtvp69LbCLFLpiLdAhkJ2gvctqqDq99v0eya6mQv-2DjdrDmgiMzgK-anqpuB4H2CP6CzS7szyCwNBWhq0-D0mPAFAD5tkbmENBuYlN2oGhXsNcwBiUaEb5p_SIrf5czEqLBVrfmQy5Q_Mg_-IQicWtAP_-mAxK41B5k_4FkiCdYqeTdVclD_xwPHdB1VcanyjawlWe9Ght1vOrw_PAPDA5T" alt="User" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container flex items-center justify-center text-xs font-bold text-on-surface-variant font-sans">
                  +2k
                </div>
              </div>
              <p className="font-medium">Trusted by thousands of smart savers.</p>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-[#6cf8bb]/20 rounded-[4rem] blur-3xl -z-10 transform rotate-6 scale-90 opacity-40"></div>
            
            {/* Main Card */}
            <div className="bg-white rounded-[2.5rem] border border-outline-variant/20 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.08)] p-10 flex flex-col gap-10">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-body-sm text-on-surface-variant font-medium">Total Balance</p>
                  <h3 className="text-headline-xl text-on-surface font-extrabold tracking-tight">₹124,500.00</h3>
                </div>
                <div className="w-14 h-14 rounded-[1.25rem] bg-button-glow bg-primary flex items-center justify-center text-on-primary shadow-lg shadow-primary/20">
                  <Wallet size={28} />
                </div>
              </div>

              {/* Bar Chart Mockup */}
              <div className="space-y-4">
                <div className="h-[2px] w-full bg-surface-container-high" />
                <div className="h-40 w-full flex items-end justify-between items-stretch px-2 space-x-4">
                  <div className="flex-1 bg-surface-container rounded-t-lg h-[40%]" />
                  <div className="flex-1 bg-surface-container rounded-t-lg h-[60%]" />
                  <div className="flex-1 bg-primary rounded-t-lg h-full relative">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-background text-white text-[10px] py-1.5 px-3 rounded-md font-bold whitespace-nowrap shadow-md">
                      Peak
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-on-background rotate-45" />
                    </div>
                  </div>
                  <div className="flex-1 bg-surface-container rounded-t-lg h-[80%]" />
                  <div className="flex-1 bg-surface-container rounded-t-lg h-[50%]" />
                </div>
              </div>

              {/* Transaction List */}
              <div className="space-y-6">
                <h4 className="text-label-md text-on-surface font-bold uppercase tracking-widest text-[11px]">Recent Transactions</h4>
                <div className="space-y-5">
                  <div className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                        <ReceiptText size={22} className="stroke-[2.5px]" />
                      </div>
                      <div>
                        <p className="text-body-md font-bold text-on-surface">Dining Out</p>
                        <p className="text-[12px] text-on-surface-variant font-medium">Today, 2:30 PM</p>
                      </div>
                    </div>
                    <span className="text-body-md font-bold text-on-surface">-₹1,250</span>
                  </div>
                  <div className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#6cf8bb]/10 text-[#00714d] flex items-center justify-center">
                        <Smartphone size={22} className="stroke-[2.5px]" />
                      </div>
                      <div>
                        <p className="text-body-md font-bold text-on-surface">Groceries</p>
                        <p className="text-[12px] text-on-surface-variant font-medium">Yesterday</p>
                      </div>
                    </div>
                    <span className="text-body-md font-bold text-on-surface">-₹4,300</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Savings Goal Pill */}
            <motion.div 
              className="absolute -right-12 top-24 bg-white rounded-2xl border border-outline-variant/10 shadow-xl p-5 z-20 flex items-center gap-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-11 h-11 rounded-full bg-[#6cf8bb]/10 text-[#00714d] flex items-center justify-center">
                <LineChart size={20} className="stroke-[3px]" />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.15em] font-bold">Savings Goal</p>
                <p className="text-label-md text-on-surface font-extrabold">On Track</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-surface-container-lowest scroll-mt-20">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="text-center mb-16">
            <h2 className="text-display-lg text-on-surface mb-4">How ExpenseIQ Works</h2>
            <p className="text-body-lg text-on-surface-variant">Master your finances in three simple steps.</p>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-surface-container-high -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { step: 1, title: 'Add Expense', desc: 'Quickly log every transaction as it happens.', icon: <ReceiptText /> },
                { step: 2, title: 'Set Budget', desc: 'Define your spending limits for different categories.', icon: <Wallet /> },
                { step: 3, title: 'View Insights', desc: 'Get visual trends and reports on your financial health.', icon: <LineChart /> }
              ].map((item) => (
                <motion.div 
                  key={item.step}
                  className="flex flex-col items-center bg-white p-8 rounded-xl border border-outline-variant shadow-sm text-center group hover:-translate-y-1 transition-transform"
                  {...fadeInUp}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 ring-8 ring-bg group-hover:scale-105 transition-transform">
                    <span className="text-headline-md">{item.step}</span>
                  </div>
                  <div className="text-primary mb-4">{item.icon}</div>
                  <h3 className="text-headline-md text-on-surface mb-3">{item.title}</h3>
                  <p className="text-body-md text-on-surface-variant font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="text-center mb-16">
            <h2 className="text-display-lg text-on-surface mb-4">Powerful Features</h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">Take full control of your financial life with our suite of intelligent tools.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Track Expenses', desc: 'Automatically categorize every transaction and see where your money goes instantly.', icon: <ReceiptText /> },
              { title: 'Set Budgets', desc: 'Create custom monthly budgets for different categories and stay on track with smart alerts.', icon: <Wallet /> },
              { title: 'Smart Analytics', desc: 'Get deep insights into your spending habits with intuitive charts and predictive trends.', icon: <LineChart /> },
              { title: 'Mobile App Access', desc: 'Manage your finances on the go with our top-rated iOS and Android apps.', icon: <Smartphone /> }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                className="bg-white rounded-xl p-8 border border-outline-variant shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
                {...fadeInUp}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-headline-md text-on-surface">{feature.title}</h3>
                <p className="text-body-md text-on-surface-variant">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-surface-container-low scroll-mt-20">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="text-center mb-16">
            <h2 className="text-headline-xl text-on-surface mb-4">What Our Users Say</h2>
            <p className="text-body-lg text-on-surface-variant">Join thousands of users who trust ExpenseIQ.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Chen', role: 'Freelancer', text: '"ExpenseIQ changed how I track my project expenses. The analytics are a game-changer."', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwYhAvJYa9-nDx4wMTdFHIMgFFCLYuQvOUVuUJvhswNQhwNiBUS-4ZN2hzHivHg8z9S5upwkUDolDN1C8DljBUxbzAdkOtejRNcMm9-YBvhTXPEBNLkWbDgHWb_GeXwDoFyjRWw4_bK3O8e1adkm9ixQdatDO2VHzwc9DcjoZ6C6L9NA3DM0JmIvIAARoGzEYG46mJYA2ioVRh2vRqMQXdtaIPTM69w4dSieudha09nE6_uzlSV_Nu1LoPoNGrT9MaEz1MwCSDgbw2' },
              { name: 'David Miller', role: 'Professional', text: '"Clean, simple, and effective. Finally, a finance app that doesn\'t feel like a chore."', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0S85mFDZqgr0-KOiyIPF0kF4b6yoaApSTkz0ZV5YLQml4qQpbQjLBky3feyYtGkbU82JiGWe-jUqt_vVJiH8sLirzK2H8SCN8FcrW1KSVYnZMhrRoAaJpYitCkfei6_dZAL8ZYOdEOCHIUe3W_MK_W18uBW3jIeAeAUIQfK4fFGxUtsl40ROPDV74-ACH8low-j_N1_G2iy6VxFQn3jOXIDpco9kOm5bNAFKfvFYmGg5DCWZ560NQyjQCO6t0U0S4eFs3Cty7boWp' },
              { name: 'Priya Rao', role: 'Student', text: '"Perfect for keeping my student budget in check. The smart alerts are incredibly helpful."', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6hKJ1YUjKBkd4hdG5cWREjSlVup-qwp1bCoEiUPEVOjjH6sr0YFD3wmWTfLoFtA_Apu9k33Io4bxSgxBYPKvzZq_8QoUVIAV6JN3KHQltLG7H9xaOvowGln1qDZEi_b4SwACeJIL8B6r2Y7PHpVNasSwTE8eZlxtVua5SoXERochrzS29Oj9F0jQQszkX7ESOdNKmqz9Ef-PAcurOwCyJXsyIcK4n_KVXegrMiJ16aZ5X-mUBTg7b2V-hRQ8654KmGjRwDlOHuQOF' }
            ].map((t, i) => (
              <motion.div 
                key={i}
                className="bg-white p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col hover:-translate-y-1 transition-transform"
                {...fadeInUp}
              >
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-body-md text-on-surface flex-grow mb-8">{t.text}</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="text-label-md text-on-surface">{t.name}</h4>
                    <p className="text-body-sm text-on-surface-variant">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Download */}
      <footer id="download" className="bg-white border-t border-outline-variant py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-display font-bold text-primary flex items-center gap-2">
              <Wallet size={28} />
              ExpenseIQ
            </div>
            <p className="text-body-sm text-on-surface-variant max-w-xs font-medium">
              Master your finances with smart tracking and insights.
            </p>
            <div className="flex gap-4">
              <Twitter className="text-outline hover:text-primary transition-colors cursor-pointer" />
              <Linkedin className="text-outline hover:text-primary transition-colors cursor-pointer" />
              <Instagram className="text-outline hover:text-primary transition-colors cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-label-md text-on-surface uppercase tracking-widest mb-2 font-bold">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <a href="#features" className="text-body-sm text-on-surface-variant hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-body-sm text-on-surface-variant hover:text-primary transition-colors">How It Works</a>
              <a href="#testimonials" className="text-body-sm text-on-surface-variant hover:text-primary transition-colors">Testimonials</a>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-label-md text-on-surface uppercase tracking-widest mb-2 font-bold">Contact</h3>
            <a href="mailto:hello@expenseiq.com" className="text-body-sm text-on-surface-variant flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={18} />
              hello@expenseiq.com
            </a>
            <p className="text-body-sm text-on-surface-variant flex items-center gap-1">
              Made with <Heart size={16} className="text-red-500 fill-red-500" />
            </p>
            <button className="mt-4 px-6 py-2 bg-primary text-white rounded-full text-label-sm font-bold shadow-md hover:scale-105 transition-transform max-w-fit">
              Start Free Trial
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-sm text-on-surface-variant">© 2024 ExpenseIQ. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-label-sm text-on-surface-variant hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-label-sm text-on-surface-variant hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

