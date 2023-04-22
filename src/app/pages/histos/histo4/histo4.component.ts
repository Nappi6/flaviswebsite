import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

OrderDetailsService
@Component({
  selector: 'app-histo4',
  templateUrl: './histo4.component.html',
  styleUrls: ['./histo4.component.css']
})
export class Histo4Component implements OnInit {

  constructor(private service:OrderDetailsService) { }
  historyData:any;
  ngOnInit(): void {
  this.historyData = this.service.historyDetails;
  }

}
