import Cover from "./pages/Cover";
import Editorial from "./pages/Editorial";
import Management from "./pages/Management";
import Contents from "./pages/Contents";
import SportsOverview from "./pages/SportsOverview";
import OtherSports from "./pages/OtherSports";
import AchievementsHighlights from "./pages/AchievementsHighlights";
import AthleteSpotlight from "./pages/AthleteSpotlight";
import VoicesOfTTUSport from "./pages/VoicesOfTTUSport";
import SupportSystem from "./pages/SupportSystem";
import OurSportingStory from "./pages/OurSportingStory";
import SportsWellness from "./pages/SportsWellness";
import BehindTheScenes from "./pages/BehindTheScenes";
import SportsGallery from "./pages/SportsGallery";
import SeasonInReview from "./pages/SeasonInReview";
import Acknowledgements from "./pages/Acknowledgements";
import SportsInformation from "./pages/SportsInformation";
import NotesCredits from "./pages/NotesCredits";
import BackCover from "./pages/BackCover";
import ManagementIntro from "./pages/ManagementIntro";

import SportSection from "./components/SportSection";

import { sportsData } from "./data/sportsData";

import "./App.css";

function App() {
  return (
    <main className="magazine">

      {/* =====================================================
          PAGE 01 — COVER
      ===================================================== */}
      <Cover />

      {/* =====================================================
          PAGE 02 — EDITORIAL
      ===================================================== */}
      <Editorial />

      <ManagementIntro />

      {/* =====================================================
          PAGE 03 — SPORTS MANAGEMENT
      ===================================================== */}
      <Management />

      {/* =====================================================
          PAGE 04 — CONTENTS
      ===================================================== */}
      <Contents />

      {/* =====================================================
          PAGE 05 — SPORTS OVERVIEW
      ===================================================== */}
      <SportsOverview />

      {/* =====================================================
          MAIN SPORTS SECTIONS
          Athletics
          Volleyball
          Football
          Basketball
          Netball
          Hockey
          Handball
      ===================================================== */}
      {sportsData.map((sport) => (
        <SportSection
          key={sport.id}
          sport={sport}
        />
      ))}

      {/* =====================================================
          OTHER SPORTS
          Karate and other individual/specialised sports
      ===================================================== */}
      <OtherSports />

      {/* =====================================================
          ACHIEVEMENTS & HIGHLIGHTS
      ===================================================== */}
      <AchievementsHighlights />

      {/* =====================================================
          ATHLETE SPOTLIGHT
          Pages 23–24
      ===================================================== */}
      <AthleteSpotlight />

      {/* =====================================================
          VOICES OF TTU SPORT
          Page 25
      ===================================================== */}
      <VoicesOfTTUSport />

      {/* =====================================================
          THE SUPPORT SYSTEM
      ===================================================== */}
      <SupportSystem />

      {/* =====================================================
          OUR SPORTING STORY
      ===================================================== */}
      <OurSportingStory />

      {/* =====================================================
          SPORTS & WELLNESS
      ===================================================== */}
      <SportsWellness />

      {/* =====================================================
          BEHIND THE SCENES
      ===================================================== */}
      <BehindTheScenes />

      {/* =====================================================
          SPORTS / EVENTS GALLERY
          Pages 30+
      ===================================================== */}
      <SportsGallery />

      {/* =====================================================
          SEASON IN REVIEW
       ===================================================== */}
      <SeasonInReview />

      {/* =====================================================
          PAGE 37 — ACKNOWLEDGEMENTS
        ===================================================== */}
      <Acknowledgements />

      <SeasonInReview />

     {/* =====================================================
           PAGE 38 — SPORTS INFORMATION
        ===================================================== */}
     <SportsInformation />

     {/* =====================================================
           PAGE 38 — NOTES CREDIT
        ===================================================== */}

        <NotesCredits />

        <BackCover/>
     
    </main>
  );
}

export default App;