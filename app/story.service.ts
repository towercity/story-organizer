import { Story } from './story';
import { STORIES } from './temp-stories';
import { LIST_IDS } from './temp-stories';

import { Injectable } from '@angular/core';

@Injectable()
export class StoryService {
  getStories() {
    return Promise.resolve(STORIES);
  }

  getIDs() {
    return Promise.resolve(LIST_IDS);
  }
}
