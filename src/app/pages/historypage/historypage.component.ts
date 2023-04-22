import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-historypage',
  templateUrl: './historypage.component.html',
  styleUrls: ['./historypage.component.css']
})
export class HistorypageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
  getHistoryId:any;
  historyData:any;

  ngOnInit(): void {
    this.getHistoryId = this.param.snapshot.paramMap.get('id');
    console.log(this.getHistoryId,'gethistory');
    if(this.getHistoryId)
    {
        this.historyData =  this.service.historyDetails.filter((value)=>{
          return value.id == this.getHistoryId;
        });
        console.log(this.historyData,'historydata>>')
        
    }
  }

}
