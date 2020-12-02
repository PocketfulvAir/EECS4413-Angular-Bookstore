import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';
import { StoreComponent } from './store/store.component';
import { ViewbookComponent } from './viewbook/viewbook.component';

const routes: Routes = [
  { path: '', component: StoreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'viewbook', component: ViewbookComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }        // redirects back to home if path is illegal
];      // routing done here 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
