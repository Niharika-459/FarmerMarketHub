import { BrowserModule} from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { StarRatingComponent } from 'ng-starrating';

@NgModule({
    declarations:[AppComponent,
        
    ],
    imports:[
        HomeComponent,
        HeaderComponent,
        CommonModule,
        NgModule,
        BrowserModule,
        FormsModule,
        StarRatingComponent
        
    
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export  class AppModule{}