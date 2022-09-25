import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = []; // inicializado em zero na parte MenuItem[] = *[]*

  constructor() { }

  ngOnInit(): void {

    this.items = [
        {label: 'Portifólio'},
        {label: 'Criptomoedas'},
    ]

  }

}
