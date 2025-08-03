import { Star, Heart, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AnimeCardProps {
  title: string;
  synopsis: string;
  rating: number;
  tags: string[];
  thumbnail: string;
  streamingPlatform: string;
  episodes?: number;
  year?: number;
}

export const AnimeCard = ({
  title,
  synopsis,
  rating,
  tags,
  thumbnail,
  streamingPlatform,
  episodes,
  year
}: AnimeCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-sakura">
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Button
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            console.log(`Added ${title} to favorites`);
          }}
          className="absolute top-3 right-3 bg-background/20 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <Button
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            console.log(`Playing ${title}`);
          }}
          className="absolute bottom-3 right-3 bg-primary/80 hover:bg-primary transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <Play className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-sm leading-tight line-clamp-2 text-foreground">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-golden text-sm flex-shrink-0">
            <Star className="h-3 w-3 fill-current" />
            <span>{rating}</span>
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
          {synopsis}
        </p>
        
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
            >
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge
              variant="outline"
              className="text-xs px-2 py-1 border-muted-foreground/30 text-muted-foreground"
            >
              +{tags.length - 3}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/50">
          <span className="font-medium text-neon-blue">{streamingPlatform}</span>
          <div className="flex gap-2">
            {episodes && <span>{episodes} eps</span>}
            {year && <span>{year}</span>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};