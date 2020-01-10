import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
quotes:Quote[]=[
  new Quote(1,'Be yourself;everyone else is already taken','Marlin Manroe', new Date(2019, 5, 5)
]
  constructor() { }

  ngOnInit() {
  }

}
