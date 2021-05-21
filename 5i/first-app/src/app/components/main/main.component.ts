import { Component, NgModule, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [MatButtonModule],
  exports: [MatButtonModule],
})
export class AppModule {}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  dataBaseString: string = 'http://localhost:3000/hotel';
  html: string = '';
  isClicked=false;
  brojac: number = 0;
  commentButton="New commnet"
  hotels: Hotel[];

  constructor() {
    this.hotels = [];
    fetch(this.dataBaseString)
      .then((response) => response.json())
      .then((x) => (this.hotels = x));
  }

  up() {
    this.hotels.length - 1 > this.brojac ? this.brojac++
      : console.log('gornja grnica');
  }
  down() {
    this.brojac <= 0 ? console.log('donja granica') : this.brojac--;
  }

  ngOnInit(): void {}
}
