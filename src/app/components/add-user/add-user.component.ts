import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  title: string = 'Task traker';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiServise:UiService, private router: Router) {
    this.subscription = this.uiServise.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiServise.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }


}
