import { Component } from '@angular/core';
import { Animal } from '../models/animal.model';
import {
  IonHeader, 
  IonToolbar, 
  IonTitle,
  IonContent,
  IonItem,
  IonList,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/angular'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
 imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonItem,
    IonList,]
})
export class Tab3Page {
  pets: Animal[] = [];

  constructor() {
    this.pets.push({
      nome: "Tobby"
    });
  }
}
