module.exports = {
  "moduleFileExtensions": [
    "js"
  ],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  "transform": {
    "^.+\\.js$": "babel-jest",
  },
  "transformIgnorePatterns": [
    '<rootDir>/node_modules/',
  ],
}