import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { loginRoutes } from '../login.routes';

export interface MenuItem {
  url: string;
  title: string;
}

@Component({
  selector: 'app-login-shell',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './login-shell.component.html',
  styleUrl: './login-shell.component.scss'
})
export class LoginShellComponent {

  protected readonly menuItems: MenuItem[] = (loginRoutes.at(0)?.children ?? []).reduce((acc, child) => {
    if (child.redirectTo) {
      return acc;
    }

    if (!child.path || !child.title) {
      throw new Error('Path and title must be defined!');
    }

    if (typeof child.title !== 'string') {
      throw new Error('Title must be of type string!');
    }
  
    return acc.concat({ url: child.path, title: child.title });
  }, [] as MenuItem[]);

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {
      this.route.data.subscribe(v => {
        console.log('LoginShellComponent', v);
      });

      /*this.router.events.pipe(
        filter(e => e instanceof NavigationEnd)
      ).subscribe(v => {
        console.log('LoginShellComponent', v);
      });

      console.log(this.router.config);*/
    }
}
