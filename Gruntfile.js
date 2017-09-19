/*global module:false*/

const fs = require('fs');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  
  const SWAGGER_VERSION = "2.2.3";
  const JAVASCRIPT_VERSION = require('./javascript-generated/package.json').version;
  
  grunt.registerMultiTask('javascript-package-update', 'Updates package.json -file', function () {
    const packageJson = JSON.parse(fs.readFileSync('javascript-generated/package.json'));
    fs.writeFileSync('javascript-generated/package.json', JSON.stringify(Object.assign(packageJson, this.data.fields), null, 2));
  });

  grunt.initConfig({
    'curl': {
      'swagger-codegen':  {
        src: `http://repo1.maven.org/maven2/io/swagger/swagger-codegen-cli/${SWAGGER_VERSION}/swagger-codegen-cli-${SWAGGER_VERSION}.jar`,
        dest: 'swagger-codegen-cli.jar'
      }
    },
    'shell': {
      'javascript-generate': {
        command : 'java -jar swagger-codegen-cli.jar generate ' +
          '-i https://raw.githubusercontent.com/6aika/api-paatos/master/paatos.swagger.yaml ' +
          '-l javascript ' +
          '-o javascript-generated/ ' +
          `--additional-properties usePromises=true,projectName=paatos-api-client,projectVersion=${JAVASCRIPT_VERSION}`
      },
      'javascript-bump-version': {
        command: 'npm version patch',
        options: {
          execOptions: {
            cwd: 'javascript-generated'
          }
        }
      },
      'javascript-push': {
        command : 'git add . && git commit -m "Generated javascript source" ; git push',
        options: {
          execOptions: {
            cwd: 'javascript-generated'
          }
        }
      },
      'javascript-publish': {
        command : 'npm publish',
        options: {
          execOptions: {
            cwd: 'javascript-generated'
          }
        }
      }
    },
    'javascript-package-update': {
      'javascript-package': {
        'fields': {
          "author": "Metatavu Oy",
          "repository": {
            "type": "git",
            "url": "git://github.com/Metatavu/6aika-paatos-client.git"
          }
        }
      }
    }
  });
  
  grunt.registerTask('download-dependencies', 'if-missing:curl:swagger-codegen');
  grunt.registerTask('javascriptgen', [ 'shell:javascript-generate', 'javascript-package-update:javascript-package' ]);
  grunt.registerTask('javascript', [ 'javascriptgen', 'shell:javascript-bump-version', 'shell:javascript-push', 'shell:javascript-publish']);
  
  grunt.registerTask('default', ['download-dependencies', 'javascript' ]);
  
};