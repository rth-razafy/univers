import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {

  items!: MenuItem[];

  isError: boolean = false;

  position: number = 0;

  constructor() {
  }

  ngOnInit() {
    this.items = [
      { label: 'Initiation du dossier' },
      { label: 'Dossier en attente de validation' },
      { label: 'Dossier en vigueur' },
      { label: 'Dossier clôturé' }
    ];
  }

}
