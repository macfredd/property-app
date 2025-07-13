import { Component, Input } from '@angular/core';
import { IRating } from '../../shared/interfaces/rating.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-rating-list',
  imports: [DatePipe],
  templateUrl: './rating-list.html',
  styleUrl: './rating-list.css'
})
export class RatingList {

  @Input() ratings: IRating[] = [];

}
