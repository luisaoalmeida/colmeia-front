import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Doacao } from '../../model/doacao';

@Component({
  selector: 'app-doacoes-list',
  templateUrl: './doacoes-list.component.html',
  styleUrls: ['./doacoes-list.component.scss']
})
export class DoacoesListComponent implements OnInit {

  @Input() doacoes: Doacao[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor() { }

  ngOnInit(): void { }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(doacao: Doacao) {
    this.edit.emit(doacao);
  }

}
