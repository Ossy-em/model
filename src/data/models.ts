export type Model = {
  slug: string;
  name: string;
  origin: string;
  bio: string;
  stats: {
    height: string;
    bust: string;
    waist: string;
    hips: string;
    shoes: string;
    eyes: string;
    hair: string;
  };
  cover: string;       // image shown on the roster grid
  hero: string;        // large image shown at top of profile
  images: string[];    // all images for the profile gallery + sequence
  tags: string[];      // e.g. ["Editorial", "Runway", "Commercial"]
};

export const models: Model[] = [
  {
    slug: "amara-diallo",
    name: "Amara Diallo",
    origin: "Dakar, Senegal",
    bio: "Amara brings a quiet intensity to every frame. Discovered on the streets of Dakar, her work spans editorial and campaign — always grounded, always present.",
    stats: {
      height: "5'11\"",
      bust: "32\"",
      waist: "24\"",
      hips: "35\"",
      shoes: "9",
      eyes: "Dark Brown",
      hair: "Black",
    },
    cover: "/images/01.jpg",
    hero: "/images/02.jpg",
    images: [
      "/images/01.jpg",
      "/images/02.jpg",
      "/images/03.jpg",
      "/images/04.jpg",
      "/images/05.jpg",
      "/images/06.jpg",
    ],
    tags: ["Editorial", "Campaign", "Runway"],
  },
  {
    slug: "zola-mensah",
    name: "Zola Mensah",
    origin: "Accra, Ghana",
    bio: "Zola's presence is effortless. A background in dance gives her movement a fluidity that photographers and directors return to again and again.",
    stats: {
      height: "5'10\"",
      bust: "33\"",
      waist: "25\"",
      hips: "36\"",
      shoes: "8.5",
      eyes: "Brown",
      hair: "Black",
    },
    cover: "/images/07.jpg",
    hero: "/images/08.jpg",
    images: [
      "/images/07.jpg",
      "/images/08.jpg",
      "/images/09.jpg",
      "/images/10.jpg",
    ],
    tags: ["Editorial", "Commercial"],
  },
  {
    slug: "nadia-osei",
    name: "Nadia Osei",
    origin: "Lagos, Nigeria",
    bio: "Sharp. Considered. Nadia approaches every shoot with the precision of someone who understands both sides of the lens.",
    stats: {
      height: "5'9\"",
      bust: "32\"",
      waist: "23\"",
      hips: "34\"",
      shoes: "8",
      eyes: "Dark Brown",
      hair: "Black",
    },
    cover: "/images/11.jpg",
    hero: "/images/12.jpg",
    images: [
      "/images/11.jpg",
      "/images/12.jpg",
      "/images/13.jpg",
      "/images/14.jpg",
    ],
    tags: ["Runway", "Editorial"],
  },
];