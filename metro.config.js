const { getDefaultConfig } = require("expo/metro-config");
const {withNativeWind} = require('nativewind/metro');
const path = require('path');
 
const config = getDefaultConfig(__dirname)

// Shim 'react-dom' to an empty module
config.resolver.extraNodeModules = {
  ...(config.resolver.extraNodeModules || {}),
  'react-dom': path.resolve(__dirname, 'shim', 'react-dom.js'),
};
 
module.exports = withNativeWind(config, { input: './global.css' })