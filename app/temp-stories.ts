import { Story } from './story';

//setting as 'any' to avoid a mysterious error
export var STORIES: Story[] = [
  {
    id: 1,
    title: 'From the Sky',
    desc: 'Seven shorts about US bombings; can be expanded with more detail in many parts',
    status: 0,
    series: [0]
  },
  {
    id: 2,
    title: 'Dick Van Dyke Gets Married',
    desc: "Episode of Dick Van Dyke Show reveals the upset in the center of a woman's life",
    status: 1,
    series: [0]
  },
  {
    id: 3,
    title: 'Songs About Men',
    desc: 'Lost family gets caught up in racist Konig family drama; reflections on the beautiful future of Detroit',
    status: 0,
    series: [1, 2]
  },
  {
    id: 4,
    title: 'Rhesus Macaque',
    desc: 'When you die in St. Pete, you die in real life',
    status: 2,
    series: [2]
  }
];

export var LIST_IDS: any = {
  status: [
    "Working",
    "Drafted",
    "To-write",
    "Complete"
  ],
  series: [
    "None",
    "Corn",
    "Three Sentimental Novellas"
  ]
}
