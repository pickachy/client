import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-page-shared-controls-checkbox',
  styleUrls: ['./checkbox-control.component.scss'],
  templateUrl: './checkbox-control.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line no-use-before-define
      useExisting: CheckboxControlComponent,
      multi: true
    }
  ]
})
export class CheckboxControlComponent implements ControlValueAccessor {
  @Input() id: string = '';
  @Input() label: string = '';

  value: boolean = false;

  onChange = (_event: any) => {};
  onTouched = () => {};

  handleChange(event: any) {
    this.onChange(event.target.checked);
  }

  writeValue(_value: boolean) {};

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
