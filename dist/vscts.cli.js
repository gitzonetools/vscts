"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./vscts.plugins");
const paths = require("./vscts.paths");
let vsctsInfo = new plugins.projectinfo.ProjectinfoNpm(paths.cwd);
exports.vsctsCli = new plugins.smartcli.Smartcli();
exports.vsctsCli.addVersion(vsctsInfo.version);
exports.vsctsCli.standardTask().then((arvArg) => {
    plugins.beautylog.info('now handling TypeScript files with ts-node!');
});
exports.vsctsCli.addCommand('init').then((argvArg) => {
    plugins.smartfile.fs.ensureDir(paths.dotVscodeDir);
    // copy file
    plugins.smartfile.fs.copySync(plugins.path.join(paths.assetDir, 'launch.json'), paths.launchJson);
});
exports.vsctsCli.startParse();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjdHMuY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvdnNjdHMuY2xpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTBDO0FBQzFDLHVDQUFzQztBQUl0QyxJQUFJLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUV0RCxRQUFBLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUE7QUFDckQsZ0JBQVEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBRXRDLGdCQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7SUFDdEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsNkNBQTZDLENBQUMsQ0FBQTtBQUN2RSxDQUFDLENBQUMsQ0FBQTtBQUlGLGdCQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO0lBQzNDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDbEQsWUFBWTtJQUNaLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUNuRyxDQUFDLENBQUMsQ0FBQTtBQUVGLGdCQUFRLENBQUMsVUFBVSxFQUFFLENBQUEifQ==