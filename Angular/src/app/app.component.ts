import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import config from 'devextreme/core/config';
import { FloatingActionButtonConfig, NotificationOptions } from './app.types';

import { DxSpeedDialActionModule } from 'devextreme-angular/ui/speed-dial-action';

@Component({
    selector: 'app-root',
    imports: [DxSpeedDialActionModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    const fabConfig: FloatingActionButtonConfig = {
      icon: 'share',
      position: {
        my: 'right bottom',
        at: 'right bottom',
        of: '#app-container',
        offset: '-16 -16',
      },
    };

    config({
      floatingActionButtonConfig: fabConfig,
    });
  }

  showNotification(message: string): void {
    const notificationOptions: NotificationOptions = {
      message,
      position: {
        my: 'left bottom',
        at: 'left bottom',
        of: '#app-container',
        offset: '16 -16',
      },
      minWidth: null,
      width: 320 * 0.7,
    };

    notify(notificationOptions, 'info', 1000);
  }
}
