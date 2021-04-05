REACT AND TAILWIND PRE CONFIGURED PROJECT and INSTRUCTIONS ====>

----------------------------------------------------------------------------------------------------------------------

THIS A TEMPLATE CREATED by @ALMIGHTYPUSH on 5/04/2021 with routing configured through react-router-dom /routes.jsx and 
TailWind implemented through npm and craco.

In order to install Tailwind in a newly created react project you will need to:

1- npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

2-npm install @craco/craco 

3-Configure your package.json changing the scripts of start, dev and test for "craco start" "craco dev" and "craco test"

4-Create a js file ==> touch craco.config.js and paste this: 

// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};

5-execute npx tailwindcss

AND DONE TAILWIND IS READY TO BE USED WITH REACT!!!

You can go to tailwindcss.com to read the documentation and start using it!

HOPE THIS WAS USEFUL!