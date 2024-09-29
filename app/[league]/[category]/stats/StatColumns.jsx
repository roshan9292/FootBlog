
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export const StatColumns=[
  {
    Header:"PLayer Name",
    Cell:({row})=>(<p>{row.original.player.name}</p>)
  },
  {
    Header:"Goals",
    accessor:'goals'
  },
]