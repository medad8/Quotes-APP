import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {



  // updating output binding property
  quotes: Quote[] = [
    new Quote(1, 'Time Quote', '"Time is the wisest counselor of all."','Pericles', 'medad orowe', new Date(2019, 7, 27)),
    new Quote(2, 'Friendship Quote', '“Friendship is the only cement that will ever hold the world together.”', 'Woodrow T. Wilson', 'ken joe', new Date(2020, 10, 10))
  ];

  // click event binding
  toggleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

    // make the event active
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }  

  // adding a new quote
  addNewQuote(Quote){
    let quoteLength = this.quotes.length;
    Quote.id = quoteLength+1;
    Quote.completeDate = new Date(Quote.completeDate);
    this.quotes.push(Quote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}