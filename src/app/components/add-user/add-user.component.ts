import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @Output() onAddUser: EventEmitter<User> = new EventEmitter();
  name!: string;
  birthdate!: string;
  sexe!: string;
  image!: string;
  showAddUser!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddUser = value));
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.name){
      alert('add name');
      return;
    }

    const newUser = {
      name: this.name,
      birthdate: this.birthdate,
      sexe: this.sexe,
      image: this.image,
    }

    this.onAddUser.emit(newUser);

    this.name = '';
    this.birthdate = '';
    this.sexe = '';
    this.image = '';
  }


}
