"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./vscts.plugins");
// dirs
exports.cwd = process.cwd();
exports.dotVscodeDir = plugins.path.join(exports.cwd, '.vscode/');
exports.packageDir = plugins.path.join(__dirname, '../');
exports.assetDir = plugins.path.join(exports.packageDir, './assets/');
// files
exports.launchJson = plugins.path.join(exports.dotVscodeDir, 'launch.json');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjdHMucGF0aHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy92c2N0cy5wYXRocy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUEwQztBQUUxQyxPQUFPO0FBQ0ksUUFBQSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFBO0FBQ25CLFFBQUEsWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQTtBQUVqRCxRQUFBLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFDaEQsUUFBQSxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQTtBQUVoRSxRQUFRO0FBQ0csUUFBQSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQVksRUFBRSxhQUFhLENBQUMsQ0FBQSJ9