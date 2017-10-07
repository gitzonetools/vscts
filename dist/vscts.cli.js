"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./vscts.plugins");
const paths = require("./vscts.paths");
exports.vsctsCli = new plugins.smartcli.Smartcli();
exports.vsctsCli.standardTask().then((arvArg) => {
    plugins.beautylog.info('now handling TypeScript files with ts-node!');
});
exports.vsctsCli.addCommand('init').then((argvArg) => {
    plugins.smartfile.fs.ensureDir(paths.dotVscodeDir);
    // copy file
    plugins.smartfile.fs.copySync(plugins.path.join(paths.assetDir, 'launch.json'), paths.launchJson);
});
exports.vsctsCli.startParse();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjdHMuY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvdnNjdHMuY2xpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTBDO0FBQzFDLHVDQUFzQztBQUkzQixRQUFBLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUE7QUFFckQsZ0JBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtJQUN0QyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBQ3ZFLENBQUMsQ0FBQyxDQUFBO0FBRUYsZ0JBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7SUFDM0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNsRCxZQUFZO0lBQ1osT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQ25HLENBQUMsQ0FBQyxDQUFBO0FBRUYsZ0JBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQSJ9