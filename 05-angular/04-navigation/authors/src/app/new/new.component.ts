import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  newAuthor: {};
  constructor(private httpservice: HttpService, private router: Router) {}

  ngOnInit() {
    this.newAuthor = { name: '' };
  }

  addAuthor() {
    this.httpservice.addAuthor(this.newAuthor).subscribe(data => {
      console.log('yeehaw! that shit worked!', data);
      this.router.navigate(['/']);
    });
  }
}
