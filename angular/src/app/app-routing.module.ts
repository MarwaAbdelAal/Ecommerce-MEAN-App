import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddproductComponent } from './pages/product/addproduct/addproduct.component';
import { AllproductsComponent } from './pages/product/allproducts/allproducts.component';
import { DeleteproductComponent } from './pages/product/deleteproduct/deleteproduct.component';
import { EditproductComponent } from './pages/product/editproduct/editproduct.component';
import { MyproductsComponent } from './pages/product/myproducts/myproducts.component';
import { SingleproductComponent } from './pages/product/singleproduct/singleproduct.component';
import { AllusersComponent } from './pages/user/allusers/allusers.component';
import { DeleteuserComponent } from './pages/user/deleteuser/deleteuser.component';
import { EdituserComponent } from './pages/user/edituser/edituser.component';
import { LoginComponent } from './pages/user/login/login.component';
import { LogoutComponent } from './pages/user/logout/logout.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { SingleuserComponent } from './pages/user/singleuser/singleuser.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  // {path:"login", redirectTo:""},
  {path: "user", children:[
    {path:"", component:AllusersComponent},
    {path:"register", component:RegisterComponent},
    {path:"login", component:LoginComponent},
    {path:"profile", component:ProfileComponent},
    {path:"logout", component: LogoutComponent},
    {path:"single", children:[
      {path:"view/:id", component:SingleuserComponent},
      {path:"edit/:id", component:EdituserComponent},
      {path:"delete/:id", component:DeleteuserComponent},
    ]}
  ]},
  {path: "product", children:[
    {path:"", component:AllproductsComponent},
    {path:"add", component:AddproductComponent},
    {path:"myproducts", component:MyproductsComponent},
    {path:"single", children:[
      {path:"view/:id", component:SingleproductComponent},
      {path:"edit/:id", component:EditproductComponent},
      {path:"delete/:id", component:DeleteproductComponent},
    ]}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
