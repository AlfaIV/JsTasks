const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    ...tsJestTransformCfg,
  },
};