import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { NodeService } from './service/nodeservice';

import {TreeModule} from 'primeng/tree'; 
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {PickListModule} from 'primeng/picklist';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { UniversComponent } from './univers/univers.component';
import { AddWalletComponent } from './univers/add-wallet/add-wallet.component';
import { HomeUniversComponent } from './univers/home-univers/home-univers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    UniversComponent,
    AddWalletComponent,
    HomeUniversComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TreeModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    DialogModule,
    ConfirmDialogModule,
    PickListModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component: HomeComponent},
      {path:'univers',component: UniversComponent,children: [
        {
          path: '', // child route path
          component: HomeUniversComponent, // child route component that the router renders
        },
        {
          path: 'ajout-portefeuille', // child route path
          component: AddWalletComponent, // child route component that the router renders
        }
      ]
      },
      // {path:'ajout-portefeuille',component: SidebarComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
		])
  ],
  providers: [NodeService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
