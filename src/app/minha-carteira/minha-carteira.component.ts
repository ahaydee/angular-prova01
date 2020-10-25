import { Component, OnInit } from "@angular/core";
import { BitcoinService } from "../bitcoin.service";

@Component({
  selector: "app-minha-carteira",
  templateUrl: "./minha-carteira.component.html",
  styleUrls: ["./minha-carteira.component.css"]
})
export class MinhaCarteiraComponent implements OnInit {
  totalBitcoin: number = 0;
  totalReal: number = 0;
  constructor(public bitcoinService: BitcoinService) {}

  ngOnInit() {
    this.bitcoinService.start();
  }

  add(value: string) {
    if (value != "") {
      this.totalBitcoin += parseInt(value);
      this.totalReal =
        this.totalBitcoin * this.bitcoinService.currentPrice.bpi.BRL.rate_float;
    }
  }

  remove(value: string) {
    if (value != "") {
      if (this.totalBitcoin - parseInt(value) >= 0) {
        this.totalBitcoin -= parseInt(value);
        this.totalReal =
          this.totalBitcoin *
          this.bitcoinService.currentPrice.bpi.BRL.rate_float;
      } else {
        this.totalBitcoin = 0;
        this.totalReal = 0;
      }
    }
  }
}
