module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true,
    "es6": true,
  },
  "globals": {},
  "plugins": [
    "react-hooks"
  ],
  "rules": {
    "no-console": [0],
    "react/jsx-props-no-spreading": [0],
    "react/destructuring-assignment": [0],
    "import/no-unresolved": [0],
    "prefer-destructuring": [0],
    "import/extensions": [0],
    "react/no-danger": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "linebreak-style": [0],
    "react/jsx-filename-extension": [0],
    "import/prefer-default-export": [0],

    "jsx-a11y/click-events-have-key-events": [1],
    "jsx-a11y/anchor-is-valid": [0],
    "jsx-a11y/label-has-associated-control": [0],
    "jsx-a11y/label-has-for": [0],
    "max-len": [2, { "code": 120 }],
    "react/jsx-one-expression-per-line": [2],
    "semi": [2, "never"],
    "react/jsx-max-props-per-line": [2, {
      "maximum": 1, "when": "always"
    }],
    "no-empty-pattern": [0],
    "react/prop-types": [0],
    "no-implicit-globals": [2],
    "no-magic-numbers": [2, { ignore: [-1, 0, 1, 2, 1000, 60, 24]}],
    "no-multiple-empty-lines": [2, {"max": 1, "maxEOF": 0}],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "import/order": ["error", {
      "newlines-between": "always",
      "groups": ["builtin", "external", "parent", "sibling", "index"],
      // https://github.com/benmosher/eslint-plugin-import/issues/1621#
      // "pathGroups": [
      //   {
      //     "pattern": "TODO",
      //     "group": "external",
      //     "position": "before"
      //   }
      // ]
    }],
    "max-lines": [2, {"max": 200, "skipBlankLines": true, "skipComments": true}],
  }
}
