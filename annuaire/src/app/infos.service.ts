import { Injectable } from '@angular/core';
import { contact } from '../models/contact-model';

@Injectable({
  providedIn: 'root',
})
export class InfosService {
  tab: contact[] = [
    {
      id: 1,
      name: 'thomas',
      adresse: '32 rue gambeta',
      type: "client"
    },
    {
      id: 2,
      name: 'alex',
      adresse: '34 rue gambeta',
      type: "fournisseur"
    }
  ];

  listeContacts(): contact[] {
    return this.tab;
  }
}
