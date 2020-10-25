import { Component, VERSION } from "@angular/core";
import { BitcoinService } from "./bitcoin.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Prova 01";
  firstPrice: number;
  updateList;
  currentPrice;

  constructor(public bitcoinService: BitcoinService) {}

  ngOnInit() {
    this.bitcoinService.start();
  }

  getUpdateList() {
    if (this.bitcoinService.updateList.length > 0) {
      this.firstPrice = this.bitcoinService.updateList[0].BRL;
    }
    this.updateList = this.bitcoinService.updateList;
    return this.bitcoinService.updateList;
  }

  getCurrentPrice() {
    if (this.bitcoinService.currentPrice)
      this.currentPrice = this.bitcoinService.currentPrice.bpi.BRL.rate_float;
    return this.bitcoinService.currentPrice;
  }
}
