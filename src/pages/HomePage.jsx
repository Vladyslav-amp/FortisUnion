import Hero from '../components/Hero/Hero';
import FightersGrid from '../components/FightersGrid/FightersGrid';
import FighterSpotlight from '../components/FighterSpotlight/FighterSpotlight';
import StoryTimeline from '../components/StoryTimeline/StoryTimeline';
import StatsStrip from '../components/StatsStrip/StatsStrip';
import EventsPreview from '../components/EventsPreview/EventsPreview';
import MediaGallery from '../components/MediaGallery/MediaGallery';
import BlogPreview from '../components/BlogPreview/BlogPreview';
import JoinPromotion from '../components/JoinPromotion/JoinPromotion';
import Newsletter from '../components/Newsletter/Newsletter';

function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <FightersGrid />
      <FighterSpotlight />
      <StoryTimeline />
      <EventsPreview />
      <MediaGallery />
      <BlogPreview />
      <JoinPromotion />
      <Newsletter />
    </>
  );
}

export default HomePage;
