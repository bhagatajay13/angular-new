import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyServiceService } from './my-service.service';
import { AppComponent } from './app.component';
import {
  ApplicationRoutingModuleModule,
  routingComponents,
} from './application-routing-module.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ApplicationRoutingModuleModule,
  ],
  declarations: [AppComponent, routingComponents],
  providers: [MyServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
