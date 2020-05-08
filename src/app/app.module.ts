import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page/page.component';
import { ErrorComponent } from './page/error/error.component';
import { HomeComponent } from './page/home/home.component';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
import { TermsComponent } from './page/terms/terms.component';
import { UserComponent } from './page/user/user.component';
import { RecipesComponent } from './page/home/recipes/recipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewsComponent } from './page/user/reviews/reviews.component';
import { NewrecipeComponent } from './page/user/newrecipe/newrecipe.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PageComponent,
    ErrorComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    TermsComponent,
    UserComponent,
    RecipesComponent,
    ReviewsComponent,
    NewrecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
