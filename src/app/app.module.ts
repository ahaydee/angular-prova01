import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BitcoinComponent } from "./bitcoin/bitcoin.component";
import { MinhaCarteiraComponent } from "./minha-carteira/minha-carteira.component";
import { BitcoinService } from "./bitcoin.service";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "bitcoin", component: BitcoinComponent },
      { path: "minhacarteira", component: MinhaCarteiraComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    BitcoinComponent,
    MinhaCarteiraComponent
  ],
  bootstrap: [AppComponent],
  providers: [BitcoinService]
})
export class AppModule {}
