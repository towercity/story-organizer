import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Story } from './story';
import { StoryService } from './story.service';

@Component({
  selector: 'story-detail',
  templateUrl: 'templates/story-detail.component.html'
})

export class StoryDetailComponent implements OnInit, OnDestroy {
  story: Story;
  sub: any;

  constructor(
    private storyService: StoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = (params => {
      let id = +params['id'];
      this.storyService.getStory(id)
        .then(story => this.story = story);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
