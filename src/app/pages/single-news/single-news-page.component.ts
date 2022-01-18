import { Component } from '@angular/core';

@Component({
  selector: 'app-page-single-news',
  templateUrl: './single-news-page.component.html',
  styleUrls: ['./single-news-page.component.scss']
})
export class SingleNewsPageComponent {
  tags = [{ href: '#', text: 'Кредиты' }, { href: '#', text: 'Банки' }, { href: '#', text: 'Овердрафт' }]
  comments = [{ author: 'Игорь Злаков', text: 'Рассрочка на наличные дается на три месяца, и никакими подписками этот срок не увеличить' }, { author: 'Татьяна Иванова', text: 'Рассрочка на наличные дается на три месяца, и никакими подписками этот срок не увеличить' }, { author: 'Иван Велич', text: 'Это важно, так как каждое снятие облагается комиссией' }]
}
