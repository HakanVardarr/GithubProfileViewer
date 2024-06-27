import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { APIResponse } from 'src/app/models/APIResponse';
import { User } from 'src/app/models/User';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public users: Array<User> = [];

  constructor(
    private gitService: GitService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['username']) {
        let username = decodeURIComponent(params['username']);

        this.gitService
          .searchUser(username)
          .subscribe((userList: APIResponse<User>) => {
            this.users = userList.items;
          });
      }
    });
  }

  redirectToProfile(username: string): void {
    console.log(this.users.find((user) => user.login == username));
  }
}
