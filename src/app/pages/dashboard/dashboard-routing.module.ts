import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/core/guards/auth-guard.service';
import { DashboardComponent } from './dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from '../dashboard/home/home.component';


const routes : Routes = [
  {
    path : '',
    component : DashboardComponent,
    canActivate : [AuthGuardService],
    children :[
      {
        path : '',
        component : HomeComponent
      },
      {
        path : 'reservations',
        component : BookingComponent
      },
      {
        path : 'commander',
        component : OrderComponent
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
