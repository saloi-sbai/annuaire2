import { Component, OnInit } from '@angular/core';
import { contact } from 'src/models/contact-model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  contacts: contact[] = [
    {
      // id: 1,
      name: 'thomas Dupont',
      adresse: '32 rue gambeta',
      // type: 'client',
    }
    // {
    //   id: 2,
    //   name: 'alex',
    //   adresse: '34 rue gambeta',
    //   type: 'fournisseur',
    // },
  ];
}
