import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rate-review',
  templateUrl: './rate-review.component.html',
  styleUrls: ['./rate-review.component.css']
})
export class RateReviewComponent implements OnInit {

  validateForm:FormGroup;

  value_t1:any =0;
  value_t2:any =0;
  avg_ticket:any =0;


  constructor( fb:FormBuilder) {
    this.validateForm=fb.group({
      'description': [null, Validators.required],
      'sic': [null, Validators.required],
      'visa1': [null,[Validators.required,Validators.pattern('^[0-9]+$')]],
      'visa2': [null,  [Validators.required,Validators.pattern('^[0-9]+$')]],
      'master1': [null,  [Validators.required,Validators.pattern('^[0-9]+$')]],
      'master2': [null,  [Validators.required,Validators.pattern('^[0-9]+$')]],
      'discover1': [null,  [Validators.required,Validators.pattern('^[0-9]+$')]],
      'discover2': [null,  [Validators.required,Validators.pattern('^[0-9]+$')]],
      'american1': [null,  [Validators.required,Validators.pattern('^[0-9]+$')]],
      'american2': [null,  [Validators.required,Validators.pattern('^[0-9]+$')]],

      
    })
   }

  ngOnInit() {

    
    
  }

  Text1(event){
    this.value_t1 = (+this.value_t1) + (+event);
    if(this.value_t2 != 0){
      this.avg_ticket =(this.value_t1) / (this.value_t2);
    }
   
  }
  Text2(event){
    this.value_t2 = (+this.value_t2) + (+event);
    if(this.value_t1 != 0){
      this.avg_ticket =(this.value_t1) / (this.value_t2);
    }
  }
}
