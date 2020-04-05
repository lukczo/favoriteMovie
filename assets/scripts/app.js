const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const closeMovieModal =()=> {
  addMovieModal.classList.remove("visible");
  toggleBackdrop();

}

const backdropHandler = () => {
  closeMovieModal();
  cancelMovieDeletion();
};

const addModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

const cancelAddMovie = () => {
  closeMovieModal();
  clearInput();
};

const cancelMovieDeletion = () => {
  backdrop.classList.remove("visible");
  deleteModalCard.classList.remove('visible')
}


const aMovie = function (id, movieTitle, imageUrl, rating) {
  this.id = id;
  this.movieTitle = movieTitle;
  this.imageUrl = imageUrl;
  this.rating = rating;
};
const addHandler = function (id, movieTitle, imageUrl, rating) {
  movieTitle = userInputs[0].value.trim();
  imageUrl = userInputs[1].value.trim();
  rating = userInputs[2].value;
  id = Math.random().toString();

  if (
    movieTitle &&
    imageUrl &&
    rating !== "" &&
    !isNaN(rating) &&
    rating <= 5 &&
    rating > 0
  ) {
    let addedMovie = new aMovie(id, movieTitle, imageUrl, rating);

    movies.push(addedMovie);
    console.log(addedMovie);
    console.log(movies);

    renderMovie(
      addedMovie.id,
      addedMovie.movieTitle,
      addedMovie.imageUrl,
      addedMovie.rating
    );
  } else {
    return alert("you have provided invalid input");
  }
  closeMovieModal();
  clearInput();
  updateUi();
};

const renderMovie = function (id, movieTitle, imageUrl, rating) {
  favoriteMovie = document.createElement("li");
  favoriteMovie.classList.add("movie-element");
  favoriteMovie.innerHTML = `
      <div class="movie-element__image">
      <img src="${imageUrl}" alt="${movieTitle}">
      </div>
      <div class="movie-element__info">
      <h2>${movieTitle}</h2>
      <p>${rating}/5 stars</p>
      ${id}
      </div>
  `;
  root.append(favoriteMovie);
  favoriteMovie.addEventListener("click", deleteMovieHandler.bind(null, id));
};

const deleteMovieHandler = (movieId) => {
  deleteModalCard.classList.add("visible");
  toggleBackdrop();


  const confirmModalActionNo = document.getElementById('noCancel');
  let confirmModalActionYes = document.getElementById('yesCancel');

  confirmModalActionNo.removeEventListener("click", cancelMovieDeletion);
  confirmModalActionNo.addEventListener("click", cancelMovieDeletion);

  confirmModalActionYes.replaceWith(confirmModalActionYes.cloneNode(true));
  confirmModalActionYes = document.getElementById('yesCancel');

  confirmModalActionYes.addEventListener("click", () => {
    deleteMovie(movieId);
    cancelMovieDeletion()
  }); 
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  root.children[movieIndex].remove();
  // root.removeChild(root.children[movieIndex]);
  updateUi();

  console.log(movies);
};
const clearInput = () => {
  for (const input of userInputs) {
    input.value = "";
  }
};

const updateUi = () => {
  if (movies.length === 0) {
    cardParagraph.classList.remove("invisible");
  } else {
    cardParagraph.classList.add("invisible");
  }
};

startAddMovieButton.addEventListener("click", addModal);
cancelBtn.addEventListener("click", closeMovieModal);
addBtn.addEventListener("click", addHandler);
backdrop.addEventListener("click", backdropHandler);
