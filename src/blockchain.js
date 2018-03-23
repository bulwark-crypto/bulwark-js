/**
 * Blockchain
 *
 * A general helper module for blockchain related information.
 * Some of the information like subsidies are a model of the
 * C++ source code.
 */
/**
 * Blockchain parameters.
 */
const params = {
  LAST_POW_BLOCK: 345600,
  RAMP_TO_BLOCK: 960
};

// Average block time.
const avgBlockTime = 90; // 1.5 minutes (90 seconds)

// How many blocks on average a day.
const blocksPerDay = (24 * 60 * 60) / avgBlockTime; // 960

// How many blocks average per week.
const blocksPerWeek = blocksPerDay * 7; // 6720

// How many blocks average a month.
const blocksPerMonth = (blocksPerDay * 365.25) / 12; // 29220

// Average number of blocks mined a year.
const blocksPerYear = blocksPerDay * 365.25; // 350640

/**
 * Get the number of masternode blocks per day.
 * @param {Number} mns How many masternodes to use in calculating.
 */
const masternodeBlocksPerDay = (mns) => {
  return blocksPerDay / mns;
};

/**
 * Get the number of masternode blocks per week.
 * @param {Number} mns How many masternodes to use in calculating.
 */
const masternodeBlocksPerWeek = (mns) => {
  return masternodeBlocksPerDay(mns) * (365.25 / 52);
};

/**
 * Get the number of masternode blocks per month.
 * @param {Number} mns How many masternodes to use in calculating.
 */
const masternodeBlocksPerMonth = (mns) => {
  return masternodeBlocksPerDay(mns) * (365.25 / 12);
};

/**
 * Get the number of masternode blocks per year.
 * @param {Number} mns How many masternodes to use in calculating.
 */
const masternodeBlocksPerYear = (mns) => {
  return masternodeBlocksPerDay(mns) * 365.25;
};

// How many coins are required for a masternode.
const masternodeCollateral = 5000.0;

/**
 * Get the block subsidy for masternodes based on provided params.
 * @param {Number} height The current block height.
 * @param {Number} mns The number of masternodes.
 * @param {Number} supply The number of coins in supply.
 */
