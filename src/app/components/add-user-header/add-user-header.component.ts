import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-user-header',
  templateUrl: './add-user-header.component.html',
  styleUrls: ['./add-user-header.component.scss']
})
export class AddUserHeaderComponent implements OnInit {
  title: string = 'Manage Users';
  showAddUser!: boolean;
  subscription!: Subscription;

  constructor(private uiServise:UiService, private router: Router) {
    this.subscription = this.uiServise.onToggle().subscribe((value) => (this.showAddUser = value));
  }

  ngOnInit(): void {
  }

  toggleAddUser(){
    this.uiServise.toggleAddUser();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }
}
