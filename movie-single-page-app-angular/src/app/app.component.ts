import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {movies} from '../movie';
import { MoviesService } from './service/movies.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies = movies;
  displayedColumns: string[] = ['name', 'director', 'year', 'note'];
  showMsg: boolean;
  moviesService: MoviesService;

  constructor(moviesService: MoviesService) {
    this.moviesService = moviesService;
    this.showMsg = moviesService.showMsg;
  }
}
