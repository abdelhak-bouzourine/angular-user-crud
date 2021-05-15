import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home',
      home: true
    },
    {
      title: 'Users',
      icon: 'people-outline',
      link: '/users'
    }
  ];

  constructor(private readonly sidebarService: NbSidebarService) {
  }

  ngOnInit(): void {
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }

}
