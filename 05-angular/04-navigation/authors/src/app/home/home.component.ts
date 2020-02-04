import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Author } from '../author.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  authors: Author[] = [];
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getAuthorsFromService();
  }

  getAuthorsFromService() {
    this.httpService.getAuthors().subscribe(data => {
      console.log('list of authors!', data);
      this.authors = data;
    });
  }

  deleteAuthor(author: Author) {
    this.httpService.deleteAuthor(author._id).subscribe(data => {
      this.authors = this.authors.filter(
        currentAuthor => currentAuthor._id !== data._id
      );
    });
  }
}
