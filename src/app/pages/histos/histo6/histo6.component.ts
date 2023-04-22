import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

OrderDetailsService
@Component({
  selector: 'app-histo6',
  templateUrl: './histo6.component.html',
  styleUrls: ['./histo6.component.css']
})
export class Histo6Component implements OnInit {

  constructor(private service:OrderDetailsService) { }
  historyData:any;
  ngOnInit(): void {
  this.historyData = this.service.historyDetails;
  }

}
