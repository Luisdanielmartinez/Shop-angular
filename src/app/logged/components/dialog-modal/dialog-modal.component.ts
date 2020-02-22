import { Component, OnInit, EventEmitter,Output  } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css'],
  providers: [BsModalService]
})
export class DialogModalComponent implements OnInit {
  title: string;
  message: string;
  options: string[];
  answer: string = "";

  constructor( public bsModalRef: BsModalRef,) { }
  ngOnInit() {

  }
  respond(answer: string) {
    this.answer = answer;

    this.bsModalRef.hide();
  }
}
