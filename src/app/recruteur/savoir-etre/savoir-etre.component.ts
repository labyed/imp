import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Savoir} from "../interfaces/savoir";

@Component({
  selector: 'ng2-savoirEtre',
  templateUrl: './savoir-etre.component.html',
  styleUrls: ['./savoir-etre.component.css']
})
export class SavoirEtreComponent implements OnInit {

  // private property to store savoir value
  private _savoir: Savoir;
  // private property to store delete$ value
  private _delete$: EventEmitter<any>;

  constructor() {
    this._delete$ = new EventEmitter();
  }

  /**
   * Returns private property _savoir
   *
   * @returns {any}
   */
  get savoir(): Savoir {
    return this._savoir;
  }

  /**
   * Sets private property _savoir
   *
   * @param person
   */
  @Input() set savoir(savoir: Savoir) {
    this._savoir = savoir;
  }


  /**
   * Returns private property _delete$
   *
   * @returns {EventEmitter<any>}
   */
  @Output('savoirEtreDelete') get delete$(): EventEmitter<any> {
    return this._delete$;
  }

  /**
   * Function to emit event to delete current person
   *
   * @param person
   */
  delete(savoir: Savoir) {
    this._delete$.emit(savoir);
  }

  ngOnInit() {
  }
}
