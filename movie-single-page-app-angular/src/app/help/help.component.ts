import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {movies, Movie, genres} from '../../movie';
import {MoviesService} from '../service/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'help-page',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
}
