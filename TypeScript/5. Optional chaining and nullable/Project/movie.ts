// 1. To type moviesSmall variable
type MovieSmall = {
  title: string;
}

const moviesSmall: MovieSmall[] = [
  { title: 'Movie 1' },
  { title: 'Movie 2' },
  { title: 'Movie 3' },
  { title: 'Movie 4' },
  { title: 'Movie 5' },
];


// 2. To define Director and Actor types
type Person = {
  name: string;
}

type Director = Person;
type Actor = Person;

type MovieFull = {
  title: string;
  director: Director;
  actors: Actor[];
}

// 3. To type moviesFull variable
const moviesFull: MovieFull[] = [
  {
    title: 'Movie 1',
    director: { name: 'Ridley Scott' },
    actors: [{ name: 'Actor one' }, { name: 'Actor two' }],
  },
  {
    title: 'Movie 2',
    director: { name: 'Ridley Scott' },
    actors: [{ name: 'Actor one' }, { name: 'Actor two' }],
  },
  {
    title: 'Movie 3',
    director: { name: 'Ridley Scott' },
    actors: [{ name: 'Actor one' }, { name: 'Actor two' }],
  },
  {
    title: 'Movie 4',
    director: { name: 'Ridley Scott' },
    actors: [{ name: 'Actor one' }],
  },
  {
    title: 'Movie 5',
    director: { name: 'Ridley Scott' },
    actors: [{ name: 'Actor one' }],
  },
];


// 4. To simplify functions getDirector, getActors, getLeadingActor,
//    getSecondaryActor using nullable or optional chaining
type GetPerson = (movie: MovieFull | MovieSmall) => string | Person[];

const getDirector: GetPerson = (movie) =>
  movie.director?.name ?? 'Unknown Director';

const getActors: GetPerson = (movie) =>
  movie.actors ?? 'Unknown actors';

const getLeadingActor: GetPerson = (movie) =>
  movie.actors?.[0].name ?? 'Unknown actor';

const getSecondaryActor: GetPerson = (movie) =>
  movie.actors?.[1]?.name ?? 'Unknown actor';


type LogMovie = (movie: MovieFull | MovieSmall) => void;

const logMovie: LogMovie = (movie) => {
  console.log('Director:', getDirector(movie));
  console.log('Actors:', getActors(movie));
  console.log('Lead actor', getLeadingActor(movie));
  console.log('Second actor', getSecondaryActor(movie));
}

const logSmallMovies: LogMovie = (movie) => {
  logMovie(movie);
}

const logFullMovies: LogMovie = (movie) => {
  logMovie(movie);
}

moviesSmall.forEach((movie) => {
  console.group('Small movies');
  logSmallMovies(movie);
  console.groupEnd();
});

moviesFull.forEach((movie) => {
  console.group('Full movies');
  logFullMovies(movie);
  console.groupEnd();
});