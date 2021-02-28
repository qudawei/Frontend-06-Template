var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }
  async initPackage() {
    const answer = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "your project name",
        default: this.appname
      },
    ])
    const pkgJson = {
      "name": answer.name,
      "version": "1.0.0",
      "description": "",
      "main": "generators/app/index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
      "devDependencies": {
        // eslint: '^3.15.0'
      },
      "dependencies": {
        // "vue": '^16.2.0'
      }
    };

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    this.npmInstall(["vue"], { "save-dev": false });
    this.npmInstall(["webpack", "vue-loader", "vue-template-compiler", 'vue-style-loader', 'css-loader'], { "save-dev": true });
    this.fs.copyTpl(
      this.templatePath('helloWorld.vue'),
      this.destinationPath('src/helloWorld.vue'),
      {} // user answer `title` used
    );
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js'),
      {} // user answer `title` used
    );
    this.fs.copyTpl(
      this.templatePath('main.js'),
      this.destinationPath('src/main.js'),
      {} // user answer `title` used
    );
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('src/index.html'),
      {title:answer.name} // user answer `title` used
    );
  }
};