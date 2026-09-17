import { Component, inject, OnInit } from '@angular/core';
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
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/usuario-service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
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
    IonList,],
})
export class Tab1Page implements OnInit{

  usuarioService = inject(UsuarioService);
  usuarios: Usuario[] = [];

  constructor() { 
     
  }

  ngOnInit(): void {
    this.usuarios = this.usuarioService.listarUsuarios();
  }

}
