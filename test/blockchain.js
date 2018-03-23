/**
 * RPC - Test
 */
const chai = require('chai');
const chain = require('../src/blockchain');

const expect = chai.expect;
const should = chai.should();

describe('Blockchain', () => {
  it('params', (done) => {
    chain.params.LAST_POW_BLOCK.should.eq(345600);
    chain.params.RAMP_TO_BLOCK.should.eq(960);
    done();
  });

  it('avgBlockTime', (done) => {
    chain.avgBlockTime.should.eq(90);
    done();
  });

  it('blocksPerDay', (done) => {
    chain.blocksPerDay.should.eq(960);
    done();
  });

  it('blocksPerWeek', (done) => {
    chain.blocksPerWeek.should.eq(6720);
    done();
  });

  it('blocksPerMonth', (done) => {
    chain.blocksPerMonth.should.eq(29220);
    done();
  });

  it('blocksPerYear', (done) => {
    chain.blocksPerYear.should.eq(350640);
    done();
  });

  it('masternodeBlocksPerDay', (done) => {
    chain.masternodeBlocksPerDay(960).should.eq(1);
    done();
  });

  it('masternodeBlocksPerWeek', (done) => {
    chain.masternodeBlocksPerWeek(960).should.eq(7.024038461538462);
    done();
  });

  it('masternodeBlocksPerMonth', (done) => {
    chain.masternodeBlocksPerMonth(960).should.eq(30.4375);
    done();
  });

  it('masternodeBlocksPerYear', (done) => {
    chain.masternodeBlocksPerYear(960).should.eq(365.25);
    done();
  });

  it('masternodeCollateral', (done) => {
    chain.masternodeCollateral.should.eq(5000);
    done();
  });

  it('isAddress', (done) => {
    const s = 'bQdwntJm4Q1awqYdQDtJKMjzJRU2VhGpbZ';
    chain.isAddress(s).should.eq(true);
    chain.isAddress(`${ s }a`).should.eq(false);
    chain.isAddress(1).should.eq(false);
    chain.isAddress({}).should.eq(false);
    done();
  });

  it('isBlock', (done) => {
    const s = '000000000000aa23a4315610562fac892b5053e92d2beb104e5a82c99d24f727';
    chain.isBlock(s).should.eq(true);
    chain.isBlock(1).should.eq(true);
    chain.isBlock({}).should.eq(false);
    done();
  });

  it('isTX', (done) => {
    const s = 'ae0455400c2b32aef7ce6ab1913b0b59ccc5f72c0d06e7994a55708300c8d580';
    chain.isTX(s).should.eq(true);
    chain.isTX(1).should.eq(false);
    chain.isTX({}).should.eq(false);
    done();
  });

  it('subsidy', (done) => {
    chain.subsidy(0).should.eq(489720);
    chain.subsidy(86399).should.eq(50);
    chain.subsidy(86400).should.eq(43.75);
    done();
  });

  it('masternodeSubsidy', (done) => {
    chain.masternodeSubsidy(10).should.eq(0);
    chain.masternodeSubsidy(86399).should.eq(16.666666666666668);
    chain.masternodeSubsidy(86400).should.eq(21.875);
    done();
  });
});
