const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
    const sampleActivityFloated = parseFloat(sampleActivity);
    if (!sampleActivity || !isFinite(sampleActivityFloated)  || typeof sampleActivity !== 'string' || (sampleActivityFloated >= MODERN_ACTIVITY) || (sampleActivityFloated <= 0)) 
    return false;
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityFloated) / k);
};
