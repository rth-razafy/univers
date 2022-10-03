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
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {OrderListModule} from 'primeng/orderlist';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {StepsModule} from 'primeng/steps';
import {MenuItem} from 'primeng/api';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { UniversComponent } from './univers/univers.component';
import { AddWalletComponent } from './univers/add-wallet/add-wallet.component';
import { HomeUniversComponent } from './univers/home-univers/home-univers.component';
import { AddCustomUoComponent } from './univers/add-custom-uo/add-custom-uo.component';
import { FolderComponent } from './folder/folder.component';
import { CreateFolderComponent } from './folder/create-folder/create-folder.component';
import { InitFolderComponent } from './folder/init-folder/init-folder.component';
import { WaitFolderComponent } from './folder/wait-folder/wait-folder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    UniversComponent,
    AddWalletComponent,
    HomeUniversComponent,
    AddCustomUoComponent,
    FolderComponent,
    CreateFolderComponent,
    InitFolderComponent,
    WaitFolderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TreeModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    DropdownModule,
    StepsModule,
    OrderListModule,
    InputTextareaModule,
    DialogModule,
    MessageModule,
    MessagesModule,
    ConfirmDialogModule,
    PickListModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component: HomeComponent},
      {path:'univers',component: UniversComponent,children: [
        {
          path: '',
          component: HomeUniversComponent,
        },
        {
          path: 'ajout-portefeuille',
          component: AddWalletComponent,
        },
        {
          path: 'ajout-uo',
          component: AddCustomUoComponent,
        },
      ]
    },
    {
      path: 'folder',
      component: FolderComponent,
      children: [
        {
          path: 'create-folder',
          component: CreateFolderComponent
        },
        {
          path: 'init-folder',
          component: InitFolderComponent
        },
        {
          path: 'wait-folder',
          component: WaitFolderComponent
        },
        {
          path: 'vigueur-folder',
          component: InitFolderComponent
        },
        {
          path: 'cloture-folder',
          component: InitFolderComponent
        },
        {
          path: 'archive-folder',
          component: InitFolderComponent
        },
        {path: '', redirectTo: '/folder/init-folder', pathMatch: 'full'}
      ]
    },
    {path: '', redirectTo: '/home', pathMatch: 'full'},
		])
  ],
  providers: [NodeService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
