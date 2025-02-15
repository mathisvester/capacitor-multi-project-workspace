import { Route } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";
import { LoginShellComponent } from "./login-shell/login-shell.component";
import { LogoutPageComponent } from "./logout-page/logout-page.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

export const loginRoutes: Route[] = [
    {
        path: '',
        component: LoginShellComponent,
        title: 'Login Shell',
        children: [
            {
                path: 'login-page',
                component: LoginPageComponent,
                title: 'Login',
                data: {
                    appendParentTitle: true
                }
            },
            {
                path: 'logout-page',
                component: LogoutPageComponent,
                title: 'Logout',
                data: {
                    appendParentTitle: true
                }
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent,
                title: 'Forgot password',
                data: {
                    appendParentTitle: true
                }
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login-page'
            }
        ]
    }
    /*{
        path: '',
        component: LoginPageComponent,
        data: {
            test: 'HALLO'
        }
    }*/
];