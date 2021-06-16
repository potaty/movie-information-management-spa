import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {movies, Movie, genres} from '../../movie';
import {MoviesService} from '../service/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'notfound-page',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotFoundComponent {
}
