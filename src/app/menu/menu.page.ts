import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  paths = [
    { name: 'Home', url: 'list', icon: 'home-outline' },
    { name: 'Settings', url: 'settings', icon: 'settings-outline' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
