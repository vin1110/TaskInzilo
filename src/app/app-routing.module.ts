import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RateReviewComponent } from './rate-review/rate-review.component';

const routes: Routes = [
  {path:'rate-review',component:RateReviewComponent},
  {path:'',component:RateReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
