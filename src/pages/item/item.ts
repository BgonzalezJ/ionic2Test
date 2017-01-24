import { Component } from '@angular/core';

import { NavController, NavParams  } from 'ionic-angular';

@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {

  item = {k: "", v: ""}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);
    this.item = navParams.data.item;
  }

}
