import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-pricing-oprtins',
  templateUrl: './pricing-oprtins.component.html',
  styleUrls: ['./pricing-oprtins.component.css']
})
export class PricingOprtinsComponent implements OnInit {

  
  array1:any=[{"name":"Interchange + .10% and $0.10","saving":"$1,331.33","residuals":"$261.49","rate":"2.29%"},
  {"name":"Interchange + .15% and $0.10","saving":"$1,298.81","residuals":"$287.51","rate":"2.32%"},
  {"name":"Interchange + .20% and $0.10","saving":"$1,257.34","residuals":"$234.89","rate":"2.36%"},
  {"name":"Interchange + .25% and $0.10","saving":"$1,215.87","residuals":"$256.34","rate":"2.40%"},
  {"name":"Interchange + .30% and $0.10","saving":"$1,174.40","residuals":"$287.00","rate":"2.44%"},
  {"name":"2.50% Flat","saving":"$929.00","residuals":"$123.45","rate":"2.67%"},
  {"name":"2.60% Flat","saving":"$846.06","residuals":"$231.46","rate":"2.75%"},
  {"name":"2.70% Flat","saving":"$721.65","residuals":"$234.45","rate":"2.87%"},
  {"name":"6 Tiered w/Reg Debit","saving":"$526.03","residuals":"$234.49","rate":"3.06%"},
  {"name":"3 Tiered w/Reg Debit","saving":"$492.93","residuals":"$212.49","rate":"3.09%"}]
  constructor() { 
    
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $('#example').DataTable();
  }
}
