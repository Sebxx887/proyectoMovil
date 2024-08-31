import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  email: string = '';
  password: string = '';

  constructor() { }

  onRegister() {
    console.log('Registrando:', this.nombre, this.email, this.password);
  }
}
