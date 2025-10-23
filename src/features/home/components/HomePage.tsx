import CategorySection from './CategorySection';
import HeroSection from './HeroSection';
import PlaylistCard from './PlaylistCard';
import CallToAction from './CallToAction';
import { homeConstants } from '../constants';
import { Playlist } from '@/types';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <main className="container mx-auto px-4 py-12">
        <CategorySection
          title="For You, Mom"
          subtitle="Curated with care for women who deserve the best"
          icon={<homeConstants.icons.Heart className="w-6 h-6 text-primary-foreground" />}
        >
          {homeConstants.womenPlaylists.map((playlist: Playlist, index: number) => (
            <PlaylistCard key={index} {...playlist} />
          ))}
        </CategorySection>

        <CategorySection
          title="Kids' Corner"
          subtitle="Fun, safe, and educational music for little ones"
          icon={<homeConstants.icons.Baby className="w-6 h-6 text-primary-foreground" />}
        >
          {homeConstants.kidsPlaylists.map((playlist: Playlist, index: number) => (
            <PlaylistCard key={index} {...playlist} />
          ))}
        </CategorySection>

        <div className="relative">
          {/* Colorful background for family section */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 rounded-3xl -m-4 p-4 opacity-60" />
          <div className="relative">
            <CategorySection
              title="Family Fun"
              subtitle="Safe, joyful music for the whole family to enjoy together"
              icon={<homeConstants.icons.HomeIcon className="w-6 h-6 text-primary-foreground" />}
            >
              {homeConstants.familyPlaylists.map((playlist: Playlist, index: number) => (
                <PlaylistCard key={index} {...playlist} />
              ))}
            </CategorySection>
          </div>
        </div>

        <CallToAction />
      </main>
    </div>
  );
};

export default HomePage;
