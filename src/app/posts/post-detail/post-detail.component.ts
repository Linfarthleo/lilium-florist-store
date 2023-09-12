import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() imageSrc!: string;
  @Input() content!: string;
}
