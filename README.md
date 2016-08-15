# story-organizer

A simple angular 2 application which organizes stories by category and series

# To implement

* (Much later:) add a navbar to access many features (eg new entry)
* Local storage (or server storage)
  * Store the STORIES array to local storage ("local.stories.object")
  * for getStories functions on each page, check if its stored locally first. if so, use local array; if not, run the story service
  * do the same for the IDS object, especially once it is made editable
