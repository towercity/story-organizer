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
    var ids = this.ids;

    //TODO: Console.log the actual logic being used by the function (eg series = x; id = y; new array = /n Array)
    //TODO: This will, hopefully, make it clearer where the error is

    console.log(" ");
    console.log(" ");
    console.log("Function will:");

    console.log(" - Remove series " + ids.series[id] + " from ids.series.");
    this.ids.series.splice(id, 1);

    stories.forEach(function(story) {
      story.series.forEach(function(series, index) {
        if (series === id) {
          console.log(" - Remove series " + ids.series[id] + " from " + story.title + ", which is in positon " + index + " of series array.");
          story.series.splice(index, 1);
        } else if (series > id) {
          console.log(" - Reduce the series id of " + ids.series[series] + " in the array for " + story.title + ".");
          console.log("Original id: " + ids.series[series]);
          ids.series[series]--
          console.log("New id: " + ids.series[series]);
        }
      });
    });

    console.log(" - Save new stories and ids array to local storage.")
    this.storyService.saveStories(stories, this.ids);
  }
}
