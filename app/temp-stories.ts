import { Story } from './story';

//setting as 'any' to avoid a mysterious error
export var STORIES: Story[] = [
  {
    id: 0,
    title: 'Lipstick Livery',
    desc: 'A meditation on life in New York City at 25',
    status: 1,
    series: [2]
  },
  {
    id: 1,
    title: 'Dick Van Dyke Gets Married',
    desc: "A retelling of an episode of the Dick Van Dyke show using characters from Greek myth",
    status: 1,
    series: []
  },
  {
    id: 2,
    title: 'Bermuda Triangle',
    desc: 'A lost sailor reflects on life in Carolina',
    status: 0,
    series: [1]
  },
  {
    id: 3,
    title: 'Boilerplate',
    desc: 'A code-monkey reflects on the use of copy-paste',
    status: 2,
    series: [0]
  }
];

export var LIST_IDS: any = {
  status: [
    "Working",
    "Drafted",
    "To-write"
  ],
  series: [
    "Defiance Ohio",
    "Life in America",
    "Moby Dick: The College Years"
  ]
}
