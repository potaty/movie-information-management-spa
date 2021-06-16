
/* Genre of movie */
export enum Genre {
  Comedy = 1,
  Horror,
  Action,
  Drama,
  Thriller,
  Romantic,
}

/* Genre name of movie */
export const genres = [
  "",
  "Comedy",
  "Horror",
  "Action",
  "Drama",
  "Thriller",
  "Romantic",
];

/* Movie object structure */
export class Movie {
  name: string;
  director: string;
  year: number;
  genre: Genre;
  note?: string;
  constructor(
    name: string,
    director: string,
    year: number,
    genre: number,
    note?: string
  ) {
    this.name = name;
    this.director = director;
    this.year = year;
    this.genre = genre;
    this.note = note;
  }
}



// movie instances
let movie1: Movie = new Movie(
  "Fight Club",
  "David Finch",
  1999,
  Genre.Action,
  "Fight club is a film created by Hollywood's famous director David finch in 1999."
);
let movie2: Movie = new Movie(
  "Gold escort",
  "Sergio Leone",
  1966,
  Genre.Action,
  "It was a comedy with violence as its carrier."
);
let movie3: Movie = new Movie(
  "Roman Holiday",
  "William Wyler",
  1953,
  Genre.Romantic,
  "He story tells a romantic story between a princess and a reporter in Rome, Italy, in a day. "
);
let movie4: Movie = new Movie(
  "Three fools make a big fuss in Bollywood",
  "Rajkumar Hirani",
  2011,
  Genre.Comedy,
  "Lanche is a different college student, who breaks the traditional education concept of the college with wisdom."
);
let movie5: Movie = new Movie(
  "Quiet Place",
  "John kalasinsky",
  2018,
  Genre.Thriller,
  "Keeping quiet is the only rule of life. They can't hear you, they can't chase you."
);
let movie6: Movie = new Movie(
  "Insidious: The Last Key",
  "Adam robittle",
  2018,
  Genre.Horror,
  "Fear is the only way home?"
);
let movie7: Movie = new Movie(
  "Teddy bear",
  "Seth MacFarlane",
  2012,
  Genre.Comedy,
  "No, I look like a cuddly bear"
);
let movie8: Movie = new Movie(
  "Son of the weather",
  "Xinhaicheng",
  2019,
  Genre.Romantic,
  "It's starting to clear up now!"
);
let movie9: Movie = new Movie(
  "Fireworks",
  "Xinhaicheng",
  2017,
  Genre.Romantic,
  "Fireworks rising, looking from below? Or from the side?"
);
let movie10: Movie = new Movie(
  "Joker",
  "Todd Phillips",
  2019,
  Genre.Action,
  "People who are more lucky than them."
);
export let movies: Movie[] = [
  movie1,
  movie2,
  movie3,
  movie4,
  movie5,
  movie6,
  movie7,
  movie8,
  movie9,
  movie10,
];

// searchWord === '' => not searching
// searchWord !== '' => searching
let searchWord: string = "";
let editing: boolean = false;
let movieData: Movie[];
let deleteRowId: string = "";

// save data into localStorage
const localStorageSave = () => {
  localStorage.setItem("movie", JSON.stringify(movieData));
}
if (localStorage.getItem("movie")) {
  movieData = JSON.parse(localStorage.getItem("movie"));
} else {
  movieData = movies;
  localStorageSave();
}

// save movie into movies data, and save into localstorage
const saveMovie = (rowId: string, movie: Movie) => {
  movieData[parseInt(rowId)] = movie;
  localStorageSave();
  (document.getElementById("modifysuccess") as any).showModal();
  setTimeout(() => { (document.getElementById("modifysuccess") as any).close(); }, 1000);
}

// add movie into movies data
const addMovie = (movie: Movie) => {
  movieData.push(movie);
  localStorageSave();
  (document.getElementById("addsuccess") as any).showModal();
  setTimeout(() => { (document.getElementById("addsuccess") as any).close(); }, 1000);
}

// submit new movie
const submit = () => {
  // get json from form
  var data = $('form').serializeArray().reduce(function (obj: any, item: any) {
    // genre type is number.
    if (item.name === "genre") {
      obj[item.name] = parseInt(item.value);
    } else {
      obj[item.name] = item.value;
    }
    return obj;
  }, {});
  // whether duplicate name
  if (movieData.map(value => value.name).filter(value => value === data.name).length !== 0) {
    (document.getElementById("duplicate") as any).showModal();
    setTimeout(() => { (document.getElementById("duplicate") as any).close(); }, 1000);
  } else {
    // add into movies data
    addMovie(data);
    load();
  }
}

