import {Component} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {DkModalComponent} from "./shared/dk-modal/dk-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users = [
    {name:'dank', age:50},
    {name:'carl', age:60}
  ]

  public publicval = 'publicval';
  private privateval = 'privateval';

  constructor(private ngbModal: NgbModal) {
  }

  openModal() {
    let modalRef = this.ngbModal.open(DkModalComponent);
    let dkModalComponent:DkModalComponent = modalRef.componentInstance as DkModalComponent;
    modalRef.result.then(
      val => {
        console.log('stuff from modal comp:', dkModalComponent.stuff);
        console.log('success', val)
      },
      val => console.log('dismiss', val)
    );
  }

}
