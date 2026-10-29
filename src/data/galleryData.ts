export interface GalleryPhoto {
  id: string;
  image: string;
  caption: string;
  category: string;
}

export interface GalleryPage {
  number: string;
  kicker: string;
  title: string;
  italicTitle: string;
  intro: string;
  photos: GalleryPhoto[];
}

export const galleryPages: GalleryPage[] = [

  {
    number: "23",
    kicker: "TTU SPORTS & ATHLETICS · 2026",
    title: "SPORTS",
    italicTitle: "& ATHLETICS",
    intro:
      "From the track and field to the court and pitch, sport brings together talent, discipline, teamwork and university pride.",

    photos: [
      {
        id: "sports-01",
        image: "/images/gallery/sports/sports-01.jpg",
        caption: "Athletes representing Taita Taveta University.",
        category: "ATHLETICS",
      },
      {
        id: "sports-02",
        image: "/images/gallery/sports/sports-02.jpg",
        caption: "Competition, teamwork and determination.",
        category: "SPORTS",
      },
      {
        id: "sports-03",
        image: "/images/gallery/sports/sports-03.jpg",
        caption: "TTU teams during competition.",
        category: "TEAM SPORTS",
      },
      {
        id: "sports-04",
        image: "/images/gallery/sports/sports-04.jpg",
        caption: "Celebrating the spirit of university sport.",
        category: "SPORTS",
      },
      {
        id: "sports-05",
        image: "/images/gallery/sports/sports-05.jpg",
        caption: "Moments from TTU sporting activities.",
        category: "SPORTS",
      },
      {
        id: "sports-06",
        image: "/images/gallery/sports/sports-06.jpg",
        caption: "The journey from preparation to competition.",
        category: "ATHLETICS",
      },
    ],
  },

  {
    number: "24",
    kicker: "COMPETITION · TEAMWORK · PRIDE",
    title: "TEAMS",
    italicTitle: "& COMPETITION",
    intro:
      "Behind every match are teams, captains, coaches, supporters and students working together toward a common goal.",

    photos: [
      {
        id: "teams-01",
        image: "/images/gallery/teams/teams-01.jpg",
        caption: "TTU teams ready for competition.",
        category: "TEAM SPORTS",
      },
      {
        id: "teams-02",
        image: "/images/gallery/teams/teams-02.jpg",
        caption: "Teamwork on and off the field.",
        category: "TEAMWORK",
      },
      {
        id: "teams-03",
        image: "/images/gallery/teams/teams-03.jpg",
        caption: "Athletes competing for TTU.",
        category: "COMPETITION",
      },
      {
        id: "teams-04",
        image: "/images/gallery/teams/teams-04.jpg",
        caption: "A team united by one goal.",
        category: "TEAM SPIRIT",
      },
      {
        id: "teams-05",
        image: "/images/gallery/teams/teams-05.jpg",
        caption: "Moments of celebration after competition.",
        category: "CELEBRATION",
      },
      {
        id: "teams-06",
        image: "/images/gallery/teams/teams-06.jpg",
        caption: "Representing Taita Taveta University.",
        category: "TTU SPORTS",
      },
    ],
  },

  {
    number: "25",
    kicker: "ART · PERFORMANCE · EXPRESSION",
    title: "DRAMA",
    italicTitle: "& PERFORMING ARTS",
    intro:
      "Beyond competition, university life creates space for creativity, expression and performance through drama and the performing arts.",

    photos: [
      {
        id: "drama-01",
        image: "/images/gallery/drama/drama-01.jpg",
        caption: "Students taking the stage.",
        category: "DRAMA",
      },
      {
        id: "drama-02",
        image: "/images/gallery/drama/drama-02.jpg",
        caption: "Performance and creative expression.",
        category: "PERFORMING ARTS",
      },
      {
        id: "drama-03",
        image: "/images/gallery/drama/drama-03.jpg",
        caption: "Drama and theatre at TTU.",
        category: "THEATRE",
      },
      {
        id: "drama-04",
        image: "/images/gallery/drama/drama-04.jpg",
        caption: "Students expressing themselves through performance.",
        category: "PERFORMANCE",
      },
      {
        id: "drama-05",
        image: "/images/gallery/drama/drama-05.jpg",
        caption: "Creativity takes centre stage.",
        category: "ARTS",
      },
      {
        id: "drama-06",
        image: "/images/gallery/drama/drama-06.jpg",
        caption: "Memorable moments from university performances.",
        category: "DRAMA",
      },
    ],
  },

  {
    number: "26",
    kicker: "HERITAGE · IDENTITY · COMMUNITY",
    title: "CULTURAL",
    italicTitle: "WEEK",
    intro:
      "Cultural activities bring the university community together through heritage, traditional expression, music, dance, food and shared experiences.",

    photos: [
      {
        id: "cultural-01",
        image: "/images/gallery/cultural/cultural-01.jpg",
        caption: "Celebrating culture and heritage.",
        category: "CULTURAL WEEK",
      },
      {
        id: "cultural-02",
        image: "/images/gallery/cultural/cultural-02.jpg",
        caption: "Traditional dress and cultural expression.",
        category: "CULTURE",
      },
      {
        id: "cultural-03",
        image: "/images/gallery/cultural/cultural-03.jpg",
        caption: "Dance and musical performances.",
        category: "PERFORMING ARTS",
      },
      {
        id: "cultural-04",
        image: "/images/gallery/cultural/cultural-04.jpg",
        caption: "Students celebrating cultural diversity.",
        category: "COMMUNITY",
      },
      {
        id: "cultural-05",
        image: "/images/gallery/cultural/cultural-05.jpg",
        caption: "A celebration of identity and heritage.",
        category: "CULTURAL WEEK",
      },
      {
        id: "cultural-06",
        image: "/images/gallery/cultural/cultural-06.jpg",
        caption: "Culture bringing the university together.",
        category: "CULTURE",
      },
    ],
  },

  {
    number: "27",
    kicker: "CAMPUS LIFE · COMMUNITY · MEMORIES",
    title: "TTU LIFE",
    italicTitle: "& EVENTS",
    intro:
      "University life extends beyond classrooms and competitions, creating memories through events, celebrations, student activities and community.",

    photos: [
      {
        id: "events-01",
        image: "/images/gallery/events/event-01.jpg",
        caption: "Students participating in university activities.",
        category: "CAMPUS LIFE",
      },
      {
        id: "events-02",
        image: "/images/gallery/events/event-02.jpg",
        caption: "A moment from the TTU community.",
        category: "UNIVERSITY EVENTS",
      },
      {
        id: "events-03",
        image: "/images/gallery/events/event-03.jpg",
        caption: "Students coming together.",
        category: "STUDENT LIFE",
      },
      {
        id: "events-04",
        image: "/images/gallery/events/event-04.jpg",
        caption: "Celebrating achievement and participation.",
        category: "CELEBRATION",
      },
      {
        id: "events-05",
        image: "/images/gallery/events/event-05.jpg",
        caption: "Memorable moments from university life.",
        category: "CAMPUS LIFE",
      },
      {
        id: "events-06",
        image: "/images/gallery/events/event-06.jpg",
        caption: "The TTU community in action.",
        category: "TTU COMMUNITY",
      },
    ],
  },
];