import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { StoryService } from './story.service';

@Component({
  selector: 'edit-series',
  styleUrls: ['styles/edit-series.component.css'],
  templateUrl: 'templates/edit-series.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class EditSeriesComponent implements OnInit {
  ids: any;
  newSeries: string;

  constructor(
    private storyService: StoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getIDs();
  }

  log(info: any) {
    console.log(info);
  }

  getIDs() {
    this.ids = this.storyService.getIDs();
  }

  goToPage(page: string) {
    let link = ['/' + page]
    this.router.navigate(link);
  }

  addSeries() {
    this.ids.series.push(this.newSeries);
    this.storyService.saveStories(this.storyService.getStories(), this.ids);
    this.newSeries = null;
  }

  removeSeries(id: number) {
    var stories = this.storyService.getStories();
    var seriesLength = this.ids.series.length - 1;

    if (id < seriesLength) {
      console.log("series " + (id + 1) + " of " + (seriesLength + 1));

    } else {
      this.log(id);
      this.log("Last of series");
    }

    //this.ids.series.splice(id, 1);
    //this.storyService.saveStories(stories, this.ids);
  }
}
