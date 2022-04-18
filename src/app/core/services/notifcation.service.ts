import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _configuration: Partial<IndividualConfig> = {
    positionClass: 'toast-bottom-left'
  };

  constructor(private _toastr: ToastrService) {}

  success(message: string): void {
    this._toastr.success(message, '', this._configuration);
  }

  error(message: string): void {
    this._toastr.error(message, '', this._configuration);
  }

  warn(message: string): void {
    this._toastr.warning(message, '', this._configuration);
  }
}
