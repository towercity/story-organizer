import { Component, OnInit } from '@angular/core';

import { Story } from './story';
import { StoryService } from './story.service';

import { LIST_IDS } from './temp-stories';

@Component({
  selector: 'list-view',
  //styleUrls:  ['styles/list.component.css'],
  templateUrl: 'templates/list.component.html',
  providers: [StoryService]
})

export class ListComponent implements OnInit {
  stories: Story[];
  //TODO: Fix how IDs are imported--b/c this is very improper
  ids: any = LIST_IDS;
  format: string = 'status';
  sub: any;

  constructor(
    private storyService: StoryService) { }

  log(info: any) {
    console.log(info);
  }

  switchFormat() {
    if (this.format === 'status') {
      this.format = 'series';
    } else if (this.format === 'series') {
      this.format = 'status';
    }
  }

  getStories() {
    this.storyService.getStories().then(stories => this.stories = stories);
  }

  getIDs() {
    this.storyService.getIDs().then(ids => this.ids = ids);
  }

  ngOnInit() {
    this.getStories();
    this.getIDs();
  }
}

// make a url split--list/series and list/status. use an ngif in the template
// after the heading and
