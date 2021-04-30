const settings = {
  "name": "hcbf-frontity",
  "state": {
    "frontity": {
      "url": "http://hcbfreact.local/wp-json",
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
          "api": "http://hcbfreact.local/wp-json",
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
