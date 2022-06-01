import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-page-shared-controls-inputs',
  styleUrls: ['./input-control.component.scss'],
  templateUrl: './input-control.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line no-use-before-define
      useExisting: forwardRef(() => InputControlComponent),
      multi: true
    }
  ]
})
export class InputControlComponent implements ControlValueAccessor {
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
