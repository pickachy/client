import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-page-shared-controls-inputs',
  styleUrls: ['./input-control.component.scss'],
  templateUrl: './input-control.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line no-use-before-define
      useExisting: InputControlComponent,
      multi: true
    }
  ]
})
export class InputControlComponent implements ControlValueAccessor {
  @Input() id?: string;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'number' = 'text';
  @Input() max?: number;
  @Input() min?: number;

  value?: string | number = undefined;
  touched = false;
  disabled = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  handleOnChange = (event: any) => {
    const value = this.type === 'number' ? Number(event.target.value) : event.target.value;
    this.onChange(value);
  };

  writeValue(value: string | number) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
