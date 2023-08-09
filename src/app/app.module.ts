import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlGeneratorComponent } from './html-generator/html-generator.component';
import { ApiService } from './api.service';
import { GeneratedBlockComponent } from './generated-block/generated-block.component';


@NgModule({
  declarations: [
    AppComponent,
    HtmlGeneratorComponent,
    GeneratedBlockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
