  //Function for filtering movies
export const handleFilterMovie = (e, movieList, setMovieList) => {
  const newMovieList = movieList.filter((m) => m.title.includes(e));
  setMovieList(newMovieList);
};

  //Function for deleting movies from array
export const handleDelete = (movie,movieList,setMovieList) => {
  const newMovieList = movieList.filter((m) => m.id !== movie.id);
  setMovieList(newMovieList);
};
