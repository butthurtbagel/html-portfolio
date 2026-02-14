
export interface PoemRequest {
  tone: 'romantic' | 'funny' | 'poetic';
  memories: string;
}

export interface DateIdea {
  title: string;
  description: string;
  location: string;
  link?: string;
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
  maps?: {
    uri: string;
    title: string;
  };
}
