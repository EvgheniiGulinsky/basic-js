module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let obj ={
            turns: Math.pow(2,disksNumber)-1
    }
    obj.seconds= obj.turns / (turnsSpeed / 3600)
    return obj}