export enum Genre {
    Action = 0,
    Comedy,
    Horror,
    Drama,
    Thriller,
    Romantic,
}

export const genres = ['Action', 'Comedy', 'Horror', 'Drama', 'Thriller', 'Romantic'];

export class Movie {
    name: string;
    director: string;
    year: number;
    genre: Genre;
    note?: string;
    constructor(name: string, director: string,
        year: number, genre: number, note?: string) {
        this.name = name;
        this.director = director;
        this.year = year;
        this.genre = genre;
        this.note = note;
    }
}

let movie1: Movie = new Movie("Fight Club", "David Finch", 1999, Genre.Action, "Fight club is a film created by Hollywood's famous director David finch in 1999.");
let movie2: Movie = new Movie("Gold escort", "Sergio Leone", 1966, Genre.Action, "It was a comedy with violence as its carrier.");
let movie3: Movie = new Movie("Roman Holiday", "William Wyler", 1953, Genre.Romantic, "He story tells a romantic story between a princess and a reporter in Rome, Italy, in a day. ");
let movie4: Movie = new Movie("Three fools make a big fuss in Bollywood", "Rajkumar Hirani", 2011, Genre.Comedy, "Lanche is a different college student, who breaks the traditional education concept of the college with wisdom.");
let movie5: Movie = new Movie("Quiet Place", "John kalasinsky", 2018, Genre.Thriller, "Keeping quiet is the only rule of life. They can't hear you, they can't chase you.");
let movie6: Movie = new Movie("Insidious: The Last Key", "Adam robittle", 2018, Genre.Horror, "Fear is the only way home?");
let movie7: Movie = new Movie("Teddy bear", "Seth MacFarlane", 2012, Genre.Comedy, "No, I look like a cuddly bear");
let movie8: Movie = new Movie("Son of the weather", "Xinhaicheng", 2019, Genre.Romantic, "It's starting to clear up now!");
let movie9: Movie = new Movie("Fireworks", "Xinhaicheng", 2017, Genre.Romantic, "Fireworks rising, looking from below? Or from the side?");
let movie10: Movie = new Movie("Joker", "Todd Phillips", 2019, Genre.Action, "People who are more lucky than them.")
export let movies: Movie[] = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10];
