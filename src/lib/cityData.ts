export interface CityContent {
    metaTitle: string;
    metaDescription: string;
    focusKeywords: string[];
    aboutTitle: string;
    aboutText: string[];
    uniqueTitle: string;
    uniquePoints: string[];
    servicesTitle: string;
    services: {
        title: string;
        description: string;
    }[];
    trustTitle: string;
    trustText: string;
    promiseTitle: string;
    promisePoints: string[];
    faqTitle: string;
    faqs: {
        question: string;
        answer: string;
    }[];
}

const defaultPromisePoints = [
    "Trained, background-verified moving crew – not day labourers",
    "High-quality packing materials including bubble wrap, corrugated sheets, and stretch film",
    "GPS-tracked vehicles for real-time shipment monitoring",
    "Transit insurance on all shipments for complete peace of mind",
    "Dedicated customer support from booking to final delivery",
    "No hidden charges – transparent pricing discussed upfront",
    "Post-move follow-up to ensure you're fully settled"
];

const defaultFaqs = (city: string) => [
    {
        question: `Do you provide packing materials for moves in ${city}?`,
        answer: "Yes, we bring everything needed – moving boxes, bubble wrap, stretch film, corrugated sheets, and sofa covers. You don't need to arrange anything separately."
    },
    {
        question: `How far in advance should I book for a move in ${city}?`,
        answer: `We recommend booking at least a week in advance, especially for month-end moves which are always in high demand. Last-minute bookings are possible based on availability.`
    },
    {
        question: `Do you move items within ${city} city limits?`,
        answer: `Absolutely. We handle local moves within ${city} as well as long-distance relocations.`
    }
];

const cityData: Record<string, CityContent> = {
    nellore: {
        metaTitle: "Best Packers and Movers in Nellore – Trusted Relocation Services by PackersHub",
        metaDescription: "Looking for reliable packers and movers in Nellore? PackersHub offers professional house shifting, car transport, bike shifting and office relocation services across Nellore and beyond.",
        focusKeywords: ["packers and movers in Nellore", "home shifting Nellore", "house relocation Nellore", "car transport Nellore", "bike shifting Nellore", "office shifting Nellore", "best packers Nellore", "Nellore to Hyderabad movers", "Nellore movers and packers"],
        aboutTitle: "About Moving in Nellore",
        aboutText: [
            "Nellore is one of the fastest-growing cities in Andhra Pradesh, known for its thriving aquaculture industry, educational institutions, and excellent connectivity via NH-16. Whether you are moving within Nellore's localities like Vedayapalem, Santhanuthalapadu, Pogathota, or shifting to another city like Hyderabad, Chennai, or Bangalore – relocation here comes with its own set of challenges. The city's mix of old town lanes and newly developed residential layouts means you need a moving company that knows the local geography well.",
            "PackersHub was built with South India's real moving challenges in mind. We started our operations from Nellore and grew from there – which means we understand the city's roads, traffic patterns, building layouts, and the common concerns families here have when they're relocating. We're not a call centre that forwards your request to some random local vendor. We are the people who actually show up, pack your belongings, and deliver them safely."
        ],
        uniqueTitle: "Why Nellore is Unique – Things to Know Before You Move",
        uniquePoints: [
            "Nellore lies on the banks of Penna River and is a major commercial hub of southern Andhra Pradesh",
            "The city has rapidly expanded with IT parks and residential colonies near areas like Vedayapalem and Grand Trunk Road",
            "NH-16 (old NH-5) passes through Nellore making interstate transport to Chennai and Vijayawada accessible and smooth",
            "Nellore district is well-known for shrimp exports and has a large migrant professional population",
            "The city has seen massive growth in apartment culture in areas like Pogathota, Dargamitta, and Balaji Nagar"
        ],
        servicesTitle: "Our Services in Nellore",
        services: [
            {
                title: "House Shifting in Nellore",
                description: "Whether you're moving from a ground-floor house in Podalakur to a 4th-floor apartment in Pogathota, our team handles every step – from furniture disassembly to final placement at your new home. We use high-quality packing materials and ensure nothing gets damaged in transit."
            },
            {
                title: "Car and Bike Transport from Nellore",
                description: "Shipping your vehicle along with household goods? We offer dedicated car carrier services and bike packaging with hard covers for two-wheelers. Your vehicle is transported on a carrier truck, not driven – so it arrives in showroom condition."
            },
            {
                title: "Office Relocation in Nellore",
                description: "Office moves need to happen fast with minimal business disruption. We plan your office shift on weekends or after hours if needed, ensuring computers, furniture, and important documents are moved systematically."
            },
            {
                title: "Inter-City Moves from Nellore",
                description: "We regularly operate routes from Nellore to Hyderabad, Chennai, Vijayawada, Bangalore, Tirupati, and other major South Indian cities. Our fleet of trucks is GPS-tracked and covered by transit insurance."
            }
        ],
        trustTitle: "Why Families and Businesses in Nellore Trust PackersHub",
        trustText: "PackersHub has been serving Nellore and surrounding districts for over 10 years. We've helped more than 5,000 families and businesses relocate safely. Our team is trained, background-verified, and given regular skill updates on packing standards. We don't outsource your move to third-party contractors – every job is handled by our own trained crew. When you book with us, you get one point of contact who stays with you from the first phone call to the final delivery.",
        promiseTitle: "The PackersHub Promise",
        promisePoints: defaultPromisePoints,
        faqTitle: "Frequently Asked Questions – Packers and Movers in Nellore",
        faqs: defaultFaqs("Nellore")
    }
};

