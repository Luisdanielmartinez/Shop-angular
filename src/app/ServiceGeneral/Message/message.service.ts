import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DialogModalComponent } from './../../logged/components/dialog-modal/dialog-modal.component';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  bsModalRef: BsModalRef;
  constructor(private bsModalService: BsModalService,) { }

  confirm(title: string, message: string, options: string[]): Observable<string> {
    const initialState = {
      title: title,
      message: message,
      options: options,
      answer: "",
    };
    this.bsModalRef = this.bsModalService.show(DialogModalComponent, { initialState });
   
    return new Observable<string>(this.getConfirmSubscriber());
  }
  private getConfirmSubscriber() {
    return (observer) => {
      const subscription = this.bsModalService.onHidden.subscribe((reason: string) => {
        observer.next(this.bsModalRef.content.answer);
        observer.complete();
      });

      return {
        unsubscribe() {
          subscription.unsubscribe();
        }
      };
    }
  }
}
