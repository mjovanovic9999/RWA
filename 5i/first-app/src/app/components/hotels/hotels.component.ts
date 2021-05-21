import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import {
  faMeh,
  faFrown,
  faSmile,
  IconDefinition,
  faThumbsUp,
  faThumbsDown,
} from '@fortawesome/free-regular-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {
  iconPrice: IconDefinition = faThumbsDown;
  iconRate: IconDefinition = faThumbsDown;
  iconDownVote = faThumbsDown;
  iconUpVote = faThumbsUp;
  numberDownVote: number = 0;
  numberUpVote: number = 0;
  commentData: string = '';

  _hotelData = {
    id: 0,
    name: '',
    photo: '',
    description: '',
    price: 0,
    rate: 0,
    comment: [
      {
        username: '',
        comm: '',
        vote: 0,
      },
    ],
  };

  @Input()
  get hotelData(): Hotel {
    return this._hotelData;
  }

  set hotelData(newH: Hotel) {
    this._hotelData = newH;
    this.onUpdate();
  }

  onUpdate() {
    this.numberUpVote = this.hotelData.comment.reduce(
      (acc, cur) => (acc += cur.vote == 1 ? 1 : 0),
      0
    );
    this.numberDownVote = this.hotelData.comment.reduce(
      (acc, cur) => (acc += cur.vote == -1 ? 1 : 0),
      0
    );

    this.rateIcon();

    this.priceIcon();

    this.commentData = this.commentString();
  }

  rateIcon() {
    if (this.hotelData.rate < 3.3) this.iconRate = faFrown;
    else if (this.hotelData.rate < 6.7) this.iconRate = faMeh;
    else this.iconRate = faSmile;
  }

  priceIcon() {
    if (this.hotelData.price < 3.3) this.iconPrice = faSmile;
    else if (this.hotelData.price < 6.7) this.iconPrice = faMeh;
    else this.iconPrice = faFrown;
  }

  commentString(): string {
    return this.hotelData.comment.reduce(
      (acc, cur) => acc + cur.username + ' - ' + cur.comm + '\n',
      'Comments:\n\n'
    );
  }

  constructor() {
    this.hotelData = {
      id: 0,
      name: '',
      photo: '',
      description: '',
      price: 0,
      rate: 0,
      comment: [
        {
          username: '',
          comm: '',
          vote: 0,
        },
      ],
    };
  }

  ngOnInit(): void {}
}
