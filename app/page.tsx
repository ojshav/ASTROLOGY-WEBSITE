import React from "react";
import NewHeroSection from "./components/NewHeroSection";
import dynamic from "next/dynamic";
import { ScrollAnimation } from "./components/ScrollAnimation";
import { ExploreMoreInsights } from './components/ExploreMoreInsights';


const AstrologerProfile = dynamic(
  () =>
    import("./components/AstrologerProfile").then(
      (mod) => mod.AstrologerProfile
    ),
  { loading: () => <div>Loading...</div>, ssr: false }
);
const BestServices = dynamic(
  () => import("./components/BestServices").then((mod) => mod.BestServices),
  { loading: () => <div>Loading...</div>, ssr: false }
);
const Testimonials = dynamic(
  () => import("./components/Testimonials").then((mod) => mod.Testimonials),
  { loading: () => <div>Loading...</div>, ssr: false }
);
const BestProducts = dynamic(
  () => import("./components/BestProducts").then((mod) => mod.BestProducts),
  { loading: () => <div>Loading...</div>, ssr: false }
);
const FeaturedProducts = dynamic(
  () =>
    import("./components/FeaturedProducts").then((mod) => mod.FeaturedProducts),
  { loading: () => <div>Loading...</div>, ssr: false }
);
const BlogPreview = dynamic(
  () => import("./components/BlogPreview").then((mod) => mod.BlogPreview),
  { loading: () => <div>Loading...</div>, ssr: false }
);
const ContactForm = dynamic(
  () => import("./components/ContactForm").then((mod) => mod.ContactForm),
  { loading: () => <div>Loading...</div>, ssr: false }
);
const DailyHoroscope = dynamic(
  () => import("./components/DailyHoroscope").then((mod) => mod.DailyHoroscope),
  { loading: () => <div>Loading...</div>, ssr: false }
);
const AstrologyQuiz = dynamic(
  () => import("./components/AstrologyQuiz").then((mod) => mod.AstrologyQuiz),
  { loading: () => <div>Loading...</div>, ssr: false }
);
const RecentPosts = dynamic(() => import("./components/RecentPosts"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});
const FeaturedBlogs = dynamic(() => import("./components/FeaturedBlogs"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});
const ShopCategoriesMinimal = dynamic(
  () => import("./components/ShopCategoriesMinimal"),
  { loading: () => <div>Loading...</div>, ssr: false }
);
const NakshatraGyaanBanner = dynamic(
  () => import("./components/NakshatraGyaanBanner"),
  { loading: () => <div>Loading...</div>, ssr: false }
);
const SpiritualJourneyBanner = dynamic(
  () => import("./components/SpiritualJourneyBanner"),
  { loading: () => <div>Loading...</div>, ssr: false }
);

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <NewHeroSection />

      <div className="pt-8 relative z-10">
        <RecentPosts />
        {/* <FeaturedBlogs /> */}

        <ScrollAnimation>
          <DailyHoroscope />
        </ScrollAnimation>

        <ScrollAnimation>
          <ShopCategoriesMinimal />
        </ScrollAnimation>

        <ScrollAnimation>
          <ExploreMoreInsights />
        </ScrollAnimation>

        <ScrollAnimation>
          <BestServices />
        </ScrollAnimation>

        <ScrollAnimation>
          <NakshatraGyaanBanner />
        </ScrollAnimation>

        <ScrollAnimation>
          <BestProducts />
        </ScrollAnimation>

        <ScrollAnimation>
          <AstrologerProfile />
        </ScrollAnimation>

        <ScrollAnimation>
          <AstrologyQuiz />
        </ScrollAnimation>

        <ScrollAnimation>
          <Testimonials />
        </ScrollAnimation>

        <ScrollAnimation>
          <SpiritualJourneyBanner />
        </ScrollAnimation>

        <ScrollAnimation>
          <ContactForm />
        </ScrollAnimation>
      </div>
    </div>
  );
}
