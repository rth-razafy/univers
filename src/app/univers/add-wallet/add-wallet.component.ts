import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.css']
})
export class AddWalletComponent implements OnInit {

  constructor() { }

  list1: any[] = [];

  list2: any[] = [];

  ngOnInit() {
    this.list1 = [
      {
        label: "Nom 1",
        indice: 2451,
        color: "primary"
      },
      {
        label: "Nom 2",
        indice: 2452,
        color: "primary"
      },
      {
        label: "Nom 3",
        indice: 2453,
        color: "primary"
      },
      {
        label: "Nom 4",
        indice: 2454,
        color: "primary"
      }
    ];
    this.list2 = [];
  }

}
