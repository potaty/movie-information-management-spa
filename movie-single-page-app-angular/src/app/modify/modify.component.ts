import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { movies, genres, Movie, Genre } from '../../movie';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MoviesService } from '../service/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'modify-page',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent {
  createForm: FormGroup;
  genres: string[] = genres;
  moviesService: MoviesService;
  submitted: boolean;
  router: Router;
  target: Movie;
  idx: number;

  constructor(moviesService: MoviesService, router: Router) {
    this.moviesService = moviesService;
    this.submitted = false;
    this.router = router;
    this.target = moviesService.getTarget();
    this.idx = moviesService.idx;
    this.moviesService.hideMsgFn();
  }

  // createForm is for saving movie
  ngOnInit() {
    this.createForm = new FormGroup({
      name: new FormControl(this.target.name, Validators.required),
      director: new FormControl(this.target.director, Validators.required),
      year: new FormControl(this.target.year, Validators.required),
      genre: new FormControl(this.target.genre, Validators.required),
      note: new FormControl(this.target.note),
    });
  }
  // check if this name is duplicated
  check(): boolean {
    if (this.moviesService.movies.filter((value: Movie, index: number) => index != this.idx).map(value => value.name).includes(this.createForm.value.name)) {
      this.moviesService.showMsgFn("white", "red", "Movie name is duplicated with another movie! Please change another movie.");
      return false;
    }
    return true;
  }
  // update and goes back to homepage
  onSubmit(): void {
    if (this.check()) {
      this.moviesService.modifyMovie(this.idx, this.createForm.value);
      this.router.navigate(['/']);
    }
  }
}
