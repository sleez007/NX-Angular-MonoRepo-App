import { Component, OnInit } from '@angular/core';
import { UserService } from '@sample-pro/auth';
import { User } from '@sample-pro/data-models';
import { Observable } from 'rxjs';

@Component({
  selector: 'sample-pro-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$!: Observable<User | null>;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user$ = this.userService.user$;
  }
}
