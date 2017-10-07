"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
const beautylog = require("beautylog");
exports.beautylog = beautylog;
const path = require("path");
exports.path = path;
const smartcli = require("smartcli");
exports.smartcli = smartcli;
const smartfile = require("smartfile");
exports.smartfile = smartfile;
const smartdelay = require("smartdelay");
exports.smartdelay = smartdelay;
process.env.TS_NODE_COMPILER_OPTIONS = `
{
  "target":"es2015",
  "lib": [
    "ESNext"
  ]
}
`;
require('ts-node/register');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjdHMucGx1Z2lucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3ZzY3RzLnBsdWdpbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQkFBdUI7QUFFdkIsdUNBQXNDO0FBa0JwQyw4QkFBUztBQWpCWCw2QkFBNEI7QUFrQjFCLG9CQUFJO0FBakJOLHFDQUFvQztBQWtCbEMsNEJBQVE7QUFqQlYsdUNBQXNDO0FBbUJwQyw4QkFBUztBQWxCWCx5Q0FBd0M7QUFpQnRDLGdDQUFVO0FBZlosT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRzs7Ozs7OztDQU90QyxDQUFBO0FBRUQsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUEifQ==