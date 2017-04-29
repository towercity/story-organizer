import { Story } from './story';

//setting as 'any' to avoid a mysterious error
export var STORIES: Story[] = [
  {
    id: 0,
    title: 'Moby Dick',
    desc: 'An angry man searches the sea for a white whale',
    status: 1,
    series: []
  },
  {
    id: 1,
    title: 'Swann in Love',
    desc: "Swann falls in love with Odette, who's not even his type",
    status: 1,
    series: [0]
  },
  {
    id: 2,
    title: 'Ulysses',
    desc: 'A couple of people wander Dublin for a while',
    status: 0,
    series: []
  },
  {
    id: 3,
    title: 'My Brilliant Friend',
    desc: 'Two friends grow up with each other and, occasionally, get jealous fo each other',
    status: 2,
    series: [1]
  }
];

export var LIST_IDS: any = {
  status: [
    "Working",
    "Drafted",
    "To-write"
  ],
  series: [
    "In Search of Lost Time",
	"Neapolitian Novels"
  ]
}
