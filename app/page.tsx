import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Award, Users, Globe, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Industrial factory with silver pipes"
            fill
            className="object-cover"
            priority
          />
          {/* Custom gradient overlay similar to mockup */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Reliable Chemical Solutions
              <br />
              <span className="text-white">for Mining & Industry in Mongolia</span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              Alma Chem Trade LLC delivers high-performance chemical solutions tailored for Mongolia's mining,
              mineral processing, and industrial sectors. Backed by over 20 years of international expertise
              through our parent company, we ensure safe, efficient, and consistent operations for our clients.
            </p>

            <Link href="/about" className="inline-flex items-center gap-3 group">
              <span className="text-[#2ecc71] text-2xl font-semibold tracking-wide group-hover:text-[#27ae60] transition-colors">
                About us
              </span>
              <div className="w-10 h-10 rounded-full border-2 border-[#2ecc71] flex items-center justify-center group-hover:bg-[#2ecc71]/10 transition-colors">
                <ArrowRight className="w-5 h-5 text-[#2ecc71]" />
              </div>
            </Link>
          </div>
        </div>
      </section>

  

      {/* About Us Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="relative mb-8">
                {/* Decorative overlapping 3D circle */}
                <div className="absolute -left-8 -top-8 w-28 h-28 rounded-full bg-gradient-to-br from-white to-slate-200 shadow-[10px_10px_20px_rgba(0,0,0,0.05),-10px_-10px_20px_rgba(255,255,255,1)] -z-10" />
                <h2 className="text-4xl font-bold text-slate-800">About Us</h2>
                <div className="w-12 h-1.5 bg-[#2ecc71] rounded-full mt-4" />
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Khimi Consulting is dedicated to advancing the Mongolian mining and industrial sectors. 
                  Our team is driven by a commitment to safety, innovation, and long-term sustainability.
                  We provide expert technical support alongside our high-quality product offerings.
                </p>
                <p>
                  By understanding the unique challenges of our local market, we tailor our solutions 
                  to help our clients maximize efficiency and achieve their operational targets.
                </p>
              </div>
            </div>

            {/* Right Content - Our Mission Card */}
            <div className="relative">
              {/* Decorative spheres mimicking the image */}
              <div className="absolute -left-6 top-2/3 w-16 h-16 rounded-full bg-gradient-to-br from-white to-slate-200 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,1)] z-10" />
              <div className="absolute -right-10 top-10 w-20 h-20 rounded-full bg-gradient-to-br from-white to-slate-200 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,1)] -z-10" />
              
              <div className="bg-slate-50/80 backdrop-blur-sm rounded-[1.5rem] p-10 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden">
                {/* Decorative green top right accent */}
                <div className="absolute top-6 right-6 w-8 h-1.5 bg-[#2ecc71] rounded-full opacity-60" />
                
                {/* Concentric Circle Icon */}
                <div className="w-16 h-16 mb-8 relative flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-[#2ecc71] opacity-20" />
                  <div className="absolute inset-2 rounded-full border-2 border-[#2ecc71] opacity-50" />
                  <div className="absolute inset-4 rounded-full border-2 border-[#2ecc71]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2ecc71]" />
                </div>

                <h3 className="text-3xl font-bold text-slate-800 mb-6">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Our mission is to empower local industries by delivering exceptional 
                  chemical engineering solutions that are safe, reliable, and 
                  environmentally responsible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-slate-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-600">Our Company's Advantages</h2>
            <div className="flex items-center flex-1">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2ecc71] mr-1.5" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#2ecc71] relative z-10" />
              <div className="h-[2px] bg-[#2ecc71] flex-1 -ml-1" />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {/* Card 1: Quality */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-sm border border-slate-200 relative pt-12 h-full min-h-[340px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#2ecc71] rounded-b-md" />
              <div className="flex flex-col items-center text-center">
                <Award className="w-16 h-16 text-slate-400 mb-6 stroke-[1.5]" />
                <h3 className="text-xl font-bold text-slate-500 mb-4">Quality</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  We supply guaranteed products that meet customer requirements and international standards
                </p>
              </div>
            </div>

            {/* Card 2: Reliability (Active) */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-[0_15px_40px_rgba(46,204,113,0.15)] border-2 border-[#2ecc71] relative pt-14 pb-10 transform lg:scale-105 z-10 h-full min-h-[360px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-2 bg-[#2ecc71] rounded-b-md" />
              <div className="flex flex-col items-center text-center">
                <Users className="w-20 h-20 text-[#2ecc71] mb-6 stroke-[1.5]" />
                <h3 className="text-2xl font-bold text-[#2ecc71] mb-4">Reliability</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We value customer-centricity. We understand customer needs and offer the most suitable solutions
                </p>
              </div>
            </div>

            {/* Card 3: Innovation */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-sm border border-slate-200 relative pt-12 h-full min-h-[340px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#2ecc71] rounded-b-md" />
              <div className="flex flex-col items-center text-center">
                <Globe className="w-16 h-16 text-slate-400 mb-6 stroke-[1.5]" />
                <h3 className="text-xl font-bold text-slate-500 mb-4">Innovation</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  We constantly seek innovative ideas and introduce innovative, truly effective operations in our sector
                </p>
              </div>
            </div>

            {/* Card 4: Safe Operations */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-sm border border-slate-200 relative pt-12 h-full min-h-[340px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#2ecc71] rounded-b-md" />
              <div className="flex flex-col items-center text-center">
                <Shield className="w-16 h-16 text-slate-400 mb-6 stroke-[1.5]" />
                <h3 className="text-xl font-bold text-slate-500 mb-4">Safe Operations</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  We continuously develop knowledge and skills, ensuring a workplace with transparent labor safety and health standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="bg-white pt-24 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-4xl font-bold text-slate-600">Company History</h2>
        </div>
        
        {/* Full width slider area */}
        <div className="relative w-full h-[600px] overflow-hidden">
          {/* Background Image placeholder */}
          <div className="absolute inset-0 z-0">
            {/* Make sure to add history_background.png to your public folder! */}
            <div className="absolute inset-0 bg-[url('/history_background.png')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-emerald-900/80 to-teal-900/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-green-900/30 mix-blend-overlay" />
          </div>

          {/* Left Arrow */}
          <button className="absolute left-8 top-1/2 -translate-y-1/2 z-20 text-[#00cbb4] hover:text-white transition-colors">
            <ChevronLeft className="w-12 h-12 stroke-[2]" />
          </button>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-5xl font-bold text-white mb-6 leading-tight">
              Local Expertise with<br />the Global Standards
            </h3>
            <p className="text-lg text-slate-200 max-w-2xl leading-relaxed">
              We understand Mongolia's conditions and deliver solutions<br />that work on the ground.
            </p>
            
            {/* Bottom Arrow button */}
            <button className="mt-12 w-12 h-12 rounded-full border-2 border-[#2ecc71] flex items-center justify-center group hover:bg-[#2ecc71]/20 transition-colors">
              <ChevronRight className="w-6 h-6 text-[#2ecc71]" />
            </button>
          </div>
        </div>
      </section>
      {/* Mission & Vision Section */}
      <section className="pt-24 pb-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          {/* Header */}
          <div className="flex items-center gap-4">
            <h2 className="text-4xl font-bold text-slate-600">Mission & Vision</h2>
            <div className="flex items-center flex-1 ml-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2ecc71] mr-1.5" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#2ecc71] relative z-10" />
              <div className="h-[2px] bg-[#2ecc71] flex-1 -ml-1" />
            </div>
          </div>
        </div>

        {/* Content Banner */}
        <div className="relative w-full overflow-hidden py-20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[url('/Featured.png')] bg-cover bg-center" />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[450px]">
            {/* Circles Container */}
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-0 h-full pt-4">
              {/* Mission Circle */}
              <div className="relative md:-mr-8 w-[420px] h-[420px] rounded-full bg-white shadow-[0_15px_40px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center p-10 text-center z-20 transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-3xl font-bold text-[#2ecc71] mb-6">Mission</h3>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  "To deliver value through quality products, dependable service, and strong partnerships, ensuring safe, efficient, and uninterrupted mining and industrial operations."
                </p>
              </div>

              {/* Vision Circle (Larger) */}
              <div className="relative w-[520px] h-[520px] rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center p-14 text-center z-30 transition-transform duration-300 hover:-translate-y-2 mt-8 md:mt-0">
                <h3 className="text-4xl font-bold text-[#2ecc71] mb-6">Vision</h3>
                <p className="text-[14px] text-slate-600 leading-relaxed">
                  To drive the advancement of Mongolia's mining, road construction, construction, and industrial sectors through high-quality, reliable products and innovative solutions, positioning ourselves as a trusted and forward-looking supplier.
                </p>
              </div>
            </div>

            {/* Decorative Sphere bottom right */}
            <div className="absolute right-[8%] bottom-4 w-32 h-32 rounded-full bg-gradient-to-br from-white to-slate-100 shadow-[10px_10px_20px_rgba(0,0,0,0.05),-10px_-10px_20px_rgba(255,255,255,1)] z-40" />
          </div>
        </div>
      </section>

      {/* Impact & Stats Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Text */}
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <p className="text-2xl md:text-[28px] text-slate-700 leading-normal font-medium">
              We actively support education initiatives, environmental restoration
              projects, and national sustainability programs, creating
              opportunities for collaborative impact.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl md:text-[6rem] font-bold text-[#42b883] mb-4 tracking-tighter">
                <AnimatedCounter end={50} suffix="+" />
              </span>
              <span className="text-xl text-slate-600">Mining Company</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl md:text-[6rem] font-bold text-[#42b883] mb-4 tracking-tighter">
                <AnimatedCounter end={30} suffix="+" />
              </span>
              <span className="text-xl text-slate-600">Processing Plant</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl md:text-[6rem] font-bold text-[#42b883] mb-4 tracking-tighter">
                <AnimatedCounter end={20} suffix="+" />
              </span>
              <span className="text-xl text-slate-600">Partners</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl md:text-[6rem] font-bold text-[#42b883] mb-4 tracking-tighter">
                <AnimatedCounter end={98} suffix="%" />
              </span>
              <span className="text-xl text-slate-600">Satisfaction</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
