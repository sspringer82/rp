import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public users: Observable<User[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.users = (this.http.get('/users') as Observable<User[]>).pipe(
      map((u: User[]) => u.filter(item => item.id > 1)),
    );
  }
}
