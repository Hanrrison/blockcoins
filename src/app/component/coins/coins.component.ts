import { CoinsService } from './coins.service';
import { Component, OnInit } from '@angular/core';
import { Coins } from './coins';


@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss'],
})
export class CoinsComponent implements OnInit {

   coins: Coins[] = []

  constructor(
    private service: CoinsService
  ) { }

  ngOnInit(): void {
    this.service.getCoins().subscribe((Coins) => {
      this.coins = Coins
    })
  }

}

