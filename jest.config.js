module.exports = {
<<<<<<< HEAD
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
=======

  testEnvironment: "jsdom",

  "modulePaths": ["/shared/vendor/modules"],
  "moduleFileExtensions": ["js", "jsx"],
  "moduleDirectories": ["node_modules", "bower_components", "shared"],

  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",

    "^config$": "<rootDir>/configs/app-config.js"
  }

>>>>>>> e111f43c61d1c18b30bf9a5f2e3c9b67f6060218
}