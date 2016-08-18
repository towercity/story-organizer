import { Story } from './story';
import { STORIES } from './temp-stories';
import { LIST_IDS } from './temp-stories';

import { Injectable } from '@angular/core';

@Injectable()
export class StoryService {
  hasStoredLocalStories: boolean = (localStorage["story.organizer.story.details"]);
  hasStoredLocalIDs: boolean = (localStorage["story.organizer.story.IDs"]);

  getStories() {
    if(!this.hasStoredLocalStories) {
      console.log("Using default STORIES.");
      return STORIES;

    } else {
      var localStories = JSON.parse(localStorage["story.organizer.story.details"]);
      console.log("Using local storage stories object:");
      console.log(localStories);
      return localStories;
    }
  }

  getIDs() {
    if(!this.hasStoredLocalIDs) {
      console.log("Using default IDS.");
      return LIST_IDS;

    } else {
      var localIDs = JSON.parse(localStorage["story.organizer.story.IDs"]);
      console.log("Using local storage IDs object:");
      console.log(localIDs);
      return localIDs;
    }
  }

  getStory(id: number) {
    var stories = this.getStories();
    return stories.find(story => story.id === id);
  }

  saveStories(storiesArray: Story[]) {
    var stringifiedStories = JSON.stringify(storiesArray);
    localStorage["story.organizer.story.details"] = stringifiedStories;
  }

  saveIDs(ids: any) {
    var stringifiedIDs = JSON.stringify(ids);
    localStorage["story.organizer.story.IDs"] = stringifiedIDs;
  }
}
