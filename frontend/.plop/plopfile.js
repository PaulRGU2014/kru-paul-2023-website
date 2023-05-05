module.exports = (plop) => {
  plop.setGenerator('block', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What to name the block component? (Pascal Case e.g. MyComponent)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../components/block/{{name}}/{{name}}.jsx',
        templateFile: './componentJs.hbs',
      },
      {
        type: 'add',
        path: '../components/block/{{name}}/{{name}}.module.scss',
        templateFile: './componentScss.hbs',
      },
      {
        type: 'add',
        path: '../components/block/{{name}}/{{name}}.stories.jsx',
        templateFile: './componentStory.hbs',
      },
      {
        type: 'append',
        path: '../components/ComponentLoader.js',
        pattern: /\/\/importHere/,
        template: "\timport {{name}} from './block/{{name}}/{{name}}';",
      },
      {
        type: 'append',
        path: '../components/ComponentLoader.js',
        pattern: /\/\/associateHere/,
        template: "\t'page-components.{{kebabCase name}}': {{name}},",
      },
    ],
  });
  plop.setGenerator('page', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What to name the page component? (Pascal Case e.g. MyComponent)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../components/page/{{name}}/{{name}}.jsx',
        templateFile: './pageJs.hbs',
      },
      {
        type: 'add',
        path: '../components/page/{{name}}/{{name}}.module.scss',
        templateFile: './pageScss.hbs',
      },

    ],
  });
  plop.setGenerator('util', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What to name the utility component? (Pascal Case e.g. MyComponent)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../components/util/{{name}}/{{name}}.jsx',
        templateFile: './utilJs.hbs',
      },
      {
        type: 'add',
        path: '../components/util/{{name}}/{{name}}.module.scss',
        templateFile: './utilScss.hbs',
      },
    ],
  });
};

