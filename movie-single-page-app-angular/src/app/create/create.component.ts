import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { movies, genres, Movie, Genre } from '../../movie';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MoviesService } from '../service/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'create-page',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  createForm: FormGroup;
  genres: string[] = genres;
  moviesService: MoviesService;
  submitted: boolean;
  router: Router;

  constructor(moviesService: MoviesService, router: Router) {
    this.moviesService = moviesService;
    this.submitted = false;
    this.router = router;
    this.moviesService.hideMsgFn();
  }

  ngOnInit() {
    this.createForm = new FormGroup({
      name: new FormControl('', Validators.required),
      director: new FormControl('', Validators.required),
      year: new FormControl(undefined, Validators.required),
      genre: new FormControl(0, Validators.required),
      note: new FormControl(''),
    });
  }

  // check if movie data has duplicated name
  check(): boolean {
    if (this.moviesService.movies.map(value => value.name).includes(this.createForm.value.name)) {
      this.moviesService.showMsgFn("white", "red", "Movie name is already in movie list! Please change another movie.");
      return false;
    }
    return true;
  }

  // add movie
  onSubmit(): void {
    if (this.check()) {
      this.moviesService.addMovie(this.createForm.value);
      this.router.navigate(['/']);
    }
  }
}
