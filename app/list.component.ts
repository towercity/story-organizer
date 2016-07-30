import { Component, OnInit } from '@angular/core';

import { Story } from './story';
import { StoryService } from './story.service';

@Component({
  selector: 'list-view',
  //styleUrls:  ['styles/list.component.css'],
  templateUrl: 'templates/list.component.html',
  providers: [StoryService]
})

export class ListComponent implements OnInit {
  stories: Story[];

  constructor(
    private storyService: StoryService) { }

  getStories() {
    this.storyService.getStories().then(stories => this.stories = stories);
  }

  ngOnInit() {
    this.getStories();
  }
}
