import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Output() onDeleteUser: EventEmitter<User> = new EventEmitter();
  @Input() user!: User;

  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(user: User){
    this.onDeleteUser.emit();
  }

}