const masternodeSubsidy = (height = 0, mns = 0, supply = 0) => {
  const val = subsidy(height);
  let ret = 0.0;

  if (height < params.RAMP_TO_BLOCK) {
  ret = 0;
  } else if (height <= 28799 && height >= params.RAMP_TO_BLOCK) {
  ret = val / 5;
  } else if (height <= 57599 && height >= 28800) {
  ret = val / 4;
  } else if (height <= 86399 && height >= 57600) {
  ret = val / 3;
  } else if (height <= params.LAST_POW_BLOCK && height >= 86400) {
  ret = val / 2;
  } else if (height > params.LAST_POW_BLOCK) {
    let nCoins = mns * 5000;
    if (nCoins === 0) {
    ret = 0;
    } else {
      if (nCoins <= (supply * 0.01) && nCoins > 0) {
        ret = val * 0.90;
      } else if (nCoins <= (supply * 0.02) && nCoins > (supply * 0.01)) {
        ret = val * 0.88;
      } else if (nCoins <= (supply * 0.03) && nCoins > (supply * 0.02)) {
        ret = val * 0.87;
      } else if (nCoins <= (supply * 0.04) && nCoins > (supply * 0.03)) {
        ret = val * 0.86;
      } else if (nCoins <= (supply * 0.05) && nCoins > (supply * 0.04)) {
        ret = val * 0.85;
      } else if (nCoins <= (supply * 0.06) && nCoins > (supply * 0.05)) {
        ret = val * 0.84;
      } else if (nCoins <= (supply * 0.07) && nCoins > (supply * 0.06)) {
        ret = val * 0.83;
      } else if (nCoins <= (supply * 0.08) && nCoins > (supply * 0.07)) {
        ret = val * 0.82;
      } else if (nCoins <= (supply * 0.09) && nCoins > (supply * 0.08)) {
        ret = val * 0.81;
      } else if (nCoins <= (supply * 0.10) && nCoins > (supply * 0.09)) {
        ret = val * 0.80;
      } else if (nCoins <= (supply * 0.11) && nCoins > (supply * 0.10)) {
        ret = val * 0.79;
      } else if (nCoins <= (supply * 0.12) && nCoins > (supply * 0.11)) {
        ret = val * 0.78;
      } else if (nCoins <= (supply * 0.13) && nCoins > (supply * 0.12)) {
        ret = val * 0.77;
      } else if (nCoins <= (supply * 0.14) && nCoins > (supply * 0.13)) {
        ret = val * 0.76;
      } else if (nCoins <= (supply * 0.15) && nCoins > (supply * 0.14)) {
        ret = val * 0.75;
      } else if (nCoins <= (supply * 0.16) && nCoins > (supply * 0.15)) {
        ret = val * 0.74;
      } else if (nCoins <= (supply * 0.17) && nCoins > (supply * 0.16)) {
        ret = val * 0.73;
      } else if (nCoins <= (supply * 0.18) && nCoins > (supply * 0.17)) {
        ret = val * 0.72;
      } else if (nCoins <= (supply * 0.19) && nCoins > (supply * 0.18)) {
        ret = val * 0.71;
      } else if (nCoins <= (supply * 0.20) && nCoins > (supply * 0.19)) {
        ret = val * 0.70;
      } else if (nCoins <= (supply * 0.21) && nCoins > (supply * 0.20)) {
        ret = val * 0.69;
      } else if (nCoins <= (supply * 0.22) && nCoins > (supply * 0.21)) {
        ret = val * 0.68;
      } else if (nCoins <= (supply * 0.23) && nCoins > (supply * 0.22)) {
        ret = val * 0.67;
      } else if (nCoins <= (supply * 0.24) && nCoins > (supply * 0.23)) {
        ret = val * 0.66;
      } else if (nCoins <= (supply * 0.25) && nCoins > (supply * 0.24)) {
        ret = val * 0.65;
      } else if (nCoins <= (supply * 0.26) && nCoins > (supply * 0.25)) {
        ret = val * 0.64;
      } else if (nCoins <= (supply * 0.27) && nCoins > (supply * 0.26)) {
        ret = val * 0.63;
      } else if (nCoins <= (supply * 0.28) && nCoins > (supply * 0.27)) {
        ret = val * 0.62;
      } else if (nCoins <= (supply * 0.29) && nCoins > (supply * 0.28)) {
        ret = val * 0.61;
      } else if (nCoins <= (supply * 0.30) && nCoins > (supply * 0.29)) {
        ret = val * 0.60;
      } else if (nCoins <= (supply * 0.31) && nCoins > (supply * 0.30)) {
        ret = val * 0.59;
      } else if (nCoins <= (supply * 0.32) && nCoins > (supply * 0.31)) {
        ret = val * 0.58;
      } else if (nCoins <= (supply * 0.33) && nCoins > (supply * 0.32)) {
        ret = val * 0.57;
      } else if (nCoins <= (supply * 0.34) && nCoins > (supply * 0.33)) {
        ret = val * 0.56;
      } else if (nCoins <= (supply * 0.35) && nCoins > (supply * 0.34)) {
        ret = val * 0.55;
      } else if (nCoins <= (supply * 0.363) && nCoins > (supply * 0.35)) {
        ret = val * 0.54;
      } else if (nCoins <= (supply * 0.376) && nCoins > (supply * 0.363)) {
        ret = val * 0.53;
      } else if (nCoins <= (supply * 0.389) && nCoins > (supply * 0.376)) {
        ret = val * 0.52;
      } else if (nCoins <= (supply * 0.402) && nCoins > (supply * 0.389)) {
        ret = val * 0.51;
      } else if (nCoins <= (supply * 0.415) && nCoins > (supply * 0.402)) {
        ret = val * 0.50;
      } else if (nCoins <= (supply * 0.428) && nCoins > (supply * 0.415)) {
        ret = val * 0.49;
      } else if (nCoins <= (supply * 0.441) && nCoins > (supply * 0.428)) {
        ret = val * 0.48;
      } else if (nCoins <= (supply * 0.454) && nCoins > (supply * 0.441)) {
        ret = val * 0.47;
      } else if (nCoins <= (supply * 0.467) && nCoins > (supply * 0.454)) {
        ret = val * 0.46;
      } else if (nCoins <= (supply * 0.48) && nCoins > (supply * 0.467)) {
        ret = val * 0.45;
      } else if (nCoins <= (supply * 0.493) && nCoins > (supply * 0.48)) {
        ret = val * 0.44;
      } else if (nCoins <= (supply * 0.506) && nCoins > (supply * 0.493)) {
        ret = val * 0.43;
      } else if (nCoins <= (supply * 0.519) && nCoins > (supply * 0.506)) {
        ret = val * 0.42;
      } else if (nCoins <= (supply * 0.532) && nCoins > (supply * 0.519)) {
        ret = val * 0.41;
      } else if (nCoins <= (supply * 0.545) && nCoins > (supply * 0.532)) {
        ret = val * 0.40;
      } else if (nCoins <= (supply * 0.558) && nCoins > (supply * 0.545)) {
        ret = val * 0.39;
      } else if (nCoins <= (supply * 0.571) && nCoins > (supply * 0.558)) {
        ret = val * 0.38;
      } else if (nCoins <= (supply * 0.584) && nCoins > (supply * 0.571)) {
        ret = val * 0.37;
      } else if (nCoins <= (supply * 0.597) && nCoins > (supply * 0.584)) {
        ret = val * 0.36;
      } else if (nCoins <= (supply * 0.61) && nCoins > (supply * 0.597)) {
        ret = val * 0.35;
      } else if (nCoins <= (supply * 0.623) && nCoins > (supply * 0.61)) {
        ret = val * 0.34;
      } else if (nCoins <= (supply * 0.636) && nCoins > (supply * 0.623)) {
        ret = val * 0.33;
      } else if (nCoins <= (supply * 0.649) && nCoins > (supply * 0.636)) {
        ret = val * 0.32;
      } else if (nCoins <= (supply * 0.662) && nCoins > (supply * 0.649)) {
        ret = val * 0.31;
      } else if (nCoins <= (supply * 0.675) && nCoins > (supply * 0.662)) {
        ret = val * 0.30;
      } else if (nCoins <= (supply * 0.688) && nCoins > (supply * 0.675)) {
        ret = val * 0.29;
      } else if (nCoins <= (supply * 0.701) && nCoins > (supply * 0.688)) {
        ret = val * 0.28;
      } else if (nCoins <= (supply * 0.714) && nCoins > (supply * 0.701)) {
        ret = val * 0.27;
      } else if (nCoins <= (supply * 0.727) && nCoins > (supply * 0.714)) {
        ret = val * 0.26;
      } else if (nCoins <= (supply * 0.74) && nCoins > (supply * 0.727)) {
        ret = val * 0.25;
      } else if (nCoins <= (supply * 0.753) && nCoins > (supply * 0.74)) {
        ret = val * 0.24;
      } else if (nCoins <= (supply * 0.766) && nCoins > (supply * 0.753)) {
        ret = val * 0.23;
      } else if (nCoins <= (supply * 0.779) && nCoins > (supply * 0.766)) {
        ret = val * 0.22;
      } else if (nCoins <= (supply * 0.792) && nCoins > (supply * 0.779)) {
        ret = val * 0.21;
      } else if (nCoins <= (supply * 0.805) && nCoins > (supply * 0.792)) {
        ret = val * 0.20;
      } else if (nCoins <= (supply * 0.818) && nCoins > (supply * 0.805)) {
        ret = val * 0.19;
      } else if (nCoins <= (supply * 0.831) && nCoins > (supply * 0.818)) {
        ret = val * 0.18;
      } else if (nCoins <= (supply * 0.844) && nCoins > (supply * 0.831)) {
        ret = val * 0.17;
      } else if (nCoins <= (supply * 0.857) && nCoins > (supply * 0.844)) {
        ret = val * 0.16;
      } else if (nCoins <= (supply * 0.87) && nCoins > (supply * 0.857)) {
        ret = val * 0.15;
      } else if (nCoins <= (supply * 0.883) && nCoins > (supply * 0.87)) {
        ret = val * 0.14;
      } else if (nCoins <= (supply * 0.896) && nCoins > (supply * 0.883)) {
        ret = val * 0.13;
      } else if (nCoins <= (supply * 0.909) && nCoins > (supply * 0.896)) {
        ret = val * 0.12;
      } else if (nCoins <= (supply * 0.922) && nCoins > (supply * 0.909)) {
        ret = val * 0.11;
      } else if (nCoins <= (supply * 0.935) && nCoins > (supply * 0.922)) {
        ret = val * 0.10;
      } else if (nCoins <= (supply * 0.945) && nCoins > (supply * 0.935)) {
        ret = val * 0.09;
      } else if (nCoins <= (supply * 0.961) && nCoins > (supply * 0.945)) {
        ret = val * 0.08;
      } else if (nCoins <= (supply * 0.974) && nCoins > (supply * 0.961)) {
        ret = val * 0.07;
      } else if (nCoins <= (supply * 0.987) && nCoins > (supply * 0.974)) {
        ret = val * 0.06;
      } else if (nCoins <= (supply * 0.99) && nCoins > (supply * 0.987)) {
        ret = val * 0.05;
      } else {
        ret = val * 0.01;
      }
    }
  }

  return ret;
};

