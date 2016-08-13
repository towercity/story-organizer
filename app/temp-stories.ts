import { Story } from './story';

//setting as 'any' to avoid a mysterious error
export var STORIES: Story[] = [
  {
    id: 0,
    title: 'From the Sky',
    desc: 'Seven shorts about US bombings; can be expanded with more detail in many parts',
    status: 1,
    series: [0]
  },
  {
    id: 1,
    title: 'Dick Van Dyke Gets Married',
    desc: "Episode of Dick Van Dyke Show reveals the upset in the center of a woman's life",
    status: 1,
    series: [0]
  },
  {
    id: 2,
    title: 'Songs About Men',
    desc: 'Lost family gets caught up in racist Konig family drama; reflections on the beautiful future of Detroit',
    status: 0,
    series: [1, 2]
  },
  {
    id: 3,
    title: 'Rhesus Macaque',
    desc: 'When you die in St. Pete, you die in real life',
    status: 2,
    series: [2, 3]
  },
  {
    id: 4,
    title: 'A Sentimental Education for the New American Century',
    desc: 'George Bush, war criminal, learns to paint',
    status: 1,
    series: [0]
  },
  {
    id: 5,
    title: 'The Times of Plenty Are Over',
    desc: 'Jackie (Konig) tries to help her father keep an eye on her dying aunt, Mary Ellen; Gothic house story',
    status: 1,
    series: [1]
  },
  {
    id: 6,
    title: 'Uncle Konig Kills an Indian',
    desc: 'Uncle K leads a group of misfit across the Deep South on a trail of lies',
    status: 1,
    series: [1]
  },
  {
    id: 7,
    title: 'Sticks of Fire (original)',
    desc: "Weird power imbalance between angsty D-- and unstable J-- comes to a peak when she tries to burn a fountain down in Winthrop Village",
    status: 3,
    series: [1]
  },
  {
    id: 8,
    title: 'Onus of Mystery',
    desc: "Somebody has stolen Joshua's notebook. So she sets out to find it.",
    status: 1,
    series: [1]
  },
  {
    id: 9,
    title: 'Nebraska',
    desc: 'Something evil lurks in wet deserts of west Nebraska; it follows Ilana to a mysterious government compound where she (and many other) try to make their home',
    status: 0,
    series: [2]
  }
];

export var LIST_IDS: any = {
  status: [
    "Working",
    "Drafted",
    "To-write"
  ],
  series: [
    "None",
    "Corn",
    "Three Sentimental Novellas",
    "Tampa Stories"
  ]
}
