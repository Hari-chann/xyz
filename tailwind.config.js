/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/button.js",
    // or you can use a glob pattern (multiple component styles)
    //'./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input|navbar).js'
    './node_modules/@nextui-org/theme/dist/components/*.js',
    //'./node_modules/@nextui-org/shared-icons/dist/*.js'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};


