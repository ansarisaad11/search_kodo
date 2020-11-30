import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginationService } from "./services/pager.service";

@NgModule({
  declarations: [AppComponent, HomeComponent, CardComponent, TableComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [PaginationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
