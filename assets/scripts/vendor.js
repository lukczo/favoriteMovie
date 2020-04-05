const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const cancelBtn = addMovieModal.querySelector(".modal__actions")
  .firstElementChild;
const addBtn = addMovieModal.querySelector(".modal__actions").lastElementChild;
const root = document.querySelector("#movie-list");
const backdrop = document.querySelector("#backdrop");
const deleteModalCard = document.querySelector("#delete-modal");

const userInputs = addMovieModal.querySelectorAll("input");
const cardParagraph = document.querySelector("#entry-text");
const movies = [];