/**
 * Test provided string to see if it is possibly a
 * wallet address.
 * @param {String} s The string to test for address.
 */
const isAddress = (s) => {
  return typeof(s) === 'string' && s.length === 34;
};

/**
 * Try to guess if this is a solved block buy checking
 * for the maximum PoW padding.
 * @param {String} s The string to test for block hash.
 */
const isBlock = (s) => {
  return !isNaN(s) || (typeof(s) === 'string' && s.substr(0, 4) === '0000');
};

/**
 * If a string then assume its a transaction.
 * @param {String} s String to test for transaction hash.
 */
const isTX = (s) => {
  return typeof(s) === 'string';
};

/**
 * What is the PoW subsidy/reward for the current block height.
 * @param {Number} height The current block height.
 */
const subsidy = (height = 0) => {
  let sub = 0.0;
  let slowSub = 50.0;

  if (height === 0) {
    sub = 489720.00;
  } else if (height < params.RAMP_TO_BLOCK / 2) {
    slowSub /= params.RAMP_TO_BLOCK;
    slowSub *= height;
  } else if (height < params.RAMP_TO_BLOCK) {
    slowSub /= params.RAMP_TO_BLOCK;
    slowSub *= height;
  } else if (height <= 86399 && height >= params.RAMP_TO_BLOCK) {
    sub = 50;
  } else if (height <= 172799 && height >= 86400) {
    sub = 43.75;
  } else if (height <= 259199 && height >= 172800) {
    sub = 37.5;
  } else if (height <= params.LAST_POW_BLOCK && height >= 259200) {
    sub = 31.25;
  } else if (height <= 431999 && height > params.LAST_POW_BLOCK) {
    sub = 25;
  } else if (height <= 518399 && height >= 432000) {
    sub = 21.875;
  } else if (height <= 604799 && height >= 518400) {
    sub = 18.750;
  } else if (height <= 691199 && height >= 604800) {
    sub = 15.625;
  } else if (height <= 777599 && height >= 691200) {
    sub = 12.50;
  } else if (height <= 863999 && height >= 777600) {
    sub = 10.938;
  } else if (height <= 950399 && height >= 864000) {
    sub = 9.375;
  } else if (height <= 1036799 && height >= 950400) {
    sub = 7.812;
  } else if (height <= 1123199 && height >= 1036800) {
    sub = 6.250;
  } else if (height <= 1209599 && height >= 1123200) {
    sub = 5.469;
  } else if (height <= 1295999 && height >= 1209600) {
    sub = 4.688;
  } else if (height <= 1382399 && height >= 1296000) {
    sub = 3.906;
  } else if (height <= 1468799 && height >= 1382400) {
    sub = 3.125;
  } else if (height <= 1555199 && height >= 1468800) {
    sub = 2.734;
  } else if (height <= 1641599 && height >= 1555200) {
    sub = 2.344;
  } else if (height <= 1727999 && height >= 1641600) {
    sub = 1.953;
  } else if (height > 1728000) {
    sub = 1.625;
  } else {
    sub = 0;
  }

  return height >= params.RAMP_TO_BLOCK ? sub : slowSub;
};

module.exports = {
  avgBlockTime,
  blocksPerDay,
  blocksPerMonth,
  blocksPerWeek,
  blocksPerYear,
  masternodeBlocksPerDay,
  masternodeBlocksPerMonth,
  masternodeBlocksPerWeek,
  masternodeBlocksPerYear,
  masternodeCollateral,
  masternodeSubsidy,
  params,
  isAddress,
  isBlock,
  isTX,
  subsidy
};
