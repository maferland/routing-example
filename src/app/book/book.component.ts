import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnDestroy {

  public book;

  private subscription: Subscription;
  private books = {
    1: 'Harry Potter',
    2: 'Games of Thrones',
    3: 'Garfield',
    10: 'Tintin'
  };

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const id = params['id'];
      this.book = this.books[id];

      if (this.book) { return; }

      // IF BOOK NOT FOUND GO TO HOME
      this.router.navigate(['']);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
