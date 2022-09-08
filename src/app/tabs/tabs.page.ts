import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  badgeCount = 3;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('badgeCount', (e: Event) =>  {
      this.badgeCount = e['detail'];
      // this.badge.set(this.tabCount);
    });
    // this.badge.set(this.tabCount);
  }

}
