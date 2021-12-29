import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-single-news-comments',
  templateUrl: './single-news-comments.component.html',
  styleUrls: ['./single-news-comments.component.scss']
})
export class SingleNewsCommentsComponent {
  @Input() value: number = 0;
  @Input() text: string = '';
  @Input() author: string = '';
  comments = [{ author: 'Игорь Злаков', text: 'Рассрочка на наличные дается на три месяца, и никакими подписками этот срок не увеличить' }, { author: 'Татьяна Иванова', text: 'Рассрочка на наличные дается на три месяца, и никакими подписками этот срок не увеличить' }, { author: 'Иван Велич', text: 'Это важно, так как каждое снятие облагается комиссией' }]
}
