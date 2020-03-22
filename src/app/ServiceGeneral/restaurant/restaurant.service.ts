import { Cities } from './../../interfaces/Cites';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { MessageService } from '../Message/message.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  answers: string[] = [];
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient, private db: AngularFirestore, private messageService: MessageService, private userAuth: AngularFireAuth) { }

  getCities(): Observable<Cities> {
    const url = this.baseUrl + "api/cities";
    return this.http.get<Cities>(url);
  }
  getResturantByFilter(filter: any): Observable<any> {
    const url = this.baseUrl + "api/restaurants?city=" + filter;
    return this.http.get<any>(url);
  }
  getRestaurant() {
    const url = this.baseUrl + "api/restaurants?city=Florence";
    return this.http.get<any>(url);
  }
  async setResevartion(item) {
    const userID = uuidv4();
    let restaurant = {
      Name: item.name,
      Address: item.address,
      City: item.city,
      Phone: item.phone
    };
    debugger;
    await this.db.collection("Restaurant").doc(userID).set(restaurant);
    await this.showMessage("info", 'Reselvacion exitosa.', ["Ok"]);
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

