import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor (private gifsService: GifsService) {}

  get tags (): string [] {
    return this.gifsService.tagsHistory;
  }

  searchTagInput (tag: string): void {
    console.log('Tag presionado: ' + tag)
    this.gifsService.searchTag(tag);
  }
}
