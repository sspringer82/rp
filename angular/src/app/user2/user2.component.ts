import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css'],
})
export class User2Component implements OnInit {
  public users: Observable<User[]>;

  constructor(private userService: UserService) {
    this.users = userService.items;
  }

  ngOnInit() {
    this.userService.load();
    setTimeout(() => {
      this.userService.add({ id: 3, name: 'Basti' });
    }, 5000);
  }
}
