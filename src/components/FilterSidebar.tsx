import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FilterSidebarProps {
  onFiltersChange: (filters: any) => void;
}

export const FilterSidebar = ({ onFiltersChange }: FilterSidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const genres = [
    "Shonen", "Seinen", "Shojo", "Josei", "Isekai", "Slice of Life",
    "Mecha", "Romance", "Horror", "Supernatural", "Sports", "Music"
  ];

  const moods = [
    "Emotional", "Funny", "Intense", "Dark", "Uplifting", "Mysterious",
    "Nostalgic", "Thrilling", "Heartwarming", "Philosophical"
  ];

  const formats = ["TV Series", "Movie", "OVA", "ONA", "Special"];
  const languages = ["Japanese (Sub)", "Hindi Dub", "English Dub"];

  const handleGenreToggle = (genre: string) => {
    const updated = selectedGenres.includes(genre)
      ? selectedGenres.filter(g => g !== genre)
      : [...selectedGenres, genre];
    setSelectedGenres(updated);
    updateFilters({ genres: updated });
  };

  const handleMoodToggle = (mood: string) => {
    const updated = selectedMoods.includes(mood)
      ? selectedMoods.filter(m => m !== mood)
      : [...selectedMoods, mood];
    setSelectedMoods(updated);
    updateFilters({ moods: updated });
  };

  const handleFormatToggle = (format: string) => {
    const updated = selectedFormats.includes(format)
      ? selectedFormats.filter(f => f !== format)
      : [...selectedFormats, format];
    setSelectedFormats(updated);
    updateFilters({ formats: updated });
  };

  const handleLanguageToggle = (language: string) => {
    const updated = selectedLanguages.includes(language)
      ? selectedLanguages.filter(l => l !== language)
      : [...selectedLanguages, language];
    setSelectedLanguages(updated);
    updateFilters({ languages: updated });
  };

  const updateFilters = (newFilters: any) => {
    onFiltersChange({
      search: searchQuery,
      genres: selectedGenres,
      moods: selectedMoods,
      formats: selectedFormats,
      languages: selectedLanguages,
      ...newFilters
    });
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedGenres([]);
    setSelectedMoods([]);
    setSelectedFormats([]);
    setSelectedLanguages([]);
    onFiltersChange({});
  };

  const totalActiveFilters = selectedGenres.length + selectedMoods.length + selectedFormats.length + selectedLanguages.length;

  return (
    <Card className="bg-gradient-card border-border/50 h-fit">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            Filters
          </CardTitle>
          {totalActiveFilters > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-muted-foreground hover:text-primary"
            >
              Clear All
            </Button>
          )}
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search anime..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              updateFilters({ search: e.target.value });
            }}
            className="pl-10 bg-background/50 border-border/50 focus:border-primary/50"
          />
        </div>

        {totalActiveFilters > 0 && (
          <div className="flex flex-wrap gap-1">
            {selectedGenres.map(genre => (
              <Badge key={genre} variant="default" className="bg-primary/20 text-primary border-primary/30">
                {genre}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer hover:text-primary-foreground" 
                  onClick={() => handleGenreToggle(genre)}
                />
              </Badge>
            ))}
            {selectedMoods.map(mood => (
              <Badge key={mood} variant="default" className="bg-secondary/20 text-secondary border-secondary/30">
                {mood}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer hover:text-secondary-foreground" 
                  onClick={() => handleMoodToggle(mood)}
                />
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <h4 className="font-medium text-sm mb-3 text-foreground">Genre</h4>
          <div className="grid grid-cols-1 gap-2">
            {genres.map((genre) => (
              <div key={genre} className="flex items-center space-x-2">
                <Checkbox
                  id={`genre-${genre}`}
                  checked={selectedGenres.includes(genre)}
                  onCheckedChange={() => handleGenreToggle(genre)}
                  className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label
                  htmlFor={`genre-${genre}`}
                  className="text-sm text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  {genre}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-border/50" />

        <div>
          <h4 className="font-medium text-sm mb-3 text-foreground">Mood</h4>
          <div className="grid grid-cols-1 gap-2">
            {moods.map((mood) => (
              <div key={mood} className="flex items-center space-x-2">
                <Checkbox
                  id={`mood-${mood}`}
                  checked={selectedMoods.includes(mood)}
                  onCheckedChange={() => handleMoodToggle(mood)}
                  className="border-border data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
                />
                <label
                  htmlFor={`mood-${mood}`}
                  className="text-sm text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  {mood}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-border/50" />

        <div>
          <h4 className="font-medium text-sm mb-3 text-foreground">Format</h4>
          <div className="grid grid-cols-1 gap-2">
            {formats.map((format) => (
              <div key={format} className="flex items-center space-x-2">
                <Checkbox
                  id={`format-${format}`}
                  checked={selectedFormats.includes(format)}
                  onCheckedChange={() => handleFormatToggle(format)}
                  className="border-border data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                />
                <label
                  htmlFor={`format-${format}`}
                  className="text-sm text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  {format}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-border/50" />

        <div>
          <h4 className="font-medium text-sm mb-3 text-foreground">Language</h4>
          <div className="grid grid-cols-1 gap-2">
            {languages.map((language) => (
              <div key={language} className="flex items-center space-x-2">
                <Checkbox
                  id={`language-${language}`}
                  checked={selectedLanguages.includes(language)}
                  onCheckedChange={() => handleLanguageToggle(language)}
                  className="border-border data-[state=checked]:bg-golden data-[state=checked]:border-golden"
                />
                <label
                  htmlFor={`language-${language}`}
                  className="text-sm text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  {language}
                </label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};