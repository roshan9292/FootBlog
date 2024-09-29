
import ImageCell from "@/app/ui/ImageCell"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export const StandColumns=[
  {
    Header:"Position",
    accessor :'position',
    sortable:true
  },
  {
    Header:"Club Name",
    Cell:({row})=>(<ImageCell value={row.original.team.crest} name={row.original.team.shortName}/>)
  },
  {
    Header:"Match Played",
    accessor:'playedGames'
  },
  {
    Header:"Won",
    accessor:'won',
    sortable:true
  },
  {
    Header:"Drawn",
    accessor:'draw',
    sortable:true
  },
  {
    Header:"Lost",
    accessor:'lost',
    sortable:true

  },
  {
    Header:"Goal For",
    accessor:'goalsFor',
    sortable:true
  },
  {
    Header:"Points",
    accessor:"points"
  },
  {
    Header:"form",
    accessor:"form"
  }
]
