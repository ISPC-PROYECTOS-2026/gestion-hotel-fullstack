import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { QuienesSomos } from './pages/quienes-somos/quienes-somos';
import { Registro } from './pages/registro/registro';
import { NotFound } from './pages/not-found/not-found';
import { Reservar } from './pages/dashboard/reservar/reservar';
import { MisReservas } from './pages/dashboard/mis-reservas/mis-reservas';
import { Cancelar } from './pages/dashboard/cancelar/cancelar';
import { HabitacionesDisponibles } from './pages/habitaciones-disponibles/habitaciones-disponibles';
import { ConfirmarReserva } from './pages/confirmar-reserva/confirmar-reserva';

export const routes: Routes = [
    {path:"", redirectTo:"/home", pathMatch:"full"},
    {path:"home", component:Home},
    {path:"dashboard", component:Dashboard, children:[
        {path: "", redirectTo:"reservar", pathMatch:"full"},
        {path: "reservar", component: Reservar},
        {path: "mis-reservas", component: MisReservas},
        {path: "cancelar", component: Cancelar}
    ]},
    {path:"login", component:Login},
    {path:"registro", component:Registro},
    {path:"quienes-somos", component:QuienesSomos},
    {path:"habitaciones-disponibles", component: HabitacionesDisponibles},
    {path:"confirmar-reserva", component: ConfirmarReserva},
    {path: "**", component:NotFound}
];
