import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string = '';
  password: string = '';


  validEmail: string = 'RecetasFit@gmail.com';
  validPassword: string = 'contraseña123';

  constructor(private alertController: AlertController, private router: Router) {}

  async onLogin() {
    if (this.email === this.validEmail && this.password === this.validPassword) {

      const alert = await this.alertController.create({
        header: 'Login Exitoso',
        message: '¡Bienvenido!',
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigate(['/home']); 
    } else {
    
      const alert = await this.alertController.create({
        header: 'Credenciales Inválidas',
        message: 'Por favor, verifica tu correo y contraseña.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
