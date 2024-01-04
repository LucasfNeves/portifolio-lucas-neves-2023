module.exports = {
  "*.{js,jsx,ts,tsx}": (filenames) => [
    `prettier --write ${filenames.join(" ")}`,
    `npx eslint src --ext .ts,.tsx --fix . ${filenames.join(" ")}`,
  ],
};
