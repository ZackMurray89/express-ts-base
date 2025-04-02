module.exports = {
  // Use TS-Jest Preset For Testing TypeScript Files With Jest
  preset: "ts-jest",

  // Set Test Environment For Node.Js
  testEnvironment: "node",

  // Define Root Directory For Tests & Modules
  roots: ["<rootDir>/tests"],

  // Use TS-Jest To Transform TypeScript Files
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  // RegEx To Find Test Files
  testRegex: "((\\.|/)(test|spec))\\.tsx?$",

  // File Extensions To Recognize In Module Resolution
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
