import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { Boock } from '../boock';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any;

  constructor(private bookServise: BookService, private router: Router) { }

  ngOnInit() {
    this.getBookList();
  }

  getBookList() {
    this.bookServise.getAllBooks().subscribe((res) => {
      this.books = res;
      // console.log(this.books);
    }, (err) => {
      console.log(err);
    });
  }

  deleteBook(id) {
    this.bookServise.deleteBook(id).subscribe((result) => {
      this.router.navigate(['/books']);
    }, (err) => {
      console.log(err);
    });
  }
}
