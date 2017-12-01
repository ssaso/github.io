import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// import { Adal4Service, Adal4HTTPService } from 'adal-angular4';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { CategoriesService } from './northwind.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        GridModule,
        ButtonsModule
    ],
    providers: [
    
        CategoriesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
