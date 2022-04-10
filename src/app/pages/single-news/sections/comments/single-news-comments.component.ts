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
  @Input() comments: any = []
}