export const getCityContent = (citySlug: string): CityContent => {
    // Standardize slug (remove -packers-and-movers)
    const pureSlug = citySlug.replace("-packers-and-movers", "");
    const cityName = pureSlug.charAt(0).toUpperCase() + pureSlug.slice(1).toLowerCase();

    if (cityData[pureSlug]) {
        return cityData[pureSlug];
    }

    // Default template for other cities
    return {
        metaTitle: `Best Packers and Movers in ${cityName} – Trusted Relocation Services by PackersHub`,
        metaDescription: `Looking for reliable packers and movers in ${cityName}? PackersHub offers professional house shifting, car transport, bike shifting and office relocation services across ${cityName} and beyond.`,
        focusKeywords: [`packers and movers in ${cityName}`, `home shifting ${cityName}`, `house relocation ${cityName}`, `car transport ${cityName}`, `bike shifting ${cityName}`, `office shifting ${cityName}`, `best packers ${cityName}`, `${cityName} movers and packers`],
        aboutTitle: `About Moving in ${cityName}`,
        aboutText: [
            `${cityName} is a rapidly developing city with a growing need for professional relocation services. Whether you are moving within the city's various localities or shifting to another major destination like Hyderabad, Chennai, or Bangalore, relocation comes with its own set of challenges.`,
            `PackersHub understands the unique logistical requirements of moving in ${cityName}. We understand the local roads, traffic patterns, and the common concerns families have when they're relocating. We are the people who actually show up, pack your belongings, and deliver them safely.`
        ],
        uniqueTitle: `Why ${cityName} is Unique – Things to Know Before You Move`,
        uniquePoints: [
            `${cityName} is a major hub of residential and commercial activity in the region`,
            "The city has rapidly expanded with new residential colonies and business districts",
            "Excellent road connectivity makes interstate transport accessible and smooth",
            "The city has seen massive growth in modern apartment culture and gated communities",
            "A mix of traditional localities and modern developments requires expert navigation"
        ],
        servicesTitle: `Our Services in ${cityName}`,
        services: [
            {
                title: `House Shifting in ${cityName}`,
                description: `From furniture disassembly to final placement at your new home, our team handles every step. We use high-quality packing materials and ensure nothing gets damaged in transit.`
            },
            {
                title: `Car and Bike Transport from ${cityName}`,
                description: `Shipping your vehicle along with household goods? We offer dedicated car carrier services and bike packaging with hard covers for two-wheelers.`
            },
            {
                title: `Office Relocation in ${cityName}`,
                description: `Office moves need to happen fast with minimal business disruption. We plan your office shift to ensure computers, furniture, and documents are moved systematically.`
            },
            {
                title: `Inter-City Moves from ${cityName}`,
                description: `We regularly operate routes from ${cityName} to other major South Indian cities. Our fleet of trucks is GPS-tracked and covered by transit insurance.`
            }
        ],
        trustTitle: `Why Families and Businesses in ${cityName} Trust PackersHub`,
        trustText: `PackersHub has been serving families and businesses for over 10 years. Our team is trained, background-verified, and given regular skill updates on packing standards. We don't outsource your move to third-party contractors – every job is handled by our own trained crew.`,
        promiseTitle: "The PackersHub Promise",
        promisePoints: defaultPromisePoints,
        faqTitle: `Frequently Asked Questions – Packers and Movers in ${cityName}`,
        faqs: defaultFaqs(cityName)
    };
};
