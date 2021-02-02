import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quotes: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  // Emiting events
  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  // adding upvotes and downvotes
  upVotes: number = 0;
  downVotes: number = 0;

  likeButtonClick() {
    this.upVotes++;
  }

  dislikeButtonClick() {
    this.downVotes++;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
