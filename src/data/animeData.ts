export interface Anime {
  id: string;
  title: string;
  synopsis: string;
  rating: number;
  tags: string[];
  thumbnail: string;
  streamingPlatform: string;
  episodes?: number;
  year?: number;
  genre: string[];
  mood: string[];
  format: string;
  language: string[];
  category?: string[];
}

export const sampleAnime: Anime[] = [
  {
    id: "1",
    title: "Attack on Titan",
    synopsis: "Humanity fights for survival against giant humanoid Titans in this dark and intense series that explores themes of freedom, sacrifice, and the horrors of war.",
    rating: 9.0,
    tags: ["titans", "military", "survival", "mystery"],
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    streamingPlatform: "Crunchyroll",
    episodes: 87,
    year: 2013,
    genre: ["Shonen", "Supernatural"],
    mood: ["Dark", "Intense"],
    format: "TV Series",
    language: ["Japanese (Sub)", "English Dub"],
    category: ["beginners", "mind-bending"]
  },
  {
    id: "2", 
    title: "Demon Slayer",
    synopsis: "Tanjiro becomes a demon slayer to save his sister Nezuko and avenge his family in this beautifully animated tale of brotherhood and determination.",
    rating: 8.7,
    tags: ["demons", "family", "swordsmanship", "friendship"],
    thumbnail: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=600&fit=crop",
    streamingPlatform: "Netflix",
    episodes: 44,
    year: 2019,
    genre: ["Shonen", "Supernatural"],
    mood: ["Emotional", "Intense"],
    format: "TV Series",
    language: ["Japanese (Sub)", "Hindi Dub", "English Dub"],
    category: ["beginners", "hindi-dubbed"]
  },
  {
    id: "3",
    title: "Your Name",
    synopsis: "Two teenagers share a profound, magical connection when they begin swapping bodies in this stunning romantic fantasy that transcends time and space.",
    rating: 8.4,
    tags: ["romance", "supernatural", "time", "body-swap"],
    thumbnail: "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=400&h=600&fit=crop",
    streamingPlatform: "Funimation",
    year: 2016,
    genre: ["Romance", "Supernatural"],
    mood: ["Emotional", "Heartwarming"],
    format: "Movie",
    language: ["Japanese (Sub)", "English Dub"],
    category: ["beginners", "emotional"]
  },
  {
    id: "4",
    title: "Monster",
    synopsis: "A brilliant surgeon's life spirals into darkness as he hunts a dangerous patient he once saved in this psychological thriller that questions the nature of evil.",
    rating: 9.1,
    tags: ["psychological", "thriller", "medical", "serial-killer"],
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
    streamingPlatform: "Netflix",
    episodes: 74,
    year: 2004,
    genre: ["Seinen", "Horror"],
    mood: ["Dark", "Philosophical"],
    format: "TV Series",
    language: ["Japanese (Sub)"],
    category: ["hidden-gems", "mind-bending"]
  },
  {
    id: "5",
    title: "Spirited Away",
    synopsis: "A young girl must work in a magical bathhouse to save her parents in this enchanting tale of courage, growth, and environmental consciousness.",
    rating: 9.3,
    tags: ["magic", "coming-of-age", "spirits", "adventure"],
    thumbnail: "https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?w=400&h=600&fit=crop",
    streamingPlatform: "HBO Max",
    year: 2001,
    genre: ["Supernatural", "Slice of Life"],
    mood: ["Heartwarming", "Nostalgic"],
    format: "Movie",
    language: ["Japanese (Sub)", "Hindi Dub", "English Dub"],
    category: ["beginners", "hindi-dubbed"]
  },
  {
    id: "6",
    title: "Death Note",
    synopsis: "A high school student discovers a supernatural notebook that kills anyone whose name is written in it, leading to a deadly game of cat and mouse with a detective.",
    rating: 9.0,
    tags: ["supernatural", "psychological", "crime", "strategy"],
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    streamingPlatform: "Netflix",
    episodes: 37,
    year: 2006,
    genre: ["Seinen", "Supernatural"],
    mood: ["Dark", "Intense"],
    format: "TV Series",
    language: ["Japanese (Sub)", "Hindi Dub", "English Dub"],
    category: ["beginners", "mind-bending", "hindi-dubbed"]
  },
  {
    id: "7",
    title: "A Silent Voice",
    synopsis: "A former bully seeks redemption by befriending the deaf girl he once tormented in this powerful exploration of bullying, depression, and forgiveness.",
    rating: 8.1,
    tags: ["bullying", "redemption", "disability", "depression"],
    thumbnail: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=600&fit=crop",
    streamingPlatform: "Netflix",
    year: 2016,
    genre: ["Slice of Life", "Romance"],
    mood: ["Emotional", "Heartwarming"],
    format: "Movie",
    language: ["Japanese (Sub)", "English Dub"],
    category: ["emotional", "hidden-gems"]
  },
  {
    id: "8",
    title: "Mob Psycho 100",
    synopsis: "A psychic middle schooler tries to live a normal life while his overwhelming powers attract supernatural threats and life-changing experiences.",
    rating: 8.6,
    tags: ["psychic", "coming-of-age", "comedy", "supernatural"],
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    streamingPlatform: "Crunchyroll",
    episodes: 37,
    year: 2016,
    genre: ["Shonen", "Supernatural"],
    mood: ["Funny", "Uplifting"],
    format: "TV Series",
    language: ["Japanese (Sub)", "English Dub"],
    category: ["hidden-gems", "beginners"]
  },
  {
    id: "9",
    title: "Perfect Blue",
    synopsis: "A pop idol's transition to acting triggers a psychological breakdown that blurs the line between reality and delusion in this mind-bending thriller.",
    rating: 8.0,
    tags: ["psychological", "identity", "thriller", "celebrity"],
    thumbnail: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=600&fit=crop",
    streamingPlatform: "Funimation",
    year: 1997,
    genre: ["Seinen", "Horror"],
    mood: ["Dark", "Philosophical"],
    format: "Movie",
    language: ["Japanese (Sub)", "English Dub"],
    category: ["hidden-gems", "mind-bending"]
  },
  {
    id: "10",
    title: "Weathering With You",
    synopsis: "A boy meets a girl who can control the weather in this stunning visual masterpiece about love, sacrifice, and climate change.",
    rating: 7.5,
    tags: ["weather", "romance", "supernatural", "climate"],
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
    streamingPlatform: "Funimation",
    year: 2019,
    genre: ["Romance", "Supernatural"],
    mood: ["Emotional", "Nostalgic"],
    format: "Movie",
    language: ["Japanese (Sub)", "Hindi Dub", "English Dub"],
    category: ["emotional", "hindi-dubbed"]
  },
  {
    id: "11",
    title: "One Piece",
    synopsis: "Follow Monkey D. Luffy and his Straw Hat crew as they search for the ultimate treasure in this epic adventure spanning over 1000 episodes.",
    rating: 8.9,
    tags: ["pirates", "adventure", "friendship", "treasure"],
    thumbnail: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop",
    streamingPlatform: "Crunchyroll",
    episodes: 1000,
    year: 1999,
    genre: ["Shonen"],
    mood: ["Funny", "Uplifting"],
    format: "TV Series",
    language: ["Japanese (Sub)", "Hindi Dub", "English Dub"],
    category: ["beginners", "hindi-dubbed"]
  },
  {
    id: "12",
    title: "Serial Experiments Lain",
    synopsis: "A quiet girl becomes obsessed with computers and the internet, leading to a mind-bending exploration of identity, reality, and consciousness.",
    rating: 8.1,
    tags: ["cyberpunk", "identity", "internet", "consciousness"],
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
    streamingPlatform: "Funimation",
    episodes: 13,
    year: 1998,
    genre: ["Seinen", "Supernatural"],
    mood: ["Dark", "Philosophical"],
    format: "TV Series",
    language: ["Japanese (Sub)", "English Dub"],
    category: ["hidden-gems", "mind-bending"]
  }
];

export const getAnimeByCategory = (category: string): Anime[] => {
  return sampleAnime.filter(anime => anime.category?.includes(category));
};

export const filterAnime = (anime: Anime[], filters: any): Anime[] => {
  let filtered = [...anime];

  if (filters.search) {
    const searchTerm = filters.search.toLowerCase();
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(searchTerm) ||
      item.synopsis.toLowerCase().includes(searchTerm) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  if (filters.genres?.length > 0) {
    filtered = filtered.filter(item =>
      filters.genres.some((genre: string) => item.genre.includes(genre))
    );
  }

  if (filters.moods?.length > 0) {
    filtered = filtered.filter(item =>
      filters.moods.some((mood: string) => item.mood.includes(mood))
    );
  }

  if (filters.formats?.length > 0) {
    filtered = filtered.filter(item =>
      filters.formats.includes(item.format)
    );
  }

  if (filters.languages?.length > 0) {
    filtered = filtered.filter(item =>
      filters.languages.some((lang: string) => item.language.includes(lang))
    );
  }

  return filtered;
};