function produceDrivingRange(blockRange) {
     return function(start, end) {
        distance = blockRange - (Math.abs((parseInt(end) - parseInt(start))))
        return statement = distance > 0 ? `within range by ${distance}` : `${Math.abs(distance)} blocks out of range`  
    }
} 

function produceTipCalculator(percentage) {
    return function(fare) {
        return fare * percentage
    }
}

function createDriver() {
    let driverId = 0
    return class {
        constructor(name) {
            this.id = 0;
            this.name = name;
            this.id = driverId++;
        }
    }
}