import {Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidatorFn} from '@angular/forms';

export function dateFormatValidator(c: FormControl) {
  const err = {
    dateFormat: true,
  };

  const regexp = new RegExp('^(3[01]|[12][0-9]|0?[1-9])\\/(1[012]|0?[1-9])\\/((?:19|20)\\d{2})*$');
  return regexp.test(c.value) ? null : err;
}

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDateComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useValue: dateFormatValidator,
      multi: true
    }
  ]
})
export class InputDateComponent implements OnInit, ControlValueAccessor {

  @Input() isInvalid = false;
  @Input() errors = {};
  public inputValue = '';
  public disabled = false;
  public propagateChange = (v: any) => {};
  public propagateTouched = (v: any) => {};

  constructor() {
  }

  ngOnInit() {
  }

  public setInputOnChange(value: string) {
    this.inputValue = value;
    this.propagateChange(value);
  }

  public setInputOnTouched(value: string) {
    this.inputValue = value;
    this.propagateTouched(value);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.inputValue = obj;
  }

}
