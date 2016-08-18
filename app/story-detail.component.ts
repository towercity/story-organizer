import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { Story } from './story';
import { StoryService } from './story.service';

import { LIST_IDS } from './temp-stories';

@Component({
  selector: 'story-detail',
  styleUrls: ['styles/story-detail.component.css'],
  templateUrl: 'templates/story-detail.component.html',
  directives: [ROUTER_DIRECTIVES],
})

export class StoryDetailComponent implements OnInit {
  stories: Story[];
  story: Story;
  newSeriesID: number;
  navigated = false;
  ids: any = LIST_IDS;

  constructor(
    private storyService: StoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getIDs();
    this.getStories();

    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.story = this.storyService.getStory(id);
      } else {
        this.navigated = false;
        this.story = new Story();
      }
    });
  }

  log(info: any) {
    console.log(info);
  }

  getIDs() {
    this.ids = this.storyService.getIDs();
  }

  getStories() {
    this.stories = this.storyService.getStories();
  }

  removeSeries(arrayID: number) {
    this.story.series.splice(arrayID, 1);
  }

  addSeries() {
    this.story.series.push(this.newSeriesID);
    this.newSeriesID = null;
  }

  removeStory() {
    var storyID = this.story.id;
    var storiesLength = this.stories.length - 1;
    // maintains ID chronology by reducing all ids later thna removed story
    if (storyID < storiesLength) {
      for (var i = storyID; i < storiesLength; i++) {
        this.stories[i + 1].id--;
      };
    };

    //removes story by ID#
    this.stories.splice(storyID, 1);

    this.goToPage('table');
  }

  goToPage(page: string) {
    let link = ['/' + page]
    this.router.navigate(link);
  }

  saveStories() {
    this.storyService.saveStories(this.stories);
  }
}
