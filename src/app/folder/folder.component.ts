import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {

  items!: MenuItem[];


  constructor() { }

  ngOnInit() {
    this.items = [{
      label: 'Initiation du dossier',
      routerLink: 'init-folder'
    },
    {
      label: 'Dossier en attente de validation',
      routerLink: 'wait-folder'
    },
    {
      label: 'Dossier en vigueur',
      routerLink: 'vigueur-folder'
    },
    {
      label: 'Dossier clôturé',
      routerLink: 'cloture-folder'
    }
    ];
  }
}
