export default {
  testEnvironment: "node",
  transform: {},
};
export default {
  testEnvironment: "node",
  transform: {},

  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/.internal/"
  ],

  collectCoverageFrom: [
    "src/**/*.js"
  ]
};
