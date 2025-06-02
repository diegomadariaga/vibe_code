export interface Dinosaur {
  id: number;
  name: string;
  scientificName: string;
  period: string;
  diet: 'Carnívoro' | 'Herbívoro' | 'Omnívoro';
  length: string;
  weight: string;
  habitat: string;
  description: string;
  imageUrl: string;
  funFacts: string[];
}
