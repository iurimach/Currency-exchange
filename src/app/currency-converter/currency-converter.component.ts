import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';


@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  exchangeData: any;
  DataUSD: any;
  DataRUB: any;
  DataTRY: any;
  DataPLN: any;
  DataAMD: any;
  DataCAD: any;
  DataINR: any;
  DataCNY: any;
  DataGBP: any;
  DataJPY: any;
  DataUAH: any;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {

    this.currencyService.getExchangeRates().subscribe(data => {
     var exchangeData2= data[0].currencies
      
     this.exchangeData=exchangeData2[13]
     this.DataUSD=exchangeData2[40]
      this.DataRUB=exchangeData2[33]
      this.DataTRY=exchangeData2[38]
      this.DataPLN=exchangeData2[29]
      this.DataAMD=exchangeData2[1]
      this.DataCAD=exchangeData2[7]
      this.DataINR=exchangeData2[18]
      this.DataCNY=exchangeData2[9]
      this.DataGBP=exchangeData2[14]
      this.DataJPY=exchangeData2[21]
      this.DataUAH=exchangeData2[39]

      console.log(exchangeData2," esa shida")
      
    });
  }
  selectedOption: string = '';
  
}
