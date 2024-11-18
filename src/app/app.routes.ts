import { Routes } from '@angular/router';
import { MyRouteComponent } from './my-route/my-route.component';
import { AppComponent } from './app.component';

export const routes: Routes = [

    {
        path:"app-my-route",
        component:MyRouteComponent
    }
    ,
    {
        path:"app-root",
        component:AppComponent
    }
];
