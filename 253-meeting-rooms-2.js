/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if(intervals.length === 0) {
        return 0;
    }

    let meetingRooms = 0;
    let starts = [];
    let ends = [];

    for(let i = 0; i < intervals.length;i++){
        starts.push(intervals[i][0]);
        ends.push(intervals[i][1]);
    }


    starts.sort((a,b)=> {return a - b;});
    ends.sort((a,b)=> {return a - b;});

    let ept = 0;

    for(let spt = 0; spt< starts.length; spt++) {
        if(starts[spt] < ends[ept]){
            meetingRooms++;
        } else {
            ept++;
        }
    }

    return meetingRooms;
};

console.log(minMeetingRooms([[7,10],[2,4]]));
