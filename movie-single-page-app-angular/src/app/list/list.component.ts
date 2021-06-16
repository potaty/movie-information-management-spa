import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { movies, Movie, genres } from '../../movie';
import { MoviesService } from '../service/movies.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'list-page',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  title = 'movie';
  movies: Movie[];
  genres: string[] = genres;
  router: Router;
  moviesService: MoviesService;
  displayedColumns: string[] = ['', 'name', 'director', 'year', 'note', 'op'];
  dataSource = new MatTableDataSource(movies);

  constructor(moviesService: MoviesService, router: Router, public dialog: MatDialog) {
    this.moviesService = moviesService;
    this.router = router;
    this.movies = this.moviesService.movies;
  }

  ngOnInit() {
    this.movies = this.moviesService.movies;
  }

  // open confirm
  openDialog(index: number) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteIthMovie(index);
      }
    });
  }


  // save index for update movie information
  recordIthMovie(index: number): void {
    this.moviesService.hideMsgFn();
    this.moviesService.recordIthMovie(index);
    this.router.navigate(['/modify-movie']);
  }

  // delete movie by index
  deleteIthMovie(index: number): void {
    this.moviesService.hideMsgFn();
    this.moviesService.deleteIthMovie(index);
    this.movies = this.moviesService.movies;
  }
  // get search input value
  onKey(event: KeyboardEvent) {
    this.moviesService.search((event.target as HTMLInputElement).value);
  }

}


@Component({
  selector: 'dialog-selector',
  templateUrl: './dialog.html',
})
export class DialogComponent { }