// delete from movies data
const deleteMovie = () => {
  const rowNumber = parseInt(deleteRowId);
  if (rowNumber < 0 || rowNumber >= movieData.length) {
    alert("Please refresh the page");
  }
  movieData = movieData.filter((_: Movie, index: number) =>
    index != rowNumber
  );
  load();
  localStorageSave();

  (document.getElementById("deletesuccess") as any).showModal();
  setTimeout(() => { (document.getElementById("deletesuccess") as any).close(); }, 1000);
}

// use load() when movie data changed
// it will reload the movie list
const load = () => {
  let tableHTML: string = "";
  tableHTML += '<table class="table table-hover">';
  tableHTML += "<thead>";
  tableHTML += "<tr>";
  tableHTML += "<th>Name</th>";
  tableHTML += "<th>Director</th>";
  tableHTML += "<th>Year</th>";
  tableHTML += "<th>Note</th>";
  tableHTML += "<th>Genre</th>";
  tableHTML += "<th>Action</th>";
  tableHTML += "</tr>";
  tableHTML += "</thead>";
  tableHTML += "<tbody>";

  $.each(movieData, (index: number, val: any) => {
    const rowId = index;
    if (searchWord !== "") {
      tableHTML += '<tr rowId="' + rowId + '" ' +
        (val["name"].toLowerCase().includes(searchWord.toLowerCase()) ? '' : 'style="display: none"') + ' > ';
    } else {
      tableHTML += '<tr rowId="' + rowId + '" > ';
    }
    tableHTML +=
      '<td ><div class="row_data" edit_type="click" columnName="name">' +
      val["name"] +
      "</div></td>";
    tableHTML +=
      '<td ><div class="row_data" edit_type="click" columnName="director">' +
      val["director"] +
      "</div></td>";
    tableHTML +=
      '<td ><div class="row_data" edit_type="click" columnName="year">' +
      val["year"] +
      "</div></td>";
    tableHTML +=
      '<td ><div class="row_data" edit_type="click" columnName="note">' +
      val["note"] +
      "</div></td>";
    tableHTML +=
      '<td >' +
      '<select class="row_data" edit_type="click" columnName="genre" disabled>' +
      '<option value="1" ' + (val["genre"] === 1 ? 'selected' : '') + '>Comedy</option>' +
      '<option value="2" ' + (val["genre"] === 2 ? 'selected' : '') + '>Horror</option>' +
      '<option value="3" ' + (val["genre"] === 3 ? 'selected' : '') + '>Action</option>' +
      '<option value="4" ' + (val["genre"] === 4 ? 'selected' : '') + '>Drama </option>' +
      '<option value="5" ' + (val["genre"] === 5 ? 'selected' : '') + '>Thriller </option>' +
      '<option value="6" ' + (val["genre"] === 6 ? 'selected' : '') + '>Romantic</option>' +
      '</select>' +
      "</td>";
    tableHTML += "<td>";
    tableHTML +=
      '<span class="btn-edit" > <a href="#" class="btn btn-link " rowId="' +
      rowId +
      '" > Edit</a> </span>';
    tableHTML +=
      '<span> <a href="#delete_modal" class="btn btn-link btn-save-delete" data-toggle="modal" rowId="' +
      rowId +
      '" > Delete</a> </span>';
    tableHTML +=
      '<span class="btn-save"> <a href="#" class="btn btn-link"  rowId="' +
      rowId +
      '"> Save</a> | </span>';
    tableHTML +=
      '<span class="btn-cancel"> <a href="#" class="btn btn-link" rowId="' +
      rowId +
      '"> Cancel</a> | </span>';
    tableHTML += "</td>";
    tableHTML += "</tr>";
  });
  tableHTML += "</tbody>";
  tableHTML += "</table>";
  $(document).find(".tbl_movie_data").html(tableHTML);
  $(document).find(".btn-save").hide();
  $(document).find(".btn-cancel").hide();
}

function submitted(event: Event) {
  // do not jump to head
  event.preventDefault();
  submit();
}

