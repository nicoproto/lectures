// const results = document.getElementById("results");
// const form = document.getElementById("search-movies");

// const searchMovies = (keyword) => {
//   const url = `http://www.omdbapi.com/?apikey=8691812a&s=${keyword}`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       data.Search.forEach((movie) => {
//         const movie_html = `<li class="list-inline-item">
//         <img src="${movie.Poster}" alt="">
//         <p>${movie.Title}</p>
//       </li>
//       `;
//         results.insertAdjacentHTML("beforeend", movie_html);
//       })
//     })
// };

// form.addEventListener("submit", (event)=> {
//   results.innerHTML = '';
//   event.preventDefault();
//   const keyword = document.getElementById("keyword").value;
//   searchMovies(keyword);
// });

// searchMovies("avengers");

const searchAlgoliaPlaces = (event) => {
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: event.currentTarget.value })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data.hits); // Look at local_names.default
    });
};

const input = document.querySelector("#search");
input.addEventListener("keyup", searchAlgoliaPlaces);
