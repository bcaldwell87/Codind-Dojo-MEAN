import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from './author.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('/authors');
  }

  addAuthor(newAuthor) {
    return this.http.post('/authors/new', newAuthor);
  }

  getAuthor(authorID): Observable<Author[]> {
    return this.http.get<Author[]>('/' + authorID);
  }

  updateAuthor(editAuthor: Author): Observable<Author> {
    return this.http.put<Author>(`/update/${editAuthor._id}`, editAuthor);
  }

  deleteAuthor(authorID: string): Observable<Author> {
    console.log('deleting' + authorID);
    return this.http.delete<Author>(`/remove/${authorID}`);
  }
}
