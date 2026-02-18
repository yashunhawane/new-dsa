const dayStart = "07:30";
const dayEnd = "17:45";

let toNumer = (t) => {
    const [h, m] = t.split(":")
    let timeInNumber = Number(h) * 60 + Number(m);
    return timeInNumber;
}



let scheduleMeeting = (startTime, durationMinutes) => {
    let start = toNumer(dayStart)
    let endTime = toNumer(dayEnd)
    let meetStartimgTime = toNumer(startTime)
    let seetingTIme = meetStartimgTime + durationMinutes
    

    if (meetStartimgTime >= start && seetingTIme <= endTime) {
        console.log("true")
    } else {
        console.log("False")
    }
}

scheduleMeeting("7:00", 15); // false
scheduleMeeting("07:15", 30); // false
scheduleMeeting("7:30", 30); // true
scheduleMeeting("11:30", 60); // true
scheduleMeeting("17:00", 45); // true
scheduleMeeting("17:30", 30); // false
scheduleMeeting("18:00", 15); // false