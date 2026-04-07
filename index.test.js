"use strict";
// Investigate Deva Test File
// Copyright ©2000-2026 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:34475945780849255130 LICENSE.md
// Sunday, April 5, 2026 - 10:14:22 PM PST

const {expect} = require('chai')
const InvestigateDeva = require('./index.js');

describe(InvestigateDeva.me.name, () => {
  beforeEach(() => {
    return InvestigateDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(InvestigateDeva).to.be.an('object');
    expect(InvestigateDeva).to.have.property('agent');
    expect(InvestigateDeva).to.have.property('vars');
    expect(InvestigateDeva).to.have.property('listeners');
    expect(InvestigateDeva).to.have.property('methods');
    expect(InvestigateDeva).to.have.property('modules');
  });
})
