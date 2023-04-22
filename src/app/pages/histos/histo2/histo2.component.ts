import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

OrderDetailsService
@Component({
  selector: 'app-histo2',
  templateUrl: './histo2.component.html',
  styleUrls: ['./histo2.component.css']
})
export class Histo2Component implements OnInit {

  constructor(private service:OrderDetailsService) { }
  historyData:any;
  ngOnInit(): void {
  this.historyData = this.service.historyDetails;
  }

}
