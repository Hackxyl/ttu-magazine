import {
  ArrowUpRight,
  ChevronRight,
  Medal,
  Trophy,
  Users,
} from "lucide-react";
import MagazinePage from "../components/MagazinePage";

const contents = [
  {
    number: "05",
    title: "Sports Overview",
    description:
      "An introduction to the sporting disciplines and teams represented in the TTU Sports & Athletics programme.",
    icon: Trophy,
    category: "SPORTS & ATHLETICS",
  },
  {
    number: "06",
    title: "Athletics",
    description:
      "Track and field competition built around speed, strength and individual sporting excellence.",
    icon: Medal,
    category: "INDIVIDUAL & TRACK EVENTS",
  },
  {
    number: "07",
    title: "Volleyball",
    description:
      "The men's and ladies volleyball teams, their leadership, squads and competitive journey.",
    icon: Users,
    category: "TEAM SPORT",
  },
  {
    number: "10",
    title: "Football",
    description:
      "The men's and ladies football teams, team leadership, squads and the competitive spirit of university football.",
    icon: Trophy,
    category: "TEAM SPORT",
  },
  {
    number: "13",
    title: "Basketball",
    description:
      "The men's and ladies basketball teams, celebrating skill, teamwork and competition.",
    icon: Users,
    category: "TEAM SPORT",
  },
  {
    number: "16",
    title: "Netball",
    description:
      "A look at the ladies netball programme, team leadership, players and competitive development.",
    icon: Users,
    category: "TEAM SPORT",
  },
  {
    number: "18",
    title: "Hockey",
    description:
      "Technical skill, speed, tactical awareness and teamwork from the men's hockey programme.",
    icon: Medal,
    category: "TEAM SPORT",
  },
  {
    number: "20",
    title: "Handball",
    description:
      "Fast-paced competition combining physical strength, tactical skills and teamwork.",
    icon: Trophy,
    category: "TEAM SPORT",
  },
  {
    number: "24",
    title: "Achievements & Highlights",
    description:
      "Memorable performances, milestones and verified highlights from the University's sporting activities.",
    icon: Medal,
    category: "HIGHLIGHTS",
  },
  {
    number: "28",
    title: "Sports Gallery",
    description:
      "A visual collection of athletes, teams, action and moments from TTU sport.",
    icon: Trophy,
    category: "PHOTO GALLERY",
  },
];

function Contents() {
  return (
    <MagazinePage className="contents-page">
      <div className="contents-header">
        <div>
          <span className="section-kicker">2026 EDITION</span>

          <h2>
            INSIDE OUR
            <br />
            <em>MAGAZINE</em>
          </h2>
        </div>

        <div className="contents-number">04</div>
      </div>

      <div className="contents-intro">
        <p>
          A celebration of the athletes, sporting disciplines,
          and people shaping sport at Taita Taveta University.
        </p>
      </div>

      <div className="contents-feature">
        <div className="contents-feature-number">04</div>

        <div className="contents-feature-content">
          <span>TAITA TAVETA UNIVERSITY</span>

          <h3>
            One University.
            <br />
            <em>One Spirit.</em>
          </h3>
        </div>

        <div className="contents-feature-mark">
          <Trophy size={42} strokeWidth={1.4} />
        </div>
      </div>

      <div className="contents-list">
        {contents.map((item) => {
          const Icon = item.icon;

          return (
            <article
              className="contents-item"
              key={`${item.number}-${item.title}`}
            >
              <div className="contents-item-number">
                {item.number}
              </div>

              <div className="contents-item-icon">
                <Icon size={20} />
              </div>

              <div className="contents-item-body">
                <span>{item.category}</span>

                <h4>{item.title}</h4>

                <p>{item.description}</p>
              </div>

              <div className="contents-item-arrow">
                <ChevronRight size={22} />
              </div>
            </article>
          );
        })}
      </div>

      <div className="contents-bottom">
        <div className="contents-quote">
          <span>SPORT IS A JOURNEY</span>

          <strong>
            Every athlete has
            <br />
            a story to tell.
          </strong>
        </div>

        <div className="contents-footer">
          <span>SPORTS MAGAZINE · 2026</span>

          <div>
            <ArrowUpRight size={15} />
            TTU SPORTS & ATHLETICS
          </div>
        </div>
      </div>
    </MagazinePage>
  );
}

export default Contents;