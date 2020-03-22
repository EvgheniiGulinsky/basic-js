module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
    let membersSorted = members.map(a => typeof(a)=="string"?a.toLowerCase().trim(""):a="").sort()
    const teamNameArray = []
    for (let i = 0; i < membersSorted.length; i++){
      if (typeof(membersSorted[i])=="string")
      teamNameArray.push(membersSorted[i].trim().split("")[0])}
  return teamNameArray.join("").toUpperCase()
}