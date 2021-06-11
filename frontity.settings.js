const settings = {
  "name": "hcbf-frontity",
  "state": {
    "frontity": {
      "url": "https://frontity.org/",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      name: "hcbf-frontity-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://kyles-test-site.com/",
          "postsPage": "/blog",
          "homepage": "/home",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "frontity-contact-form-7",
  ]
};

export default settings;
