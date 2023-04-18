import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inputtagwithicon',
  templateUrl: './inputtagwithicon.component.html',
  styleUrls: ['./inputtagwithicon.component.scss']
})
export class InputtagwithiconComponent implements OnInit {

  valueFromInput:any
  @Input() formGroupInfo!:FormGroup;
  @Input() iconStyle:string='';
  @Input() inputType:string='';
  @Input() iconPosition:string='';
  @Input() placeholderText:string='';
  @Input() formControlNameInfo:any

  constructor() { }

  ngOnInit(): void {
  }

}
