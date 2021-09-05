import { Component } from '@angular/core';
import { EchoPlugin } from './plugins/EchoPlugin';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    EchoPlugin.NativeMethod({action: 'hello', value: 'good'}).then((res) => {
      console.log('EchoPlugin, got message');
      console.log(res);
    });
  }
}
