Math.prototype.rng = function(min, max, round) {
  if(round) return Math.floor((Math.random() * (max - min)) + min);
  if(!round) return (Math.random() * (max - min) + min);
};
