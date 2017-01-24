import { Component } from '@angular/core';

import { NavController} from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
    
  }

  value={
  	username: "",
  	password: ""
  }

  submit() {
  	this.navCtrl.push(HomePage);
  	/*if (this.value.username == "bastian@gonzalez.com" &&
		this.value.password == "123456") {
		console.log('success');
		this.navCtrl.push(HomePage);
	} else {
		console.log('failed');
	}*/
  }

}
