const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const movies = [];

// Functions

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter(movie => {
        return movie.info.title.includes(filter);
      });

  filteredMovies.forEach(movie => {
    const movieEl = document.createElement('li');
    const { info, ...otherProps } = movie;
    // const { title: movieTitle } = info
    let { getFormatedTitle } = movie;
    // getFormatedTitle = getFormatedTitle.bind(movie, , ,) // - bind for future execution
    // let text = getFormatedTitle.call(movie, , ,) + ' - ';  // - call executes right away + additional args
    let text = getFormatedTitle.apply(movie, []) + ' - '; // -  executes right away but only one additional argument; an array
    for (const key in info) {
      if (key !== 'title' && key !== '_title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    console.log(otherProps);
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (extraName.trim() === '' || extraValue.trim() === '') {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
        // makes it writable
        if (val.trim() === '') {
          this._title = 'DEFAULT';
          return;
        }
        this._title = val;
      },
      get title() {
        // makes it readable
        return this._title;
      },
      [extraName]: extraValue
    },
    id: Math.random().toString(),
    getFormatedTitle() {
      return this.info.title.toUpperCase(); //this refers to newMovie
    }
  };

  newMovie.info.title = title; //triggers the setter
  console.log(newMovie.info.title); // access the getter.

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

// Event Listeners
addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
//
