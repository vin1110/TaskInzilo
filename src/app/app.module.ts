import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RateReviewComponent } from './rate-review/rate-review.component';
import { PricingOprtinsComponent } from './pricing-oprtins/pricing-oprtins.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { PipelineComponent } from './pipeline/pipeline.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    RateReviewComponent,
    PricingOprtinsComponent,
    PipelineComponent,
    SidebarComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
