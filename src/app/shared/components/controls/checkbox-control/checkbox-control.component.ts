import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-page-shared-controls-checkbox',
  styleUrls: ['./checkbox-control.component.scss'],
  templateUrl: './checkbox-control.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line no-use-before-define
      useExisting: forwardRef(() => CheckboxControlComponent),
      multi: true
    }
  ]
})
export class CheckboxControlComponent implements ControlValueAccessor {
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'number' = 'text';
  @Input() max?: number;
  @Input() min?: number;

  value: any = '';

  onChange = (_event: any) => {};
  onTouched = () => {};

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
