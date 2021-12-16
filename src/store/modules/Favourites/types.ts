export interface IFavouriteSlice {
  movies: {
    id: number;
    poster_path: string;
    title: string;
    vote_average: number;
  }[];
  series: {
    id: number;
    poster_path: string;
    name: string;
    vote_average: number;
  }[];
}
