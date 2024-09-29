
import ImageCell from "@/app/ui/ImageCell"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export const StandColumns=[
  {
    Header:"Position",
    accessor :'position',
  },
  {
    Header:"Club Name",
    Cell:({row})=>(<ImageCell value={row.original.team.crest} name={row.original.team.shortName}/>)
  },
  {
    Header:"Match Played",
    accessor:'playedGames',
  },
  {
    Header:"Won",
    accessor:'won',
  },
  {
    Header:"Drawn",
    accessor:'draw',
  },
  {
    Header:"Lost",
    accessor:'lost',

  },
  {
    Header:"Goal For",
    accessor:'goalsFor',
  },
  {
    Header:"Points",
    accessor:"points",
  },
]
