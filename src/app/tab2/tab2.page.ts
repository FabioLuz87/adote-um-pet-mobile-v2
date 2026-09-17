import { Component } from '@angular/core';
import { EntidadeAcolhedora } from '../models/entidade-acolhedora.model';
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
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
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
export class Tab2Page {
  entidades: EntidadeAcolhedora[] = [];

  constructor() {
    this.entidades.push({
      nome: "Canil Animacao Ltda",
      cnpj: "123456789021234"
    });
  }

}
