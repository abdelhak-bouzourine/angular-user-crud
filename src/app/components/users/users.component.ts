import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import {UserService} from '../../services/user.service'
import {User} from '../../User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
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

  users: User[] = [];

  constructor(private readonly sidebarService: NbSidebarService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => this.users = users)
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }


  deleteUser(user: User){
    this.userService.deleteUser(user).subscribe((users) => this.users = this.users.filter(u => u.id !== user.id))
  }

  /**
   toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.userService.updateTaskReminder(task).subscribe();
  }
   */


  addUser(user: User){
    this.userService.addUser(user).subscribe((user) => this.users.push(user))
  }

}
