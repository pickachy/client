import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-page-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent implements OnInit{
  @Input() rating: number = 0;
  ratingValue: number = 0;

  ngOnInit(): void {
    this.ratingValue = Math.floor(this.rating);
  }


}
