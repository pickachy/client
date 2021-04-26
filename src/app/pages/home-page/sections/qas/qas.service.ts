import { Injectable } from '@angular/core';

interface QADto {
  id: number;
  title: string;
  body: string;
}

export interface QAItemView extends QADto {}

@Injectable({
  providedIn: 'root'
})
export class QasService {
  getQas = (): QAItemView[] => [
    {
      id: 0,
      title: 'Долги',
      body:
        '<h3>Et has minim elitr intellegat</h3>\n          <p>\n            Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum Mea aeterno eleifend antiopam ad, nam no suscipit\n            quaerendum. At nam minimum ponderumMea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderumMea aeterno\n            eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderumMea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At\n            nam minimum ponderum Et has minim elitr intellegat\n          </p>\n          <p>\n            Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum Mea aeterno eleifend antiopam ad, nam no suscipit\n            quaerendum. At nam minimum ponderumMea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderumMea aeterno\n            eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderumMea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At\n            nam minimum ponderumEt has minim elitr intellegat\n          </p>\n          <p>\n            Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum Mea aeterno eleifend antiopam ad, nam no suscipit\n            quaerendum. At nam minimum ponderumMea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderumMea aeterno\n            eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderumMea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At\n            nam minimum ponderum\n          </p>'
    },
    {
      id: 1,
      title: 'Долги',
      body: `<h3>Et has minim elitr intellegat</h3>
          <p>
            Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum Mea aeterno eleifend antiopam ad, nam no suscipit
            quaerendum. At nam minimum ponderumMea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderumMea aeterno
            eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderumMea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At
            nam minimum ponderum Et has minim elitr intellegat
          </p>
          <p>
            Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum Mea aeterno eleifend antiopam ad, nam no suscipit
            quaerendum. At nam minimum ponderumMea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderumMea aeterno
            eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderumMea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At
            nam minimum ponderumEt has minim elitr intellegat
          </p>
          <p>
            Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum Mea aeterno eleifend antiopam ad, nam no suscipit
            quaerendum. At nam minimum ponderumMea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderumMea aeterno
            eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderumMea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At
            nam minimum ponderum
          </p>`
    }
  ];
}
