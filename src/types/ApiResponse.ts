export type Meme = {
  url: string;
};

export type ApiResponse = {
  success: boolean;
  data: {
    memes: Meme[];
  };
};
