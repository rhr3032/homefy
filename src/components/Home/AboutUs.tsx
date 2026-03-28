import React from 'react';
import Image from 'next/image';
// import FeaturedProperty from './FeaturedProperty';
import FAQ from './FAQs';
import Testimonial from './Testimonial';

const AboutUs: React.FC = () => {
  return (
    <>
      <section className="py-24 bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0 flex flex-col items-center gap-8 text-center">
          <h1 className="text-5xl sm:text-7xl font-semibold text-dark dark:text-white mb-4">About Us</h1>
          <p className="text-lg text-dark/80 dark:text-white/80 max-w-2xl">
            Welcome to Homefy! We are dedicated to elevating your living experience by providing premium real estate solutions tailored to your needs. Our mission is to connect you with your dream property, whether it's a luxury villa, modern apartment, or a cozy family home.
          </p>
        </div>
      </section>
      {/* About Us Stats Section */}
      <section className="py-20">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <Image
              src="/images/hero/heroBanner.png"
              alt="Our Experience"
              width={680}
              height={530}
              className="rounded-2xl w-full h-540 object-cover"
              unoptimized={true}
            />
          </div>
          <div>
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2 mb-2">
              <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2"></span>
              Our Experience
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold text-dark dark:text-white mb-4">
              Years of Excellence in Real Estate
            </h2>
            <p className="text-dark/60 dark:text-white/60 mb-6 max-w-xl">
              With over a decade of experience, Homefy has helped thousands of clients find their dream homes and investment properties. Our commitment to client satisfaction and market expertise sets us apart in the industry.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col items-start bg-white dark:bg-black/30 rounded-xl p-6 shadow-md">
                <span className="text-3xl font-bold text-primary">12+</span>
                <span className="text-dark/80 dark:text-white/80 text-base mt-1">Years Experience</span>
              </div>
              <div className="flex flex-col items-start bg-white dark:bg-black/30 rounded-xl p-6 shadow-md">
                <span className="text-3xl font-bold text-primary">2,500+</span>
                <span className="text-dark/80 dark:text-white/80 text-base mt-1">Happy Clients</span>
              </div>
              <div className="flex flex-col items-start bg-white dark:bg-black/30 rounded-xl p-6 shadow-md">
                <span className="text-3xl font-bold text-primary">98%</span>
                <span className="text-dark/80 dark:text-white/80 text-base mt-1">Satisfaction Rate</span>
              </div>
              <div className="flex flex-col items-start bg-white dark:bg-black/30 rounded-xl p-6 shadow-md">
                <span className="text-3xl font-bold text-primary">50+</span>
                <span className="text-dark/80 dark:text-white/80 text-base mt-1">Expert Agents</span>
              </div>
            </div>
            <button className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-dark hover:text-primary duration-300 text-base">Contact Our Team</button>
          </div>
        </div>
      </section>
      <FAQ />
      <Testimonial />
    </>
  );
};

export default AboutUs;
