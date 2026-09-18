import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { QuienesSomos } from './pages/quienes-somos/quienes-somos';
import { Registro } from './pages/registro/registro';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {path:"", redirectTo:"/home", pathMatch:"full"},
    {path:"home", component:Home},
    {path:"dashboard", component:Dashboard},
    {path:"login", component:Login},
    {path:"registro", component:Registro},
    {path:"quienes-somos", component:QuienesSomos},
    {path: "**", component:NotFound}
];
