module.exports = {
  transform: {
    "^.+\\.jsx?$": "esbuild-jest", // Use esbuild-jest to transform .js and .jsx files
  },
  moduleFileExtensions: ["js", "jsx"], // Specify the file extensions to look for
  testEnvironment: "node", // Use Node as the test environment
  testPathIgnorePatterns: ["/node_modules/", "/dist/"], // Ignore certain paths
};

