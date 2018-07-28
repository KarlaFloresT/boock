import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Boock } from './boock';

import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Boock[]> {
    return this.http.get<Boock[]>('/book');
  }

  showBook(id): Observable<Boock[]> {
    return this.http.get<Boock[]>('/book/' + id);
  }

  saveBook(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/book', data)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateBook(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/book/' + id, data)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteBook(id): Observable<Boock[]> {
    return this.http.delete<Boock[]>('/book/' + id);
  }

}
