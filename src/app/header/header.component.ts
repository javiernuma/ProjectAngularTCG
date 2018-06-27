import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() feactureSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onSelect(feacture: string ) {
    this.feactureSelected.emit(feacture);
    console.log(feacture);
  }

}
