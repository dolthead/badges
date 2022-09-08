import { Component } from '@angular/core';
import { Badge } from '@awesome-cordova-plugins/badge/ngx';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  badgeCount = 3;

  constructor(private badge: Badge, private notifications: LocalNotifications) {}

  async setBadgeCount(count?: number) {
    if (typeof count === 'number') {
      this.badgeCount = count < 0 ? 0 : count;
    }
    this.badge.set(this.badgeCount);
    if (this.badgeCount === 0) {
      this.badge.clear();
    }

    const evt = new CustomEvent('badgeCount', { detail: this.badgeCount });
    window.dispatchEvent(evt);
  }

  notifyNow() {
    this.notifications.schedule({
      id: 1,
      title: 'Test Notification',
      text: 'This is an immediate test notification',
      foreground: true,
    });
  }

  notifyLater() {
    const later = new Date();
    later.setSeconds(later.getSeconds() + 5);
    this.notifications.schedule({
      id: 2,
      title: 'Test Notification 2',
      text: 'This is a test notification in the future',
      foreground: true,
      trigger: { at: later },
    });
    setTimeout(() => {
      this.notifications.clearAll();
    }, 20000);
  }
}
