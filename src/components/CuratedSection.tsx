import { AnimeCard } from "./AnimeCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, Heart, Zap, Brain } from "lucide-react";

interface Anime {
  id: string;
  title: string;
  synopsis: string;
  rating: number;
  tags: string[];
  thumbnail: string;
  streamingPlatform: string;
  episodes?: number;
  year?: number;
}

interface CuratedSectionProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  anime: Anime[];
  viewAllLink?: string;
}

export const CuratedSection = ({ 
  title, 
  subtitle, 
  icon, 
  anime, 
  viewAllLink 
}: CuratedSectionProps) => {
  return (
    <Card className="bg-gradient-card border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icon && <div className="text-primary">{icon}</div>}
            <div>
              <CardTitle className="text-xl font-bold bg-gradient-sakura bg-clip-text text-transparent">
                {title}
              </CardTitle>
              {subtitle && (
                <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
              )}
            </div>
          </div>
          {viewAllLink && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-primary hover:text-primary/80"
              onClick={() => console.log(`Navigating to ${viewAllLink}`)}
            >
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {anime.slice(0, 6).map((item) => (
            <AnimeCard key={item.id} {...item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Predefined curated sections with icons
export const HiddenGems = ({ anime }: { anime: Anime[] }) => (
  <CuratedSection
    title="Hidden Gems"
    subtitle="Underrated masterpieces waiting to be discovered"
    icon={<Sparkles className="h-6 w-6" />}
    anime={anime}
    viewAllLink="/hidden-gems"
  />
);

export const HindiDubbed = ({ anime }: { anime: Anime[] }) => (
  <CuratedSection
    title="Hindi-Dubbed Must-Watch"
    subtitle="Best anime available with Hindi dubbing"
    icon={<Heart className="h-6 w-6" />}
    anime={anime}
    viewAllLink="/hindi-dubbed"
  />
);

export const BeginnerFriendly = ({ anime }: { anime: Anime[] }) => (
  <CuratedSection
    title="Top Picks for Beginners"
    subtitle="Perfect entry points into the world of anime"
    icon={<Zap className="h-6 w-6" />}
    anime={anime}
    viewAllLink="/beginners"
  />
);

export const MindBending = ({ anime }: { anime: Anime[] }) => (
  <CuratedSection
    title="Mind-Bending Plot Twists"
    subtitle="Anime that will leave you questioning everything"
    icon={<Brain className="h-6 w-6" />}
    anime={anime}
    viewAllLink="/mind-bending"
  />
);