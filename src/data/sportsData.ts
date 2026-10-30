export interface SportStatistic {
  label: string;
  value: string;
}

export interface SportPerson {
  name: string;
  role: string;
  image: string;
  remark?: string;
}

export interface SportFixture {
  date: string;
  opponent: string;
  venue: string;
  competition: string;
  status: "UPCOMING" | "COMPLETED";
}

export interface SportResult {
  date: string;
  opponent: string;
  score: string;
  venue: string;
  competition: string;
  outcome: "WIN" | "LOSS" | "DRAW";
}

export interface TeamProfile {
  id: string;
  name: string;
  category: "MEN" | "LADIES" | "MIXED";
  squadPhoto: string;

  // Every team has a captain
  captain: SportPerson;

  coach?: SportPerson;

  players: string[];
  fixtures: SportFixture[];
  results: SportResult[];
  achievements: string[];
  highlights: string[];
}

export interface SportData {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  heroImage: string;
  statistics: SportStatistic[];
  teams?: TeamProfile[];
  achievements: string[];
  highlights: string[];
  gallery: string[];
}

/* =========================================================
   TAITA TAVETA UNIVERSITY
   SPORTS & ATHLETICS MAGAZINE — 2026
========================================================= */

export const sportsData: SportData[] = [

  /* =======================================================
     01 — ATHLETICS
  ======================================================= */

  {
    id: "athletics",
    number: "01",
    name: "Athletics",
    category: "INDIVIDUAL & TRACK EVENTS",
    tagline: "Speed. Strength. Endurance.",
    description:
      "Athletics brings together speed, endurance, strength and technical ability across a wide range of track and field disciplines. The sport provides athletes with an opportunity to develop individual excellence while representing Taita Taveta University in competition.",

    heroImage: "/images/sports/athletics.jpg",

    statistics: [],

    teams: [],

    achievements: [],

    highlights: [],

    gallery: [],
  },

  /* =======================================================
     02 — VOLLEYBALL
  ======================================================= */

  {
    id: "volleyball",
    number: "02",
    name: "Volleyball",
    category: "TEAM SPORT",
    tagline: "Power. Precision. Teamwork.",
    description:
      "Volleyball combines athletic ability, tactical awareness, communication and collective discipline. Every rally demands concentration and teamwork, making preparation and trust between players central to the game.",

    heroImage: "/images/sports/Volleyball Squad.jpeg",

    statistics: [],

    achievements: [],

    highlights: [],

    gallery: [],

    teams: [
      {
        id: "mens-volleyball",
        name: "Men's Volleyball",
        category: "MEN",
        squadPhoto: "/images/teams/Volleyball Men.jpeg",

        captain: {
          name: "",
          role: "Team Captain",
          image: "/images/teams/mens captain.jpeg",
          remark: "Ushirikiano, nidhamu na kujituma ndivyo vinavyotufanya kuwa timu bora.",
        },

        players: [],
        fixtures: [],
        results: [],
        achievements: [],
        highlights: [],
      },

      {
        id: "ladies-volleyball",
        name: "Ladies Volleyball",
        category: "LADIES",
        squadPhoto: "/images/teams/taitans volleball ladies.jpeg",

        captain: {
          name: "",
          role: "Team Captain",
          image: "/images/teams/ladies-captain.jpg",
          remark: "Tunacheza kwa moyo, tunashirikiana kama timu na tunawakilisha TTU kwa fahari.",
        },

        players: [],
        fixtures: [],
        results: [],
        achievements: [],
        highlights: [],
      },
    ],
  },

  /* =======================================================
     03 — FOOTBALL
  ======================================================= */

  {
    id: "football",
    number: "03",
    name: "Football",
    category: "TEAM SPORT",
    tagline: "Unity. Intensity. Ambition.",
    description:
      "Football demands technical skill, tactical awareness, physical preparation and strong communication. Success on the pitch is built through collective effort, discipline and a shared commitment to the team.",

    heroImage: "/images/sports/football.jpg",

    statistics: [],

    achievements: [],

    highlights: [],

    gallery: [],

    teams: [
      {
        id: "mens-football",
        name: "Men's Football",
        category: "MEN",
        squadPhoto: "/images/teams/mens-football.jpg",

        captain: {
          name: "",
          role: "Team Captain",
          image: "/images/teams/mens-football.jpg",
          remark:"Kila mchezo ni nafasi ya kujifunza, kupambana na kuiwakilisha TTU kwa heshima.",
        },

        players: [],
        fixtures: [],
        results: [],
        achievements: [],
        highlights: [],
      },

      {
        id: "ladies-football",
        name: "Ladies Football",
        category: "LADIES",
        squadPhoto: "/images/teams/ladies-football.jpg",

        captain: {
          name: "",
          role: "Team Captain",
          image: "/images/teams/ladies-football.jpg",
          remark:"Tunaamini katika nguvu ya timu, bidii na moyo wa kupigania mafanikio.",
        },

        players: [],
        fixtures: [],
        results: [],
        achievements: [],
        highlights: [],
      },
    ],
  },

  /* =======================================================
     04 — BASKETBALL
  ======================================================= */

  {
    id: "basketball",
    number: "04",
    name: "Basketball",
    category: "TEAM SPORT",
    tagline: "Energy. Skill. Teamwork.",
    description:
      "Basketball combines speed, coordination, decision-making and tactical awareness. Players must work together under pressure while maintaining discipline, focus and a strong competitive spirit.",

    heroImage: "/images/sports/basketball.jpg",

    statistics: [],

    achievements: [],

    highlights: [],

    gallery: [],

    teams: [
      {
        id: "mens-basketball",
        name: "Men's Basketball",
        category: "MEN",
        squadPhoto: "/images/teams/mens-basketball.jpg",

        captain: {
          name: "",
          role: "Team Captain",
          image: "/images/teams/mens-basketball.jpg",
          remark:"Timu kwanza, bidii kila siku na ushindi ni matokeo ya kujituma pamoja.",
        },

        players: [],
        fixtures: [],
        results: [],
        achievements: [],
        highlights: [],
      },

      {
        id: "ladies-basketball",
        name: "Ladies Basketball",
        category: "LADIES",
        squadPhoto: "/images/teams/ladies-basketball.jpg",

        captain: {
          name: "",
          role: "Team Captain",
          image: "/images/teams/ladies-basketball.jpg",
          remark: "Tunaendelea kujenga timu yenye umoja, kujiamini na hamu ya kufanya vizuri.",
        },

        players: [],
        fixtures: [],
        results: [],
        achievements: [],
        highlights: [],
      },
    ],
  },

  /* =======================================================
     05 — NETBALL
  ======================================================= */

  {
    id: "netball",
    number: "05",
    name: "Netball",
    category: "TEAM SPORT",
    tagline: "Movement. Accuracy. Coordination.",
    description:
      "Netball places emphasis on movement, accuracy, spatial awareness and coordinated team play. Players rely on communication and disciplined positioning to create opportunities and maintain control throughout the game.",

    heroImage: "/images/sports/netball.jpg",

    statistics: [],

    achievements: [],

    highlights: [],

    gallery: [],

    teams: [
      {
        id: "ladies-netball",
        name: "Ladies Netball",
        category: "LADIES",
        squadPhoto: "/public/images/teams/netball ladies.jpeg",

        captain: {
          name: "",
          role: "Team Captain",
          image: "/images/teams/ladies-netball.jpg",
          remark: "Umoja wetu ndio nguvu yetu; tunacheza kwa bidii na kujiamini.",
        },

        players: [],
        fixtures: [],
        results: [],
        achievements: [],
        highlights: [],
      },
    ],
  },

  /* =======================================================
     06 — HOCKEY
  ======================================================= */

  {
    id: "hockey",
    number: "06",
    name: "Hockey",
    category: "TEAM SPORT",
    tagline: "Control. Pace. Determination.",
    description:
      "Hockey combines technical control, speed, tactical awareness and coordinated team movement. Players must respond quickly while maintaining discipline and concentration throughout the match.",

    heroImage: "/images/sports/hockey.jpg",

    statistics: [],

    achievements: [],

    highlights: [],

    gallery: [],

    teams: [
      {
        id: "mens-hockey",
        name: "Men's Hockey",
        category: "MEN",
        squadPhoto: "/images/teams/mens-hockey.jpg",

        captain: {
          name: "",
          role: "Team Captain",
          image: "/images/teams/mens-hockey.jpg",
          remark: "Nidhamu, umoja na kujituma hutusaidia kufikia malengo yetu kama timu.",
        },

        players: [],
        fixtures: [],
        results: [],
        achievements: [],
        highlights: [],
      },
    ],
  },

  /* =======================================================
     07 — HANDBALL
  ======================================================= */

  {
    id: "handball",
    number: "07",
    name: "Handball",
    category: "TEAM SPORT",
    tagline: "Speed. Power. Precision.",
    description:
      "Handball demands speed, physical strength, quick decision-making and coordinated attacking and defensive play. Team communication and disciplined execution are essential throughout the match.",

    heroImage: "/images/sports/handball.jpg",

    statistics: [],

    achievements: [],

    highlights: [],

    gallery: [],

    teams: [
      {
        id: "mens-handball",
        name: "Men's Handball",
        category: "MEN",
        squadPhoto: "/images/teams/mens-handball.jpg",

        captain: {
          name: "",
          role: "Team Captain",
          image: "/images/teams/mens-handball.jpg",
          remark:"Tunapambana pamoja, tunajifunza pamoja na tunaiwakilisha TTU kwa fahari.",
        },

        players: [],
        fixtures: [],
        results: [],
        achievements: [],
        highlights: [],
      },
    ],
  },
];