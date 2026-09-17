import { Component, inject, Inject, OnInit } from '@angular/core';
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
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/angular'
import { PetService } from '../services/pet-service';

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
export class Tab3Page implements OnInit {
  
  animalService: PetService = inject(PetService)
  pets: Animal[] = [];

  constructor() { }
  
  ngOnInit(): void {
    this.pets = this.animalService.listarPets();
  }
}
