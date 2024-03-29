import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Entity {
  name: string
}

@Component({
  selector: 'app-init-folder',
  templateUrl: './init-folder.component.html',
  styleUrls: ['./init-folder.component.css']
})

export class InitFolderComponent implements OnInit {

  entity: Entity[];
  isError: Boolean = false;

  list1;

  constructor(private router: Router) {
    this.entity = [
      { name: 'Ni'},
      { name: 'Mi'}
    ];
    this.list1 = [
      {
        label: "Nom 1",
        indice: 2451,
        color: "primary",
        colorText: "primary"
      },
      {
        label: "Nom 2",
        indice: 2452,
        color: "primary",
        colorText: "danger"
      },
      {
        label: "Nom 3",
        indice: 2453,
        color: "primary",
        colorText: "secondary"
      },
      {
        label: "Nom 4",
        indice: 2454,
        color: "primary",
        colorText: "warning"
      }
    ];
  }

  ngOnInit(): void {
  }

  saveData(){
    this.isError = true;
  }

}
