import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneTodoComponent } from './components/one-todo/one-todo.component';
import { OneUserComponent } from './components/one-user/one-user.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TodosComponent } from './pages/todos/todos.component';
import { UsersComponent } from './pages/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DoneComponent } from './pages/done/done.component';
import { CorporalComponent } from './pages/corporal/corporal.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoPipe } from './pipes/todo.pipe';
import { UserPipe } from './pipes/user.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OneTodoComponent,
    OneUserComponent,
    HomepageComponent,
    TodosComponent,
    UsersComponent,
    TodoPipe,
    UserPipe,
    NavbarComponent,
    DoneComponent,
    CorporalComponent,
    FooterComponent,
    TodoPipe,
    UserPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
