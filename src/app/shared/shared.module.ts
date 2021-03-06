import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
  imports: [],

  declarations: [
  HeaderComponent ,
  SidebarComponent,
  BreadcrumsComponent,
  NopagefoundComponent
],
  exports:[
    HeaderComponent ,
    SidebarComponent,
    BreadcrumsComponent,
    NopagefoundComponent
  ],
  providers: []
})
export class SharedModule { }
