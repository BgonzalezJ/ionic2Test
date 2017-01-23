import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController) {
    
  }

  data = [
  	{k: 0, v: 'value 0'},
  	{k: 1, v: 'value 1'},
  	{k: 2, v: 'value 2'},
  	{k: 3, v: 'value 3'},
  	{k: 4, v: 'value 4'},
  	{k: 5, v: 'value 5'}
  ]

}
