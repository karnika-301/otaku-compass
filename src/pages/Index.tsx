import { useState } from "react";
import { Search, Menu, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimeCard } from "@/components/AnimeCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { HiddenGems, HindiDubbed, BeginnerFriendly, MindBending } from "@/components/CuratedSection";
import { sampleAnime, getAnimeByCategory, filterAnime } from "@/data/animeData";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const [filters, setFilters] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [filteredAnime, setFilteredAnime] = useState(sampleAnime);

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);
    const filtered = filterAnime(sampleAnime, newFilters);
    setFilteredAnime(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <h1 className="text-2xl font-bold bg-gradient-sakura bg-clip-text text-transparent">
                AnimeVerse
              </h1>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Discover
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Trending
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Reviews
                </a>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex relative max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search anime..."
                  className="pl-10 bg-background/50 border-border/50 focus:border-primary/50"
                />
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <Menu className="h-4 w-4" />
              </Button>
              
              <Button variant="ghost" size="sm">
                <BookOpen className="h-4 w-4" />
              </Button>
              
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-sakura bg-clip-text text-transparent">
              Discover Your Next
              <br />
              Anime Adventure
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Personalized recommendations tailored to your taste. From hidden gems to mainstream hits, 
              find the perfect anime for every mood and moment.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-gradient-sakura hover:shadow-glow-sakura transition-all duration-300">
                Get Recommendations
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                Browse Genres
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-80 flex-shrink-0`}>
            <FilterSidebar onFiltersChange={handleFiltersChange} />
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-8">
            {/* Curated Sections */}
            {Object.keys(filters).length === 0 && (
              <div className="space-y-8">
                <BeginnerFriendly anime={getAnimeByCategory("beginners")} />
                <HiddenGems anime={getAnimeByCategory("hidden-gems")} />
                <HindiDubbed anime={getAnimeByCategory("hindi-dubbed")} />
                <MindBending anime={getAnimeByCategory("mind-bending")} />
              </div>
            )}

            {/* Filtered Results */}
            {Object.keys(filters).length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Search Results
                    </h3>
                    <p className="text-muted-foreground">
                      Found {filteredAnime.length} anime matching your criteria
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {filteredAnime.map((anime) => (
                    <AnimeCard key={anime.id} {...anime} />
                  ))}
                </div>
                
                {filteredAnime.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                      No anime found matching your filters. Try adjusting your criteria.
                    </p>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
