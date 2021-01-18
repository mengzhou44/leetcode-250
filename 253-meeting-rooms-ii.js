//Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] find the minimum number of conference rooms required.
function findMeetingRooms(meetings){
     if (meetings.length<2)  return meetings.length 
     
     meetings = meetings.sort((a,b)=> a[0]- b[0])

    let rooms= [meetings[0][1]]
    for(let i=1; i<meetings.length; i++) {
         let filtered = rooms.filter(endTime=> endTime<=meetings[i][0]) 
         if (filtered.length>0) {
             filtered[0] = meetings[i][1]
         }else {
             rooms.push(meetings[i][1])
         }
    }
    return rooms.length 
}

console.log(findMeetingRooms([[2,15],[4,9],[9,29],[16,23],[36,45]]))
console.log(findMeetingRooms([[0, 30],[5, 10],[15, 20]]))
console.log(findMeetingRooms([[7,10],[2,4]]))