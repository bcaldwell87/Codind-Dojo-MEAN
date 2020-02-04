import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Author } from '../author.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  editAuthor: any;

  constructor(
    private httpservice: HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.editAuthor = { _id: '', name: '' };
    this.route.params.subscribe((params: Params) => {
      this.editAuthor = this.onEdit(params['id']);
    });
  }

  onEdit(authorID) {
    this.httpservice.getAuthor(authorID).subscribe(data => {
      this.editAuthor = data;
      console.log('selecting: ', data);
    });
  }

  editThisAuthor(editAuthor: Author) {
    console.log('Selecting da author' + editAuthor);
    const observable = this.httpservice.updateAuthor(editAuthor);
    observable.subscribe(data => {
      console.log(data);
      this.router.navigate(['/']);
    });
  }
}
