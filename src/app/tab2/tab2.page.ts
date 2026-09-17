import { Component, inject, OnInit } from '@angular/core';
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
import { EntidadeAcolhedoraService } from '../services/entidade-acolhedora-service';

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
export class Tab2Page implements OnInit{

  entidadeService = inject(EntidadeAcolhedoraService)
  entidades: EntidadeAcolhedora[] = [];

  constructor() { }
  
  ngOnInit(): void {
    this.entidades = this.entidadeService.listarEntidades();
  }

}
