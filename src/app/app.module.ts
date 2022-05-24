import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RippleModule} from "primeng/ripple";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {DialogModule} from "primeng/dialog";
import {PanelModule} from "primeng/panel";
import {DataViewModule} from "primeng/dataview";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RatingModule} from "primeng/rating";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    HttpClientModule,
    RatingModule,
    ScrollingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


