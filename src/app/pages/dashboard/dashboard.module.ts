import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order/order-summary/order-summary.component';
import { BookingComponent } from './booking/booking.component';
import { CreateBookingModalComponent } from './booking/create-booking-modal/create-booking-modal.component';
import { BookingsTableComponent } from './booking/bookings-table/bookings-table.component';
import { NzSelectModule, NzTagModule, NzFormModule, NzModalModule, NzListModule, NzMenuModule, NgZorroAntdModule, NzTableModule, NzButtonModule, NzIconModule, NzInputNumberModule, NzInputModule, NzSliderModule, NzGridModule, NzEmptyModule, NzToolTipModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { PageModule } from '../page.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { QuantityModalComponent } from './order/quantity-modal/quantity-modal.component';



@NgModule({
  declarations: [DashboardComponent, OrderComponent, OrderSummaryComponent, BookingComponent, OrderSummaryComponent, CreateBookingModalComponent, BookingsTableComponent, HomeComponent, QuantityModalComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PageModule,
    NzTagModule,
    NzMenuModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzSliderModule,
    NzGridModule,
    NzEmptyModule
  ],
  bootstrap: [DashboardComponent],
  exports: [RouterModule, QuantityModalComponent]
})
export class DashboardModule { }