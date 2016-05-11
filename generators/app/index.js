'use strict';
//Require dependencies
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');


module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    }, function (answers) {
      this.props = answers
      this.log(answers.name);
      done();
    }.bind(this));
  },

  writing: {
    config: function () {
      console.log("Writing stuff");
      // Copy config files
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          name: this.props.name
        }
      );

      this.fs.copyTpl(
        this.templatePath('_.babelrc'),
        this.destinationPath('.babelrc')
      );

      this.fs.copyTpl(
        this.templatePath('_.eslintrc'),
        this.destinationPath('.eslintrc')
      );

      this.fs.copyTpl(
        this.templatePath('_README.md'),
        this.destinationPath('README.md'), {
          name: this.props.name
        }
      );

      this.fs.copyTpl(
        this.templatePath('_webpack.config.js'),
        this.destinationPath('webpack.config.js'), {
          name: this.props.name
        }
      );

      this.fs.copyTpl(
        this.templatePath('_src/_app/_tests/_tests.webpack.js'),
        this.destinationPath('src/app/tests/tests.webpack.js'), {
          name: this.props.name
        }
      );

      this.fs.copyTpl(
        this.templatePath('_karma.conf.js'),
        this.destinationPath('karma.conf.js'), {
          name: this.props.name
        }
      );

      // Copy javascript
      this.fs.copyTpl(
        this.templatePath('_src/_app/_app.js'),
        this.destinationPath('src/app/app.js'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_src/_app/_controllers/_app.js'),
        this.destinationPath('src/app/controllers/app.js'), {
          name: this.props.name
        }
      );

      this.fs.copyTpl(
        this.templatePath('_src/_app/_services/_api.js'),
        this.destinationPath('src/app/services/api.js'), {
          name: this.props.name
        }
      );

      this.fs.copyTpl(
        this.templatePath('_src/_app/_tests/_app.spec.js'),
        this.destinationPath('src/app/tests/app.spec.js'), {
          name: this.props.name
        }
      );

      // Copy views
      this.fs.copyTpl(
        this.templatePath('_src/_app/_views/_app.html'),
        this.destinationPath('src/app/views/app.html'), {
          name: this.props.name
        }
      );



      // Copy styles
      this.fs.copyTpl(
        this.templatePath('_src/_style/_main.scss'),
        this.destinationPath('src/style/main.scss'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_src/_style/_app.scss'),
        this.destinationPath('src/style/app.scss'), {
          name: this.props.name
        }
      );

      this.fs.copyTpl(
        this.templatePath('_src/_public/_index.html'),
        this.destinationPath('src/public/index.html'), {
          name: this.props.name
        }
      );
    }
  },
  install: function () {
    console.log("Installing dependencies");
    this.installDependencies();
  }
});