$(document).ready(function ($: JQueryStatic) {
  load();
  let form: any = document.querySelector("form");
  form.onsubmit = submitted.bind(form);

  $(document).on("focusout", ".row_data", function (event) {
    event.preventDefault();

    if ($(this).attr("edit_type") == "button") {
      return false;
    }
    let rowId: string | undefined = $(this).closest("tr").attr("rowId");
    let row_div = $(this).removeClass("bg-warning").css("padding", "");
    let columnName: any = row_div.attr("columnName");
    let columnValue = row_div.html();
    let movie: any = {};
    movie[columnName] = columnValue;
    $.extend(movie, { rowId: rowId });
  });


  // Edit
  $(document).on("click", ".btn-edit", function (event) {
    event.preventDefault();
    editing = true;
    let tableRow = $(this).closest("tr");

    let rowId = tableRow.attr("rowId");

    tableRow.find(".btn-save").show();
    tableRow.find(".btn-cancel").show();

    tableRow.find(".btn-edit").hide();
    tableRow.find(".btn-save-delete").hide();

    tableRow
      .find(".row_data")
      .attr("contenteditable", "plaintext-only")
      .attr("edit_type", "button")
      .addClass("bg-warning")
      .css("padding", "3px");

    tableRow.find("select")
      .removeAttr("disabled");

    tableRow.find(".row_data").each(function (index, val) {
      $(this).attr("original_entry", $(this).html());
    });

  });

  // Cancel
  $(document).on("click", ".btn-cancel", function (event) {
    event.preventDefault();

    let tableRow = $(this).closest("tr");

    let rowId = tableRow.attr("rowId");

    tableRow.find(".btn-save").hide();
    tableRow.find(".btn-cancel").hide();

    tableRow.find(".btn-edit").show();
    tableRow.find(".btn-save-delete").show();

    tableRow
      .find(".row_data")
      .attr("edit_type", "click")
      .removeClass("bg-warning")
      .css("padding", "");

    tableRow.find(".row_data").each(function (index, val) {
      $(this).html($(this).attr("original_entry"));
    });
  });

  // Save
  $(document).on("click", ".btn-save", function (event) {
    event.preventDefault();
    let tableRow = $(this).closest("tr");
    let rowId = tableRow.attr("rowId");
    tableRow.find(".btn-save").hide();
    tableRow.find(".btn-cancel").hide();
    tableRow.find(".btn-edit").show();
    tableRow.find(".btn-save-delete").show();

    tableRow
      .find(".row_data")
      .attr("edit_type", "click")
      .removeClass("bg-warning")
      .css("padding", "");
    tableRow.find("select")
      .attr("disabled");

    let movie: Movie | any = {};
    // get all editable data
    tableRow.find(".row_data").each(function (index, val) {
      let columnName = $(this).attr("columnName");
      let columnValue = $(this).html();
      if (columnName !== "genre")
        movie[columnName] = columnValue;
      else {
        movie[columnName] = parseInt(tableRow.find(".row_data").children("option:selected").val() as string);
      }
    });

    // year check
    movie.name = movie.name.trim();
    if (isNaN(movie.year)) {
      (document.getElementById("yearfailed") as any).showModal();
      load();
      setTimeout(() => { (document.getElementById("yearfailed") as any).close(); }, 1000);
      return;
    }

    // name check
    if ((movieData.filter((_: Movie, index: number) => { return index !== parseInt(rowId) }).map(value => value.name) as any).includes(movie.name)) {
      (document.getElementById("nameduplicate") as any).showModal();
      load();
      setTimeout(() => { (document.getElementById("nameduplicate") as any).close(); }, 1000);
      return;
    }

    // empty check
    if (movie.name.length === 0 || movie.year.length === 0 || movie.director.length === 0) {
      (document.getElementById("emptystring") as any).showModal();
      load();
      setTimeout(() => { (document.getElementById("emptystring") as any).close(); }, 1000);
      return;
    }

    $.extend(movie, { rowId: rowId });
    saveMovie(rowId, movie);
    editing = false;
    load();
  });

  // Delete
  $(document).on("click", ".btn-delete", function (event) {
    event.preventDefault();
    let tableRow = $(this).closest("tr");
    let rowId = tableRow.attr("rowId");
    tableRow.hide();
    let movie: Movie | any = {};
    tableRow.find(".row_data").each(function (index, val) {
      let columnName = $(this).attr("columnName");
      let columnValue = $(this).html();
      movie[columnName] = columnValue;
    });
    deleteMovie();
    load();
  });

  // save the deleting row number
  $(document).on("click", ".btn-save-delete", function (event) {
    event.preventDefault();
    let tableRow = $(this).closest("tr");
    let rowId = tableRow.attr("rowId");
    deleteRowId = rowId;
  });

  $("#search").keyup(function (e: any) {
    searchWord = e.target.value;
    load();
  });

});
