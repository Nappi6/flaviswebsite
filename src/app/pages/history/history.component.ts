import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
historyData:any;
ngOnInit(): void {
  this.historyData = this.service.historyDetails;
}

}
