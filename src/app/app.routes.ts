 import { Routes } from '@angular/router';
import { PublicTemplate } from './+Pages/+Public/public-template/public-template';
import { PrivateTemplate } from './+Pages/+Private/private-template/private-template';
import { HomePage } from './+Pages/+Public/home-page/home-page';
import { AboutPage } from './+Pages/+Public/about-page/about-page';
import { ProductsPage } from './+Pages/+Public/products-page/products-page';
import * as PrivatPages from './+Pages/+Private/products-page/products-page';
import { ContactPage } from './+Pages/+Public/contact-page/contact-page';
import { LoginPage } from './+Pages/+Public/login-page/login-page';
import { Component } from '@angular/core';
import { DashboardPage } from './+Pages/+Private/dashboard-page/dashboard-page';
import { UsersPage } from './+Pages/+Private/users-page/users-page';
import { OrdersPage } from './+Pages/+Private/orders-page/orders-page';

export const routes: Routes = [
    {path:'public',component:PublicTemplate,children:[
        {path:'home',component:HomePage},
        {path:'about',component:AboutPage},
        {path:'products',component:ProductsPage},
        {path:'contact',component:ContactPage},
        {path:'login',component:LoginPage},
        {path:'',redirectTo:'home',pathMatch:'prefix'},
        {path:'**',redirectTo:'home'},
]},

    {path:'private',component:PrivateTemplate,children:[
        {path:'dashboard',component:DashboardPage},
        {path:'users',component:UsersPage},
        {path:'products',component:PrivatPages.ProductsPage},
        {path:'orders',component:OrdersPage},
        {path:'',redirectTo:'dashboard',pathMatch:'prefix'},
        {path:'**',redirectTo:'dashboard'},
    ]},
    {path:'',redirectTo:'public',pathMatch:'full'},
    {path:'**',redirectTo:'public'},
];
