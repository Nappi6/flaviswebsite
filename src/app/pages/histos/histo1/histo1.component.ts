import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

OrderDetailsService
@Component({
  selector: 'app-histo1',
  templateUrl: './histo1.component.html',
  styleUrls: ['./histo1.component.css']
})
export class Histo1Component implements OnInit {

  constructor(private service:OrderDetailsService) { }
  historyData:any;
  ngOnInit(): void {
  this.historyData = this.service.historyDetails;
  }

}
