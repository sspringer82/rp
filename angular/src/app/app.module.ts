import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { UserComponent } from './user/user.component';
import { User2Component } from './user2/user2.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [AppComponent, TimeComponent, UserComponent, User2Component],
  imports: [BrowserModule, HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
