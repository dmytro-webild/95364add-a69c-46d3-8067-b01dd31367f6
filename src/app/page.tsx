"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactText from '@/components/sections/contact/ContactText';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Award, CheckCircle, Clock, Heart, Shield, Star, Wrench } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="largeSmall"
      background="noise"
      cardStyle="solid"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="We Fix Doors"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Why Us", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{
            text: "Call Now",            href: "tel:+1-571-XXX-XXXX"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="We Fix Doors"
          description="Same-Day Garage Door Repair You Can Trust. Veteran-owned reliability and affordable pricing for Ashburn homeowners. Fast, professional service available daily until midnight."
          background={{ variant: "plain" }}
          buttons={[
            { text: "Call Now for Same-Day Service", href: "tel:+1-571-XXX-XXXX" },
            { text: "Get a Free Quote", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          layoutOrder="default"
          imageSrc="http://img.b2bpic.net/free-photo/male-worker-feeling-unwell-coughing-while-working-factory-coronavirus-pandemic_637285-12055.jpg"
          imageAlt="Professional garage door repair service"
          mediaAnimation="blur-reveal"
          frameStyle="card"
          ariaLabel="We Fix Doors hero section"
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Why Choose Us"
          tagIcon={Shield}
          tagAnimation="slide-up"
          title="Veteran-Owned Excellence in Garage Door Service"
          description="We Fix Doors is built on principles of reliability, transparency, and service. Our veteran-owned company brings military discipline and accountability to every repair and installation."
          subdescription="Serving Ashburn and surrounding areas with same-day availability, honest pricing, and a 4-star customer rating. We stand behind every job with our satisfaction guarantee."
          icon={CheckCircle}
          imageSrc="http://img.b2bpic.net/free-photo/senior-man-receiving-home-delivery-while-courier-is-pointing-place-he-need-sign_637285-2355.jpg"
          imageAlt="Veteran team of garage door experts"
          mediaAnimation="opacity"
          useInvertedBackground={false}
          ariaLabel="About We Fix Doors section"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwelve
          title="Our Services"
          description="Complete garage door solutions for Ashburn homeowners, from emergency repairs to professional installations."
          tag="Expert Service"
          tagIcon={Wrench}
          tagAnimation="slide-up"
          features={[
            {
              id: "repair",              label: "Urgent Repairs",              title: "Same-Day Emergency Service",              items: [
                "24/7 emergency response available",                "Spring and cable replacement",                "Opener repairs and replacement",                "Panel and track damage repair"
              ]
            },
            {
              id: "installation",              label: "New Installation",              title: "Professional Installation",              items: [
                "Custom garage door selection",                "Modern opener technology",                "Professional installation included",                "Lifetime warranty on workmanship"
              ]
            },
            {
              id: "maintenance",              label: "Preventive Care",              title: "Regular Maintenance Plans",              items: [
                "Spring lubrication and inspection",                "Safety testing and adjustment",                "Seasonal maintenance packages",                "Priority scheduling for members"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Schedule Service", href: "tel:+1-571-XXX-XXXX" }
          ]}
          buttonAnimation="slide-up"
          ariaLabel="Services section"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Why Ashburn Trusts We Fix Doors"
          description="Our track record speaks for itself. Reliable service, transparent pricing, and local expertise."
          tag="Our Impact"
          tagIcon={Star}
          tagAnimation="slide-up"
          metrics={[
            {
              id: "rating",              value: "4.8★",              title: "Customer Rating",              description: "Based on verified reviews from local homeowners",              icon: Star
            },
            {
              id: "response",              value: "2hrs",              title: "Average Response",              description: "Same-day service available until midnight",              icon: Clock
            },
            {
              id: "experience",              value: "15+",              title: "Years Experience",              description: "Veteran-owned business serving the community",              icon: Award
            },
            {
              id: "guarantee",              value: "100%",              title: "Satisfaction",              description: "We guarantee your complete satisfaction",              icon: CheckCircle
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Metrics section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Trusted by Ashburn Homeowners"
          description="Real experiences from our satisfied customers."
          tag="Customer Success"
          tagIcon={Heart}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              name: "Jennifer Martinez",              handle: "@ashburn_resident",              testimonial: "We Fix Doors fixed our broken garage door spring the same day we called. Professional, honest pricing, and they treated our home with respect. Highly recommend!",              imageSrc: "http://img.b2bpic.net/free-photo/businessman-smiling-looking-camera_23-2148112827.jpg",              imageAlt: "Jennifer Martinez",              icon: Star
            },
            {
              id: "2",              name: "Robert Chen",              handle: "@homeowner_ashburn",              testimonial: "Best service in the area. Their technician arrived early, completed the job efficiently, and even gave me maintenance tips to prevent future issues. Worth every penny.",              imageSrc: "http://img.b2bpic.net/free-photo/view-female-school-teacher_23-2151110056.jpg",              imageAlt: "Robert Chen",              icon: Star
            },
            {
              id: "3",              name: "Michelle Davis",              handle: "@ashburn_va",              testimonial: "Veterans supporting veterans. I appreciate their commitment to quality and honesty. They could have upsold me, but they diagnosed the real problem and fixed it properly.",              imageSrc: "http://img.b2bpic.net/free-photo/young-blonde-woman-standing-with-relaxed-expression-coffee-shop-terrace_839833-33402.jpg",              imageAlt: "Michelle Davis",              icon: Star
            },
            {
              id: "4",              name: "David Thompson",              handle: "@local_homeowner",              testimonial: "Emergency call on a Saturday evening. They answered, showed up fast, and had us back in business. This is exactly what veteran-owned business should look like.",              imageSrc: "http://img.b2bpic.net/free-photo/friendly-entrepreneur-posing-modern-office_74855-3442.jpg",              imageAlt: "David Thompson",              icon: Star
            },
            {
              id: "5",              name: "Sarah Wilson",              handle: "@ashburn_community",              testimonial: "Called for a free estimate and got honest advice. No pressure, no inflated quotes. They're local, professional, and they actually care about doing good work.",              imageSrc: "http://img.b2bpic.net/free-photo/person-virtual-date_23-2149296074.jpg",              imageAlt: "Sarah Wilson",              icon: Star
            },
            {
              id: "6",              name: "Tom Anderson",              handle: "@veteran_ashburn",              testimonial: "Supporting local veteran business felt right. The service quality confirmed it was the right choice. Transparent, reliable, and they stand behind their work.",              imageSrc: "http://img.b2bpic.net/free-photo/girl-sitting-table-holding-mobile-phone-indoors_171337-17096.jpg",              imageAlt: "Tom Anderson",              icon: Star
            }
          ]}
          animationType="opacity"
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          topMarqueeDirection="left"
          ariaLabel="Customer testimonials section"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions"
          sideDescription="Answers to questions we hear most from Ashburn homeowners."
          textPosition="left"
          faqsAnimation="slide-up"
          showCard={true}
          useInvertedBackground={false}
          buttons={[
            { text: "Still Have Questions? Call Us", href: "tel:+1-571-XXX-XXXX" }
          ]}
          buttonAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "How quickly can you respond to emergency garage door problems?",              content: "We offer same-day emergency service until midnight. Most calls receive response within 2 hours. For urgent situations, call us directly and we'll prioritize your request. Our veteran team understands that garage door emergencies are stressful, and we treat your home with the respect it deserves."
            },
            {
              id: "2",              title: "What's included in your free quote?",              content: "Our free estimate includes a complete inspection of your garage door system, honest assessment of repair vs. replacement, transparent pricing with no hidden fees, and professional recommendations. You'll get a detailed quote with all costs spelled out before any work begins."
            },
            {
              id: "3",              title: "Do you offer financing options?",              content: "Yes, we offer flexible financing options for larger installations and repairs. Ask about our payment plans during your free consultation. We work with homeowners to make quality service affordable."
            },
            {
              id: "4",              title: "What areas do you serve?",              content: "We proudly serve Ashburn, Virginia and surrounding areas. As a local business, we understand the Ashburn community and maintain fast response times. Call us to confirm service for your specific location."
            },
            {
              id: "5",              title: "Do you warranty your work?",              content: "Absolutely. We stand behind every repair and installation with our satisfaction guarantee. We offer industry-leading warranties and will make it right if you're not completely satisfied with our service."
            },
            {
              id: "6",              title: "Should I repair or replace my garage door?",              content: "That depends on age, condition, and cost. Our technicians provide honest recommendations. We won't push you to replace when repair is the smart choice, but we'll explain if replacement offers better long-term value."
            }
          ]}
          ariaLabel="Frequently asked questions section"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to fix your garage door problem? We're standing by. Call now for same-day service or get your free quote."
          animationType="reveal-blur"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          buttons={[
            { text: "Call Now", href: "tel:+1-571-XXX-XXXX" },
            { text: "Request Quote", href: "mailto:info@wefixdoors.com" }
          ]}
          ariaLabel="Contact call-to-action section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="We Fix Doors"
          leftLink={{
            text: "Privacy Policy",            href: "#"
          }}
          rightLink={{
            text: "Contact",            href: "tel:+1-571-XXX-XXXX"
          }}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}