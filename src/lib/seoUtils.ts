import type { Metadata } from "next";

const CITY_META: Record<string, { cityName: string; region: string; title: string; description: string }> = {
  "nellore-packers-and-movers": {
    cityName: "Nellore", region: "Andhra Pradesh",
    title: "Packers and Movers in Nellore – Trusted & Affordable | PackersHub",
    description: "Looking for packers and movers in Nellore? PackersHub offers house shifting, car transport, and office relocation with GPS tracking, transit insurance, and zero hidden charges. Call +917730912913.",
  },
  "tirupati-packers-and-movers": {
    cityName: "Tirupati", region: "Andhra Pradesh",
    title: "Packers and Movers in Tirupati – Affordable House Shifting | PackersHub",
    description: "Reliable packers and movers in Tirupati for home and office relocation. Trained staff, GPS tracking, no hidden charges. Call PackersHub: +917730912913.",
  },
  "hyderabad-packers-and-movers": {
    cityName: "Hyderabad", region: "Telangana",
    title: "Packers and Movers in Hyderabad – Safe & On-Time | PackersHub",
    description: "Trusted packers and movers in Hyderabad for home shifting, car transport, and office relocation. GPS-tracked vehicles, insured transit, transparent pricing. Call: +917730912913.",
  },
  "bangalore-packers-and-movers": {
    cityName: "Bangalore", region: "Karnataka",
    title: "Packers and Movers in Bangalore – Reliable House Shifting | PackersHub",
    description: "Professional packers and movers in Bangalore for house shifting, car transport, and office moves. Trained crew, GPS tracking, on-time delivery. Get a free quote: +917730912913.",
  },
  "chennai-packers-and-movers": {
    cityName: "Chennai", region: "Tamil Nadu",
    title: "Packers and Movers in Chennai – Safe Relocation Services | PackersHub",
    description: "PackersHub provides trusted packers and movers in Chennai for home, vehicle, and office shifting. Insured, GPS-tracked, on-time delivery. Call +917730912913.",
  },
  "vijayawada-packers-and-movers": {
    cityName: "Vijayawada", region: "Andhra Pradesh",
    title: "Packers and Movers in Vijayawada – Trusted Shifting Services | PackersHub",
    description: "PackersHub offers safe and affordable packers and movers services in Vijayawada. House shifting, car transport, office relocation. Call +917730912913.",
  },
  "visakhapatnam-packers-and-movers": {
    cityName: "Visakhapatnam", region: "Andhra Pradesh",
    title: "Packers and Movers in Visakhapatnam – Safe & Reliable | PackersHub",
    description: "Trusted packers and movers in Visakhapatnam (Vizag) for house shifting and vehicle transport. GPS tracking, insurance, on-time delivery. Contact PackersHub: +917730912913.",
  },
  "coimbatore-packers-and-movers": {
    cityName: "Coimbatore", region: "Tamil Nadu",
    title: "Packers and Movers in Coimbatore – Professional Relocation | PackersHub",
    description: "Safe and affordable packers and movers in Coimbatore. House shifting, bike and car transport, office moving. Call PackersHub: +917730912913.",
  },
  "kochi-packers-and-movers": {
    cityName: "Kochi", region: "Kerala",
    title: "Packers and Movers in Kochi – Trusted House Shifting | PackersHub",
    description: "PackersHub provides reliable packers and movers in Kochi for home, vehicle, and office relocation. Transit insurance, GPS tracking. Call +917730912913.",
  },
  "mysuru-packers-and-movers": {
    cityName: "Mysuru", region: "Karnataka",
    title: "Packers and Movers in Mysuru – Safe & Affordable Shifting | PackersHub",
    description: "Professional packers and movers in Mysuru for house shifting and office relocation. Affordable rates, trained crew, on-time delivery. Call PackersHub: +917730912913.",
  },
  "madurai-packers-and-movers": {
    cityName: "Madurai", region: "Tamil Nadu",
    title: "Packers and Movers in Madurai – Reliable Shifting Services | PackersHub",
    description: "Trusted packers and movers in Madurai for home and office shifting. GPS-tracked transport, full insurance, zero hidden charges. Contact PackersHub: +917730912913.",
  },
  "hubballi-packers-and-movers": {
    cityName: "Hubballi", region: "Karnataka",
    title: "Packers and Movers in Hubballi – House & Office Shifting | PackersHub",
    description: "PackersHub offers professional packers and movers in Hubballi. Safe packing, insured transit, on-time delivery. Get a free quote: +917730912913.",
  },
  "warangal-packers-and-movers": {
    cityName: "Warangal", region: "Telangana",
    title: "Packers and Movers in Warangal – Affordable Relocation | PackersHub",
    description: "Reliable packers and movers in Warangal for house shifting and vehicle transport. Trained crew, GPS tracking, transparent pricing. Call +917730912913.",
  },
  "salem-packers-and-movers": {
    cityName: "Salem", region: "Tamil Nadu",
    title: "Packers and Movers in Salem – Safe Shifting Services | PackersHub",
    description: "PackersHub provides trusted packers and movers in Salem for home, car, and office shifting. Insurance, GPS tracking, affordable pricing. Call +917730912913.",
  },
  "thiruvananthapuram-packers-and-movers": {
    cityName: "Thiruvananthapuram", region: "Kerala",
    title: "Packers and Movers in Thiruvananthapuram – Trusted Services | PackersHub",
    description: "Professional packers and movers in Thiruvananthapuram for house and office relocation. GPS-tracked, insured, on-time. Contact PackersHub: +917730912913.",
  },
  "thrissur-packers-and-movers": {
    cityName: "Thrissur", region: "Kerala",
    title: "Packers and Movers in Thrissur – Safe & Affordable Shifting | PackersHub",
    description: "Trusted packers and movers in Thrissur for home and office shifting. Safe packing, transit insurance, on-time delivery. Call PackersHub: +917730912913.",
  },
  "karimnagar-packers-and-movers": {
    cityName: "Karimnagar", region: "Telangana",
    title: "Packers and Movers in Karimnagar – Reliable Relocation | PackersHub",
    description: "PackersHub offers safe and affordable packers and movers in Karimnagar. House shifting, vehicle transport, trained crew. Get a free quote: +917730912913.",
  },
  "mangalore-packers-and-movers": {
    cityName: "Mangalore", region: "Karnataka",
    title: "Packers and Movers in Mangalore – Professional Shifting | PackersHub",
    description: "Reliable packers and movers in Mangalore for house and office shifting. GPS-tracked vehicles, full insurance, no hidden charges. Call +917730912913.",
  },
  "guntur-packers-and-movers": {
    cityName: "Guntur", region: "Andhra Pradesh",
    title: "Packers and Movers in Guntur – Trusted House Shifting | PackersHub",
    description: "PackersHub provides trusted packers and movers in Guntur for home, vehicle, and office relocation. Affordable rates, safe handling. Call +917730912913.",
  },
  "kakinada-packers-and-movers": {
    cityName: "Kakinada", region: "Andhra Pradesh",
    title: "Packers and Movers in Kakinada – Safe & Reliable Shifting | PackersHub",
    description: "Professional packers and movers in Kakinada for house shifting and vehicle transport. Trained crew, GPS tracking, on-time delivery. Contact PackersHub: +917730912913.",
  },
  "ongole-packers-and-movers": {
    cityName: "Ongole", region: "Andhra Pradesh",
    title: "Packers and Movers in Ongole – Affordable Relocation | PackersHub",
    description: "Trusted packers and movers in Ongole for house and office shifting. Safe packing, insured transit, transparent pricing. Call PackersHub: +917730912913.",
  },
  "rajahmundry-packers-and-movers": {
    cityName: "Rajahmundry", region: "Andhra Pradesh",
    title: "Packers and Movers in Rajahmundry – Reliable House Shifting | PackersHub",
    description: "PackersHub offers professional packers and movers in Rajahmundry. Home shifting, vehicle transport, office relocation. GPS tracking, insurance. Call +917730912913.",
  },
  "kozhikode-packers-and-movers": {
    cityName: "Kozhikode", region: "Kerala",
    title: "Packers and Movers in Kozhikode – Safe Shifting Services | PackersHub",
    description: "Reliable packers and movers in Kozhikode (Calicut) for house and office shifting. Transit insurance, GPS-tracked vehicles, on-time delivery. Call PackersHub: +917730912913.",
  },
};

export function getCityMetadata(slug: string): Metadata {
  const data = CITY_META[slug];

  if (!data) {
    return {
      title: { absolute: "Packers and Movers | PackersHub" },
      description: "Professional packers and movers services across South India.",
    };
  }

  return {
    // KEY: 'absolute' stops parent template from appending — FIXES DOUBLE TITLE BUG
    title: { absolute: data.title },
    description: data.description,
    alternates: { canonical: `https://www.packershub.in/${slug}` },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://www.packershub.in/${slug}`,
      siteName: "PackersHub",
      locale: "en_IN",
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `Packers and Movers in ${data.cityName} – PackersHub` }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: ["/og-image.jpg"],
    },
  };
}

export function getCityName(slug: string): string {
  return CITY_META[slug]?.cityName ?? slug;
}

export function getCityRegion(slug: string): string {
  return CITY_META[slug]?.region ?? "India";
}
