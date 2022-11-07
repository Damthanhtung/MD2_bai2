class StopWatch{
    constructor() {
        // let currentTime = new Date();
        // this.startTime = currentTime.getSeconds()*1000 + currentTime.getMilliseconds();
        // this.endTime = currentTime.getSeconds()*1000 + currentTime.getMilliseconds();
    }
    start(){
        let currentStartTime = new Date()
        this.startTime = currentStartTime.getSeconds()*1000 + currentStartTime.getMilliseconds();
        return this.startTime;
    }
    stop(){
        let currentEndTime = new Date()
        this.endTime = currentEndTime.getSeconds()*1000 + currentEndTime.getMilliseconds();
        return this.endTime;
    }
    getElapsedTime(){
        return (this.endTime-this.startTime );
    }
}
function randomUniqueNum(range) {
    let result = [];
    for (let i = 1; i <= range; i++) {
        const random = Math.floor(Math.random() * (range - i));
        result.push(random);
    }
    return result;
}

let stopWatch = new StopWatch();
stopWatch.start()
let a = randomUniqueNum(1000000);
a.sort(function(a, b){return a-b})
stopWatch.stop()
console.log(stopWatch.startTime)
console.log(stopWatch.endTime)
console.log(stopWatch.getElapsedTime())