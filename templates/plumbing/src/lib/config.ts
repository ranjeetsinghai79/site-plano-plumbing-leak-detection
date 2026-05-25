import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Plano Plumbing & Leak Detection",
    tagline: "Expert Leak Detection, Fast Repairs.",
    phone: "(972) 672-8616",
    phoneHref: "tel:+19726728616",
    email: "info@planoplumbingleakdetection.com",
    address: "2828 W Parker Rd #106c Plano, TX 75075",
    city: "Plano",
    serviceAreas: ["Plano", "Frisco", "Allen", "McKinney", "Prosper", "Richardson", "Carrollton"],
    license: "M-42301",
    since: "2004",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "ocean",
    niche: "plumbing",
  },

  services: [
    { icon: "droplets", title: "Water Leak Repair", desc: "We quickly locate and repair all types of water leaks, preventing further damage to your property.", urgent: true },
    { icon: "hammer", title: "Slab Leak Detection", desc: "Using advanced technology, we accurately detect and repair elusive slab leaks with minimal disruption.", urgent: true },
    { icon: "wrench", title: "General Plumbing", desc: "From leaky faucets to clogged drains, our skilled plumbers handle all your residential plumbing needs.", urgent: false },
    { icon: "thermometer", title: "Water Heater Services", desc: "Expert repair, replacement, and installation for all types of water heaters, ensuring consistent hot water.", urgent: false },
    { icon: "flame", title: "Gas Leak Repair", desc: "Prompt and safe detection and repair of gas leaks to protect your home and family.", urgent: true },
    { icon: "truck", title: "Sewer Line Repair", desc: "Comprehensive sewer line location, repair, and replacement services to restore proper drainage.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah M.", location: "Plano, TX", stars: 5, text: "Our water bill suddenly spiked, and we suspected a leak. Plano Plumbing came out the same day, found a hidden leak under our sink, and fixed it quickly. The plumber was professional, explained everything clearly, and the price was fair. So relieved!" },
    { name: "David L.", location: "Frisco, TX", stars: 5, text: "Had a persistent drip from our water heater. Called Plano Plumbing & Leak Detection, and they were able to schedule a visit for the next morning. The technician was knowledgeable, diagnosed the issue immediately, and replaced the faulty part. No more drips, and great service!" },
    { name: "Emily R.", location: "Allen, TX", stars: 5, text: "We had a scary gas smell, and Plano Plumbing was our first call. They responded incredibly fast, located a small leak in our kitchen, and repaired it on the spot. Their quick action made us feel safe and secure. Highly recommend their emergency service!" }
  ],

  trustBadges: [
    "Licensed & Insured", "Leak Detection Experts", "20+ Years Experience", "Free Phone Estimates", "5-Star Rated", "24/7 Emergency"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Leaks Repaired", suffix: "+", decimals: 0 },
    { value: 20, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize urgent plumbing issues, offering rapid response times to minimize damage and inconvenience." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Receive clear, honest pricing before any work begins, with no hidden fees or surprises." },
    { icon: "award", title: "Certified Pros", desc: "Our plumbers are highly trained, licensed, and experienced in all aspects of plumbing and leak detection." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work, ensuring your complete satisfaction with every service." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our advanced AI reception ensures you can reach us anytime, day or night, for immediate assistance." },
    { icon: "truck", title: "Fully Equipped", desc: "Our service vehicles are stocked with the latest tools and parts for efficient, on-site repairs." }
  ],

  formServiceOptions: ["Water Leak Repair", "Slab Leak Detection", "General Plumbing", "Water Heater Services", "Gas Leak Repair", "Sewer Line Repair"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!