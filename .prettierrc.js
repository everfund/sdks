/**
 * @type {import('prettier').Config}
 */
module.exports = {
  ...require('@everfund/prettier/.prettierrc.json'),
  // proseWrap: 'always', // Uncomment this while working on Markdown documents. MAKE SURE TO COMMENT THIS BEFORE RUNNING CHECKS/FORMATS OR EVERYTHING WILL BE MODIFIED.
};
