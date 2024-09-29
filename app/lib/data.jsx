export   async function getData(){
 const res = await fetch('https://api.football-data.org/v4/competitions/',{
 headers:{
   'X-Auth-Token':'33b0caac1c094288b7b34162bc1e4952'
 },
})
return res.json()
}

export  async function leagueData(string){
  const res = await fetch(`https://api.football-data.org/v4/competitions/${string}`,{
  headers:{
    'X-Auth-Token':'33b0caac1c094288b7b34162bc1e4952'
  },
 })
 return res.json()
 }

 export async function standings(league,season){

  const res =await fetch(`https://api.football-data.org/v4/competitions/${league}/standings/?season=${season}`,{
    headers:{
      'X-Auth-Token':'33b0caac1c094288b7b34162bc1e4952'
    },
  }) 
  return res.json();
}

export async function fixturesAndStats(league,season,category){

  const res =await fetch(`https://api.football-data.org/v4/competitions/${league}/${category}/?season=${season}`,{
    headers:{
      'X-Auth-Token':'33b0caac1c094288b7b34162bc1e4952'
    },
  }) 
  return res.json();
}

export  function fixtureObject(fixtures){

  let matches =[{
    matchday:1,
    games:fixtures.filter(fixture=>fixture.matchday == 1)
    },
    {
      matchday:2,
      games:fixtures.filter(fixture=>fixture.matchday == 2)
    },
    {
      matchday:3,
      games:fixtures.filter(fixture=>fixture.matchday == 3)
    },
    {
      matchday:4,
      games:fixtures.filter(fixture=>fixture.matchday == 4)
    },
    {
      matchday:5,
      games:fixtures.filter(fixture=>fixture.matchday == 5)
    },
    {
      matchday:6,
      games:fixtures.filter(fixture=>fixture.matchday == 6)
    },
    {
      matchday:7,
      games:fixtures.filter(fixture=>fixture.matchday == 7)
    },
    {
      matchday:8,
      games:fixtures.filter(fixture=>fixture.matchday == 8)
    },
    {
      matchday:9,
      games:fixtures.filter(fixture=>fixture.matchday == 9)
    },
    {
      matchday:10,
      games:fixtures.filter(fixture=>fixture.matchday == 10)
    },
    {
      matchday:11,
      games:fixtures.filter(fixture=>fixture.matchday == 11)
    },
    {
      matchday:12,
      games:fixtures.filter(fixture=>fixture.matchday == 12)
    },
    {
      matchday:13,
      games:fixtures.filter(fixture=>fixture.matchday == 13)
    },
    {
      matchday:14,
      games:fixtures.filter(fixture=>fixture.matchday == 14)
    },
    {
      matchday:15,
      games:fixtures.filter(fixture=>fixture.matchday == 15)
    },
    {
      matchday:16,
      games:fixtures.filter(fixture=>fixture.matchday == 16)
    },
    {
      matchday:17,
      games:fixtures.filter(fixture=>fixture.matchday == 17)
    },
    {
      matchday:18,
      games:fixtures.filter(fixture=>fixture.matchday == 18)
    },
    {
      matchday:19,
      games:fixtures.filter(fixture=>fixture.matchday == 19)
    },
    {
      matchday:20,
      games:fixtures.filter(fixture=>fixture.matchday == 20)
    },
    {
      matchday:21,
      games:fixtures.filter(fixture=>fixture.matchday == 21)
    },
    {
      matchday:22,
      games:fixtures.filter(fixture=>fixture.matchday == 22)
    },
    {
      matchday:23,
      games:fixtures.filter(fixture=>fixture.matchday == 23)
    },
    {
      matchday:24,
      games:fixtures.filter(fixture=>fixture.matchday == 24)
    },
    {
      matchday:25,
      games:fixtures.filter(fixture=>fixture.matchday == 25)
    },
    {
      matchday:26,
      games:fixtures.filter(fixture=>fixture.matchday == 26)
    },
    {
      matchday:27,
      games:fixtures.filter(fixture=>fixture.matchday == 27)
    },
    {
      matchday:28,
      games:fixtures.filter(fixture=>fixture.matchday == 28)
    },
    {
      matchday:29,
      games:fixtures.filter(fixture=>fixture.matchday == 29)
    },
    {
      matchday:30,
      games:fixtures.filter(fixture=>fixture.matchday == 30)
    },
    {
      matchday:31,
      games:fixtures.filter(fixture=>fixture.matchday == 31)
    },
    {
      matchday:32,
      games:fixtures.filter(fixture=>fixture.matchday == 32)
    },
    {
      matchday:33,
      games:fixtures.filter(fixture=>fixture.matchday == 33)
    },
    {
      matchday:34,
      games:fixtures.filter(fixture=>fixture.matchday == 34)
    },
    {
      matchday:35,
      games:fixtures.filter(fixture=>fixture.matchday == 35)
    },
    {
      matchday:36,
      games:fixtures.filter(fixture=>fixture.matchday == 36)
    },
    {
      matchday:37,
      games:fixtures.filter(fixture=>fixture.matchday == 37)
    },
    {
      matchday:38,
      games:fixtures.filter(fixture=>fixture.matchday == 38)
    }]
  return matches;
}
