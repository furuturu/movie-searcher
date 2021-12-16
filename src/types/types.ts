export interface IDataForDetails {
  data: {
    backdrop_path: string;
    poster_path: string;
    tagline: string;
    vote_average: number;
    overview: string;
    id: number;
    name?: string; //сериал
    number_of_episodes?: number;
    number_of_seasons?: number;
    status?: string;
    seasons?: {
      name: string;
      air_date: string;
      overview: string;
      poster_path: string;
      season_number: number;
    }[];
    title?: string; //фильм
    genres: { name: string }[];
    reviews: { results: { author: string; content: string }[] };
    credits: {
      cast: {
        original_name: string;
        character: string;
        profile_path: string;
      }[];
    };
    images: { backdrops: string[] };
    videos: { results: { key: string; id: string }[] };
  };
}

export interface IShow {
  poster_path: string;
  id: number;
  title?: string;
  name?: string;
}

export interface IShowCard {
  show: IShow;
  appType: string | undefined;
}

export interface IPropsForShowsFound {
  queryParams: {
    appType: string;
    language: string;
    genres: string;
    voteMinimum: string;
    sortType: string;
  };
}

export interface ICastData {
  cast: {
    original_name: string;
    character: string;
    profile_path: string;
  }[];
}

export interface IPropsForRelative {
  appType: string | undefined;
  id: string | undefined;
  language: string;
}

export interface IReviews {
  reviews: {
    author: string;
    content: string;
  }[];
}

export interface ISeasonsData {
  seasonsData:
    | {
        name: string;
        air_date: string;
        poster_path: string;
        season_number: number;
      }[]
    | undefined;
}

export interface IVideo {
  video: { key: string; id: string }[];
}

export interface IDataForBillboard {
  backdrop_path: string;
  id: number;
  title?: string;
  name?: string;
  overview: string;
}
export interface ISliderProps {
  props: {
    appType: string;
    switcherType: string | undefined;
    language: string;
  };
}
export interface IDataForHomeSlider {
  id: number;
  poster_path: string;
  title?: string;
  name?: string;
}
export interface ILastQuery {
  name: string;
  id: string;
}
export interface ISearchResults {
  searchQuery: string;
}
