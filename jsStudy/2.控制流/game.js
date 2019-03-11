//funds本金   totalBet总下注数
let funds = 50;
let round = 0;
while (funds > 1 && funds < 100) {
  round++;
  //下注
  const bets = {crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};
  let totalBet = rand(1, funds);
  if (totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
  } else {
    //分配下注总数
    let remaining = totalBet;
    do {
      let bet = rand(1, remaining);
      let face = randFace();
      bets[face] = bets[face] + bet;
      remaining = remaining - bet;
    } while (remaining > 0);
  }
  funds = funds - totalBet;

  //掷骰子
  const hand = [];
  for (let roll = 0; roll < 3; roll++) {
    hand.push(randFace());
  }

  //收集赢到的钱（可能没有）
  let wining = 0;
  for (let die = 0; die < hand.length; die++) {
    let face = hand[die];
    if (bets[face] > 0) wining = wining + bets[face]
  }
  funds = funds + wining

  //返回在[m,n]之间的随机整数
  function rand(m, n) {
    return m + Math.floor(n - m + 1) * Math.random();
  }

  //随机返回代表皇冠和锚游戏六个面其中之一的字符串x
  function randFace() {
    return ["crown", 'anchor', 'heart', 'spade', 'club', 'diamond', 'rand(0,5)'];
  }
}
