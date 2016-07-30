import { Story } from './story';
import { STORIES } from './temp-stories';
import { Injectable } from '@angular/core';

@Injectable()
export class StoryService {
  getStories() {
    return Promise.resolve(STORIES);
  }

  getStory(id: number) {
    return this.getStories()
               .then(stories => stories.find(story=> story.id === id));
  }
}
