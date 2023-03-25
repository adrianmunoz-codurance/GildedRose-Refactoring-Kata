import approvals from 'approvals';
import {generateGoldenMasterFor} from "../golden-master-text-test";

describe('Gilded Rose', () => {
  it('should behave the same way that it is working in production', () => {
    approvals.verify(__dirname, 'goldenMaster', generateGoldenMasterFor(30), { reporters: ['meld'] });
  });
});
