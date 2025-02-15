import { Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { loginRoutes } from './login/login.routes';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
    /*{
        path: 'login',
        component: LoginPageComponent,
        data: {
            test: 'HALLO'
        }
    },*/
    {
        path: 'login',
        loadChildren: () => import('./login/login.routes').then(m => m.loginRoutes)
    },
    {
        path: 'account',
        title: 'Account',
        component: AccountComponent,
    },
    /*{
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
    }*/
];
