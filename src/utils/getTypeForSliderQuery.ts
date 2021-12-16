export const getTypeForSliderQuery = (switcherName: string) => {
  if (switcherName === "Now Playing") {
    return "now_playing";
  } else if (switcherName === "Top Rated") {
    return "top_rated";
  } else if (switcherName === "Upcoming") {
    return "upcoming";
  } else if (switcherName === "Popular") {
    return "popular";
  } else if (switcherName === "On The Air") {
    return "on_the_air";
  } else if (switcherName === "Airing Today") {
    return "airing_today";
  }
};
