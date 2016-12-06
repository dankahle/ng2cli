import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-dk-modal',
  templateUrl: './dk-modal.component.html',
  styleUrls: ['./dk-modal.component.css']
})
export class DkModalComponent {
  stuff = 'lala';

  constructor(private modal:NgbActiveModal) { }

  close(val) {
    this.modal.close(val);
  }

  dismiss(val) {
    this.modal.dismiss(val);
  }

}
