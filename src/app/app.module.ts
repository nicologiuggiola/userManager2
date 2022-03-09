import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { SigleUserPageComponent } from './components/sigle-user-page/sigle-user-page.component';
import { CardComponent } from './components/card/card.component';
import { DataCardComponent } from './components/data-card/data-card.component';
import { AddressDataComponent } from './components/address-data/address-data.component';
import { CompanyDataComponent } from './components/company-data/company-data.component';
import { PostContainerComponent } from './components/post-container/post-container.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    UserDetailComponent,
    PageNotFoundComponent,
    AddressCardComponent,
    SigleUserPageComponent,
    CardComponent,
    DataCardComponent,
    AddressDataComponent,
    CompanyDataComponent,
    PostContainerComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
