{
  "name": "app",
  "private": true,
  "devDependencies": {
    "esbuild": "^0.24.0",
    "postcss-preset-mantine": "^1.17.0",
    "postcss-simple-vars": "^7.0.1",
    "tailwindcss": "^3.4.13"
  },
  "scripts": {
    "build": "esbuild app/javascript/*.* --bundle --sourcemap --format=esm --outdir=app/assets/builds --public-path=/assets",
    "build:css:compile": "tailwindcss -i ./app/assets/stylesheets/application.tailwind.css -o ./app/assets/builds/application.css --minify",
    "build:css:compile": "sass ./app/assets/stylesheets/application.bootstrap.scss:./app/assets/builds/application.css --no-source-map --load-path=node_modules",
    "build:css:prefix": "postcss ./app/assets/builds/application.css --use=autoprefixer --output=./app/assets/builds/application.css",
    "build:css": "yarn build:css:compile && yarn build:css:prefix",
    "watch:css": "nodemon --watch ./app/assets/stylesheets/ --ext scss --exec \"yarn build:css\""
  },
  "dependencies": {
    "@hotwired/stimulus": "^3.2.2",
    "@hotwired/turbo-rails": "^8.0.10",
    "@nextui-org/button": "^2.0.38",
    "@nextui-org/input": "^2.2.5",
    "@nextui-org/link": "^2.0.35",
    "@nextui-org/navbar": "^2.0.37",
    "@nextui-org/react": "^2.4.8",
    "@nextui-org/system": "^2.2.6",
    "@nextui-org/theme": "^2.2.11",
    "@popperjs/core": "^2.11.8",
    "autoprefixer": "^10.4.20",
    "bootstrap": "^5.3.3",
    "bootstrap-icons": "^1.11.3",
    "framer-motion": "^11.8.0",
    "nodemon": "^3.1.7",
    "postcss": "^8.4.47",
    "postcss-cli": "^11.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.2",
    "sass": "^1.79.3"
  },
  "browserslist": [
    "defaults"
  ]
}

