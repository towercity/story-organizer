import { Component, OnInit } from '@angular/core';

import { Story } from './story';
import { StoryService } from './story.service';

import { LIST_IDS } from './temp-stories';

@Component({
  selector: 'status-list-view',
  //styleUrls:  ['styles/list.component.css'],
  templateUrl: 'templates/status-list.component.html',
  providers: [StoryService]
})

export class StatusListComponent implements OnInit {
  stories: Story[];
  //TODO: Fix how IDs are imported--b/c this is very improper
  ids: any = LIST_IDS;
  error: any;

  constructor(
    private storyService: StoryService) { }

  log(info: any) {
    console.log(info);
  }

  getStories() {
    this.storyService
        .getStories()
        .then(stories => this.stories = stories)
        .catch(error => this.error = error);
  }

  getIDs() {
    this.storyService.getIDs().then(ids => this.ids = ids);
  }

  ngOnInit() {
    this.getStories();
    this.getIDs();
  }
}
