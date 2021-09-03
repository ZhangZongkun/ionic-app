import { Component } from '@angular/core';
import { doPost } from '../common/http-request';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  content = '';

  constructor() {}

  ionViewWillEnter() {
    doPost().then((res) => {
      this.content = res.data;
    });
  }
}
