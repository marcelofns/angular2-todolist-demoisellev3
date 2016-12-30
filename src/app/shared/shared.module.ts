import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2BootstrapModule, DropdownModule, PopoverModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SecurityModule } from '@demoiselle/security';
import { NotificationService } from '../shared/notification.service';
import { LoginService } from '../login/login.service';
import { UsuarioDropdownComponent } from './top-nav/usuario-dropdown.component';

// layout
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    Ng2BootstrapModule.forRoot(),
    DropdownModule.forRoot(),
    PopoverModule.forRoot()
  ],
  declarations: [SidebarMenuComponent, TopNavComponent, UsuarioDropdownComponent],
  providers: [
    NotificationService,
    LoginService
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    Ng2BootstrapModule,
    //PopoverModule,
    SecurityModule,

    SidebarMenuComponent,
    TopNavComponent,
    UsuarioDropdownComponent



  ]
})
export class SharedModule { }
