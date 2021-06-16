import { Injectable } from '@angular/core';
import { Movie } from '../../movie';
import { movies } from '../../movie';
import { ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  // movie list
  movies: Movie[] = movies;
  // target is the modifying movie object
  target: Movie;
  // idx is the modifying movie index
  idx: number;

  // whether show message
  showMsg: boolean = false;
  // message text color
  msgColor: string;
  // background color
  msgBgColor: string;
  // message text
  msgText: string;

  showMovies: Movie[];

  searchText: string = '';

  constructor() {
    this.getMovies();
  }

  showMsgFn(color: string, bgColor: string, msgText: string) {
    this.showMsg = true;
    this.msgColor = color;
    this.msgBgColor = bgColor;
    this.msgText = msgText;
  }

  hideMsgFn() {
    this.showMsg = false;
  }

  // get movies from history (if localStorage has data)
  getMovies(): Movie[] {
    let history: string = window.localStorage.getItem("movie");
    if (history) {
      this.movies = JSON.parse(history);
    } else {
      this.saveMovie();
    }
    return this.movies;
  }

  // when modifying the data, get the Movie instance
  getTarget() {
    return this.target;
  }

  // save movie into localStorage
  saveMovie() {
    window.localStorage.setItem("movie", JSON.stringify(this.movies));
  }

  // search 
  search(str: string) {
    this.searchText = str.toLowerCase();
  }

  // modify movie instance
  modifyMovie(index: number, movie: Movie): void {
    if (index >= this.movies.length || index < 0) {
      alert("error! modify index is out of movie list range");
    }
    this.movies[index] = movie;
    this.saveMovie();
    // success message
    this.showMsgFn("black", "	lawngreen", "Modify the movie successfully!");
  }

  // add movie instance
  addMovie(movie: Movie): void {
    this.movies.push(movie);
    this.saveMovie();
    this.showMsgFn("black", "	lawngreen", "Add the movie successfully!");
  }

  // save movie instance into service
  recordIthMovie(index: number): void {
    if (index >= this.movies.length || index < 0) {
      alert("error! get index is out of movie list range");
    }
    this.target = this.movies[index];
    this.idx = index;
  }

  // delete movie instance
  deleteIthMovie(index: number): void {
    if (index >= this.movies.length || index < 0) {
      alert("error! delete index is out of movie list range");
    }
    this.movies = this.movies.filter((value, idx) => idx != index);
    this.saveMovie();
    // success information
    this.showMsgFn("black", "	lawngreen", "Delete the movie successfully!");
  }
}
