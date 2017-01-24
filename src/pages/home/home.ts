import { Component } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController } from 'ionic-angular';
import { ItemPage } from '../item/item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies : any;

  constructor(public navCtrl: NavController, public http: Http) {
    let url = "https://www.reddit.com/r/gifs/new/.json?limit=10";
    this.http.get(url)
    .map(res => res.json())
    .subscribe(data => {
      this.movies = data.data.children;
      console.log(data);
    })
  }

  data = [
  	{k: 0, v: 'value 0'},
  	{k: 1, v: 'value 1'},
  	{k: 2, v: 'value 2'},
  	{k: 3, v: 'value 3'},
  	{k: 4, v: 'value 4'},
  	{k: 5, v: 'value 5'}
  ]

  goItem(i) {
    this.navCtrl.push(ItemPage, {
      item: this.data[i]
    });
  }

}
