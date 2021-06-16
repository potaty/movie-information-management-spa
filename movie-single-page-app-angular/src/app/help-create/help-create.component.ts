import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { movies, Movie, genres } from '../../movie';
import { MoviesService } from '../service/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'help-create-page',
  templateUrl: './help-create.component.html',
  styleUrls: ['./help-create.component.css']
})
export class HelpCreateComponent {
}
