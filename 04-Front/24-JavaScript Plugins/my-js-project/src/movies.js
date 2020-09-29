const results = document.getElementById("results");

const insertMovies = (data) => {
  data.Search.forEach((result) => {
    const movie = `<li class="list-inline-item">
      <img src="${result.Poster}" height="120" alt="" />
    </li>`;
    results.insertAdjacentHTML('beforeend', movie);
  });
};

const fetchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(insertMovies);
};

const updateResultsList = (event) => {
  results.innerHTML = '';
  event.preventDefault();
  const keyword = document.getElementById("keyword").value;
  fetchMovies(keyword);
}

export { fetchMovies, updateResultsList };
