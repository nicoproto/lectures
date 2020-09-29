import { fetchMovies, updateMovieList } from './movie';
import { initSortable } from './plugins/init_sortable';
import { initMarkdown } from './plugins/init_markdown';
import { initSelect2 } from './plugins/init_select';

fetchMovies("avengers");
initSortable();
initMarkdown();
initSelect2();

const form = document.getElementById("search-movies");
form.addEventListener("submit", updateMovieList);
