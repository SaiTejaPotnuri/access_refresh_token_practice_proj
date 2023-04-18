import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textareatag',
  templateUrl: './textareatag.component.html',
  styleUrls: ['./textareatag.component.scss']
})
export class TextareatagComponent implements OnInit {


  @Input() bioformGroup:FormGroup;
  @Input() numberOfRows;
  @Input() numberOfCols;
  @Input() formControlerName:string;

  constructor() { }

  ngOnInit(): void {
  }

}
