import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';


export function courseDurationInputTypeValidator(c: FormControl) {
  const err = {
    nan: true,
  };

  return isNaN(+c.value) ? err : null;
}

@Component({
  selector: 'app-input-duration',
  templateUrl: './input-duration.component.html',
  styleUrls: ['./input-duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDurationComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useValue: courseDurationInputTypeValidator,
      multi: true
    }
  ]
})
export class InputDurationComponent implements OnInit, ControlValueAccessor {

  @Input() isInvalid = false;
  @Input() errors = {};
  public inputValue = '';
  public disabled = false;
  public propagateChange = (v: any) => {};
  public propagateTouched = (v: any) => {};

  constructor() { }

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
