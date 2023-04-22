import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

OrderDetailsService
@Component({
  selector: 'app-histo3',
  templateUrl: './histo3.component.html',
  styleUrls: ['./histo3.component.css']
})
export class Histo3Component implements OnInit {

  constructor(private service:OrderDetailsService) { }
  historyData:any;
  ngOnInit(): void {
  this.historyData = this.service.historyDetails;
  }

}
