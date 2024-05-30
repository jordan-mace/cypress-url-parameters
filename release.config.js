module.exports = {
    extends: "semantic-release-npm-github-publish",
    plugins: [
      "@semantic-release/release-notes-generator",
      "@semantic-release/github",
      "@semantic-release/npm"
    ]
  };