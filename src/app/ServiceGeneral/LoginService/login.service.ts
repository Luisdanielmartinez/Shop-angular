
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { collectionUser } from './../../Setting/SettingCollection';
import { User } from './../../models/user.model';
import { MessageService } from '../Message/message.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  answers: string[] = [];
  bsModalRef: BsModalRef;
  constructor(private router: Router, private userAuth: AngularFireAuth, private db: AngularFirestore, private messageService: MessageService) { }

  async createUser(name: string, email: string, password: string) {

    await this.userAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.userAuth.auth.onAuthStateChanged((userData) => {
          userData.updateProfile({
            displayName: name
          });
        })
        const userID = this.userAuth.auth.currentUser.uid;
        let user = {
          Name: name,
          Email: email,
          Password: password,
          Id: userID
        };
        this.db.collection(collectionUser).doc(user.Id).set(user);;

        this.userAuth.auth.currentUser.sendEmailVerification();

        alert('Registro exitoso');
        this.router.navigate(['/login']);
      }).catch(err => {
        const errorCodes = err.code;
        switch (errorCodes) {
          case 'auth/invalid-email':
            this.showMessage("info", "Correo incorrecto", ["Ok"]);
            break;
          case 'auth/email-already-in-use':
            this.showMessage("info", 'Correo en uso', ["Ok"]);
            break;
          case 'auth/operation-not-allowed':
            this.showMessage("info", 'Este correo no existe.', ["Ok"]);
            break;
          case 'auth/weak-password':
            this.showMessage("info", 'Estamos trabajando con el servicio.', ["Ok"]);
            break;
          default:
            this.showMessage("info", 'Tiene que escribir lo que le piden', ["Ok"]);
        }
      });
  }

  async LoginIn(email: string, password: string) {
    this.userAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {

        this.router.navigate(['/home']);
      }).catch(err => {
        const errorCodes = err.code;
        switch (errorCodes) {
          case 'auth/invalid-email':
            this.showMessage("info", "Correo incorrecto", ["Ok"]);
            break;
          case 'auth/email-already-in-use':
            this.showMessage("info", 'Correo en uso', ["Ok"]);
            break;
          case 'auth/internal-error.':
            this.showMessage("info", 'Estamos trabajando con el servicio.', ["Ok"]);
            break;
          case 'auth/invalid-password':
            this.showMessage("info", 'Contraseña invalida.', ["Ok"]);
            break;
          case 'auth/operation-not-allowed':
            this.showMessage("info", 'Este correo no existe.', ["Ok"]);
            break;
          default:
            this.showMessage("info", 'Usuario o contraseña incorrectas.', ["Ok"]);
        }
      });
  }
  async showMessage(title, message, question) {
    await this.messageService.confirm(
      title,
      message,
      question)
      .subscribe((answer) => {
        this.answers.push(answer);
      });
  }
}
