"use strict";
// THIS FILE IS AUTOMATICALLY GENERATED. TO UPDATE THIS FILE YOU NEED TO CHANGE THE
// CORRESPONDING JSON SCHEMA FILE, THEN RUN devkit-admin build (or bazel build ...).
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Specify which package manager tool to use.
 */
var PackageManager;
(function (PackageManager) {
    PackageManager["Cnpm"] = "cnpm";
    PackageManager["Npm"] = "npm";
    PackageManager["Yarn"] = "yarn";
})(PackageManager = exports.PackageManager || (exports.PackageManager = {}));
/**
 * Specifies the change detection strategy.
 */
var ChangeDetection;
(function (ChangeDetection) {
    ChangeDetection["Default"] = "Default";
    ChangeDetection["OnPush"] = "OnPush";
})(ChangeDetection = exports.ChangeDetection || (exports.ChangeDetection = {}));
/**
 * The file extension or preprocessor to use for style files.
 */
var Style;
(function (Style) {
    Style["Css"] = "css";
    Style["Less"] = "less";
    Style["Sass"] = "sass";
    Style["Scss"] = "scss";
    Style["Styl"] = "styl";
})(Style = exports.Style || (exports.Style = {}));
/**
 * Specifies the view encapsulation strategy.
 */
var ViewEncapsulation;
(function (ViewEncapsulation) {
    ViewEncapsulation["Emulated"] = "Emulated";
    ViewEncapsulation["Native"] = "Native";
    ViewEncapsulation["None"] = "None";
    ViewEncapsulation["ShadowDom"] = "ShadowDom";
})(ViewEncapsulation = exports.ViewEncapsulation || (exports.ViewEncapsulation = {}));
/**
 * The scope for the generated routing.
 */
var RoutingScope;
(function (RoutingScope) {
    RoutingScope["Child"] = "Child";
    RoutingScope["Root"] = "Root";
})(RoutingScope = exports.RoutingScope || (exports.RoutingScope = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJkaXN0LXNjaGVtYS9wYWNrYWdlcy9hbmd1bGFyL2NsaS9saWIvY29uZmlnL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsbUZBQW1GO0FBQ25GLG9GQUFvRjs7QUFvQ3BGOztHQUVHO0FBQ0gsSUFBWSxjQUlYO0FBSkQsV0FBWSxjQUFjO0lBQ3RCLCtCQUFhLENBQUE7SUFDYiw2QkFBVyxDQUFBO0lBQ1gsK0JBQWEsQ0FBQTtBQUNqQixDQUFDLEVBSlcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFJekI7QUFrR0Q7O0dBRUc7QUFDSCxJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDdkIsc0NBQW1CLENBQUE7SUFDbkIsb0NBQWlCLENBQUE7QUFDckIsQ0FBQyxFQUhXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBRzFCO0FBRUQ7O0dBRUc7QUFDSCxJQUFZLEtBTVg7QUFORCxXQUFZLEtBQUs7SUFDYixvQkFBVyxDQUFBO0lBQ1gsc0JBQWEsQ0FBQTtJQUNiLHNCQUFhLENBQUE7SUFDYixzQkFBYSxDQUFBO0lBQ2Isc0JBQWEsQ0FBQTtBQUNqQixDQUFDLEVBTlcsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBTWhCO0FBRUQ7O0dBRUc7QUFDSCxJQUFZLGlCQUtYO0FBTEQsV0FBWSxpQkFBaUI7SUFDekIsMENBQXFCLENBQUE7SUFDckIsc0NBQWlCLENBQUE7SUFDakIsa0NBQWEsQ0FBQTtJQUNiLDRDQUF1QixDQUFBO0FBQzNCLENBQUMsRUFMVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQUs1QjtBQTRERDs7R0FFRztBQUNILElBQVksWUFHWDtBQUhELFdBQVksWUFBWTtJQUNwQiwrQkFBZSxDQUFBO0lBQ2YsNkJBQWEsQ0FBQTtBQUNqQixDQUFDLEVBSFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFHdkIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIFRISVMgRklMRSBJUyBBVVRPTUFUSUNBTExZIEdFTkVSQVRFRC4gVE8gVVBEQVRFIFRISVMgRklMRSBZT1UgTkVFRCBUTyBDSEFOR0UgVEhFXG4vLyBDT1JSRVNQT05ESU5HIEpTT04gU0NIRU1BIEZJTEUsIFRIRU4gUlVOIGRldmtpdC1hZG1pbiBidWlsZCAob3IgYmF6ZWwgYnVpbGQgLi4uKS5cblxuLy8gdHNsaW50OmRpc2FibGU6bm8tZ2xvYmFsLXRzbGludC1kaXNhYmxlXG4vLyB0c2xpbnQ6ZGlzYWJsZVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVtYSB7XG4gICAgJHNjaGVtYT86IHN0cmluZztcbiAgICBjbGk/OiAgICAgQ2xpT3B0aW9ucztcbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IHByb2plY3QgbmFtZSB1c2VkIGluIGNvbW1hbmRzLlxuICAgICAqL1xuICAgIGRlZmF1bHRQcm9qZWN0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFBhdGggd2hlcmUgbmV3IHByb2plY3RzIHdpbGwgYmUgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBuZXdQcm9qZWN0Um9vdD86IHN0cmluZztcbiAgICBwcm9qZWN0cz86ICAgICAgIFByb2plY3RzO1xuICAgIHNjaGVtYXRpY3M/OiAgICAgU2NoZW1hdGljT3B0aW9ucztcbiAgICB2ZXJzaW9uOiAgICAgICAgIG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbGlPcHRpb25zIHtcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBzY2hlbWF0aWNzIGNvbGxlY3Rpb24gdG8gdXNlLlxuICAgICAqL1xuICAgIGRlZmF1bHRDb2xsZWN0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFNwZWNpZnkgd2hpY2ggcGFja2FnZSBtYW5hZ2VyIHRvb2wgdG8gdXNlLlxuICAgICAqL1xuICAgIHBhY2thZ2VNYW5hZ2VyPzogUGFja2FnZU1hbmFnZXI7XG4gICAgLyoqXG4gICAgICogQ29udHJvbCBDTEkgc3BlY2lmaWMgY29uc29sZSB3YXJuaW5nc1xuICAgICAqL1xuICAgIHdhcm5pbmdzPzogV2FybmluZ3M7XG59XG5cbi8qKlxuICogU3BlY2lmeSB3aGljaCBwYWNrYWdlIG1hbmFnZXIgdG9vbCB0byB1c2UuXG4gKi9cbmV4cG9ydCBlbnVtIFBhY2thZ2VNYW5hZ2VyIHtcbiAgICBDbnBtID0gXCJjbnBtXCIsXG4gICAgTnBtID0gXCJucG1cIixcbiAgICBZYXJuID0gXCJ5YXJuXCIsXG59XG5cbi8qKlxuICogQ29udHJvbCBDTEkgc3BlY2lmaWMgY29uc29sZSB3YXJuaW5nc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFdhcm5pbmdzIHtcbiAgICAvKipcbiAgICAgKiBTaG93IGEgd2FybmluZyB3aGVuIHRoZSBUeXBlU2NyaXB0IHZlcnNpb24gaXMgaW5jb21wYXRpYmxlLlxuICAgICAqL1xuICAgIHR5cGVzY3JpcHRNaXNtYXRjaD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogU2hvdyBhIHdhcm5pbmcgd2hlbiB0aGUgZ2xvYmFsIHZlcnNpb24gaXMgbmV3ZXIgdGhhbiB0aGUgbG9jYWwgb25lLlxuICAgICAqL1xuICAgIHZlcnNpb25NaXNtYXRjaD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdHMge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVtYXRpY09wdGlvbnMge1xuICAgIFwiQHNjaGVtYXRpY3MvYW5ndWxhcjpjbGFzc1wiPzogICAgIFNjaGVtYXRpY3NBbmd1bGFyQ2xhc3M7XG4gICAgXCJAc2NoZW1hdGljcy9hbmd1bGFyOmNvbXBvbmVudFwiPzogU2NoZW1hdGljc0FuZ3VsYXJDb21wb25lbnQ7XG4gICAgXCJAc2NoZW1hdGljcy9hbmd1bGFyOmRpcmVjdGl2ZVwiPzogU2NoZW1hdGljc0FuZ3VsYXJEaXJlY3RpdmU7XG4gICAgXCJAc2NoZW1hdGljcy9hbmd1bGFyOm1vZHVsZVwiPzogICAgU2NoZW1hdGljc0FuZ3VsYXJNb2R1bGU7XG4gICAgXCJAc2NoZW1hdGljcy9hbmd1bGFyOnBpcGVcIj86ICAgICAgU2NoZW1hdGljc0FuZ3VsYXJQaXBlO1xuICAgIFwiQHNjaGVtYXRpY3MvYW5ndWxhcjpzZXJ2aWNlXCI/OiAgIFNjaGVtYXRpY3NBbmd1bGFyU2VydmljZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY2hlbWF0aWNzQW5ndWxhckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIGRvZXMgbm90IGNyZWF0ZSB0ZXN0IGZpbGVzLlxuICAgICAqL1xuICAgIHNraXBUZXN0cz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIGlmIGEgc3BlYyBmaWxlIGlzIGdlbmVyYXRlZC5cbiAgICAgKi9cbiAgICBzcGVjPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY2hlbWF0aWNzQW5ndWxhckNvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIHN0cmF0ZWd5LlxuICAgICAqL1xuICAgIGNoYW5nZURldGVjdGlvbj86IENoYW5nZURldGVjdGlvbjtcbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgaWYgdGhlIGNvbXBvbmVudCBpcyBhbiBlbnRyeSBjb21wb25lbnQgb2YgZGVjbGFyaW5nIG1vZHVsZS5cbiAgICAgKi9cbiAgICBlbnRyeUNvbXBvbmVudD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIGlmIGRlY2xhcmluZyBtb2R1bGUgZXhwb3J0cyB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGV4cG9ydD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRmxhZyB0byBpbmRpY2F0ZSBpZiBhIGRpcmVjdG9yeSBpcyBjcmVhdGVkLlxuICAgICAqL1xuICAgIGZsYXQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyBpZiB0aGUgc3R5bGUgd2lsbCBiZSBpbiB0aGUgdHMgZmlsZS5cbiAgICAgKi9cbiAgICBpbmxpbmVTdHlsZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIGlmIHRoZSB0ZW1wbGF0ZSB3aWxsIGJlIGluIHRoZSB0cyBmaWxlLlxuICAgICAqL1xuICAgIGlubGluZVRlbXBsYXRlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBBbGxvd3Mgc3BlY2lmaWNhdGlvbiBvZiB0aGUgZGVjbGFyaW5nIG1vZHVsZS5cbiAgICAgKi9cbiAgICBtb2R1bGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHByZWZpeCB0byBhcHBseSB0byBnZW5lcmF0ZWQgc2VsZWN0b3JzLlxuICAgICAqL1xuICAgIHByZWZpeD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0b3IgdG8gdXNlIGZvciB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHNlbGVjdG9yPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEZsYWcgdG8gc2tpcCB0aGUgbW9kdWxlIGltcG9ydC5cbiAgICAgKi9cbiAgICBza2lwSW1wb3J0PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgaWYgYSBzcGVjIGZpbGUgaXMgZ2VuZXJhdGVkLlxuICAgICAqL1xuICAgIHNwZWM/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBmaWxlIGV4dGVuc2lvbiBvciBwcmVwcm9jZXNzb3IgdG8gdXNlIGZvciBzdHlsZSBmaWxlcy5cbiAgICAgKi9cbiAgICBzdHlsZT86IFN0eWxlO1xuICAgIC8qKlxuICAgICAqIFRoZSBmaWxlIGV4dGVuc2lvbiB0byBiZSB1c2VkIGZvciBzdHlsZSBmaWxlcy5cbiAgICAgKi9cbiAgICBzdHlsZWV4dD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHZpZXcgZW5jYXBzdWxhdGlvbiBzdHJhdGVneS5cbiAgICAgKi9cbiAgICB2aWV3RW5jYXBzdWxhdGlvbj86IFZpZXdFbmNhcHN1bGF0aW9uO1xufVxuXG4vKipcbiAqIFNwZWNpZmllcyB0aGUgY2hhbmdlIGRldGVjdGlvbiBzdHJhdGVneS5cbiAqL1xuZXhwb3J0IGVudW0gQ2hhbmdlRGV0ZWN0aW9uIHtcbiAgICBEZWZhdWx0ID0gXCJEZWZhdWx0XCIsXG4gICAgT25QdXNoID0gXCJPblB1c2hcIixcbn1cblxuLyoqXG4gKiBUaGUgZmlsZSBleHRlbnNpb24gb3IgcHJlcHJvY2Vzc29yIHRvIHVzZSBmb3Igc3R5bGUgZmlsZXMuXG4gKi9cbmV4cG9ydCBlbnVtIFN0eWxlIHtcbiAgICBDc3MgPSBcImNzc1wiLFxuICAgIExlc3MgPSBcImxlc3NcIixcbiAgICBTYXNzID0gXCJzYXNzXCIsXG4gICAgU2NzcyA9IFwic2Nzc1wiLFxuICAgIFN0eWwgPSBcInN0eWxcIixcbn1cblxuLyoqXG4gKiBTcGVjaWZpZXMgdGhlIHZpZXcgZW5jYXBzdWxhdGlvbiBzdHJhdGVneS5cbiAqL1xuZXhwb3J0IGVudW0gVmlld0VuY2Fwc3VsYXRpb24ge1xuICAgIEVtdWxhdGVkID0gXCJFbXVsYXRlZFwiLFxuICAgIE5hdGl2ZSA9IFwiTmF0aXZlXCIsXG4gICAgTm9uZSA9IFwiTm9uZVwiLFxuICAgIFNoYWRvd0RvbSA9IFwiU2hhZG93RG9tXCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NoZW1hdGljc0FuZ3VsYXJEaXJlY3RpdmUge1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyBpZiBkZWNsYXJpbmcgbW9kdWxlIGV4cG9ydHMgdGhlIGRpcmVjdGl2ZS5cbiAgICAgKi9cbiAgICBleHBvcnQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEZsYWcgdG8gaW5kaWNhdGUgaWYgYSBkaXJlY3RvcnkgaXMgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBmbGF0PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBBbGxvd3Mgc3BlY2lmaWNhdGlvbiBvZiB0aGUgZGVjbGFyaW5nIG1vZHVsZS5cbiAgICAgKi9cbiAgICBtb2R1bGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHByZWZpeCB0byBhcHBseSB0byBnZW5lcmF0ZWQgc2VsZWN0b3JzLlxuICAgICAqL1xuICAgIHByZWZpeD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0b3IgdG8gdXNlIGZvciB0aGUgZGlyZWN0aXZlLlxuICAgICAqL1xuICAgIHNlbGVjdG9yPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEZsYWcgdG8gc2tpcCB0aGUgbW9kdWxlIGltcG9ydC5cbiAgICAgKi9cbiAgICBza2lwSW1wb3J0PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIGRvZXMgbm90IGNyZWF0ZSB0ZXN0IGZpbGVzLlxuICAgICAqL1xuICAgIHNraXBUZXN0cz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIGlmIGEgc3BlYyBmaWxlIGlzIGdlbmVyYXRlZC5cbiAgICAgKi9cbiAgICBzcGVjPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY2hlbWF0aWNzQW5ndWxhck1vZHVsZSB7XG4gICAgLyoqXG4gICAgICogRmxhZyB0byBjb250cm9sIHdoZXRoZXIgdGhlIENvbW1vbk1vZHVsZSBpcyBpbXBvcnRlZC5cbiAgICAgKi9cbiAgICBjb21tb25Nb2R1bGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEZsYWcgdG8gaW5kaWNhdGUgaWYgYSBkaXJlY3RvcnkgaXMgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBmbGF0PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBBbGxvd3Mgc3BlY2lmaWNhdGlvbiBvZiB0aGUgZGVjbGFyaW5nIG1vZHVsZS5cbiAgICAgKi9cbiAgICBtb2R1bGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgcm91dGluZyBtb2R1bGUuXG4gICAgICovXG4gICAgcm91dGluZz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIHNjb3BlIGZvciB0aGUgZ2VuZXJhdGVkIHJvdXRpbmcuXG4gICAgICovXG4gICAgcm91dGluZ1Njb3BlPzogUm91dGluZ1Njb3BlO1xufVxuXG4vKipcbiAqIFRoZSBzY29wZSBmb3IgdGhlIGdlbmVyYXRlZCByb3V0aW5nLlxuICovXG5leHBvcnQgZW51bSBSb3V0aW5nU2NvcGUge1xuICAgIENoaWxkID0gXCJDaGlsZFwiLFxuICAgIFJvb3QgPSBcIlJvb3RcIixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY2hlbWF0aWNzQW5ndWxhclBpcGUge1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyBpZiBkZWNsYXJpbmcgbW9kdWxlIGV4cG9ydHMgdGhlIHBpcGUuXG4gICAgICovXG4gICAgZXhwb3J0PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBGbGFnIHRvIGluZGljYXRlIGlmIGEgZGlyZWN0b3J5IGlzIGNyZWF0ZWQuXG4gICAgICovXG4gICAgZmxhdD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQWxsb3dzIHNwZWNpZmljYXRpb24gb2YgdGhlIGRlY2xhcmluZyBtb2R1bGUuXG4gICAgICovXG4gICAgbW9kdWxlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEFsbG93cyBmb3Igc2tpcHBpbmcgdGhlIG1vZHVsZSBpbXBvcnQuXG4gICAgICovXG4gICAgc2tpcEltcG9ydD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBkb2VzIG5vdCBjcmVhdGUgdGVzdCBmaWxlcy5cbiAgICAgKi9cbiAgICBza2lwVGVzdHM/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyBpZiBhIHNwZWMgZmlsZSBpcyBnZW5lcmF0ZWQuXG4gICAgICovXG4gICAgc3BlYz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NoZW1hdGljc0FuZ3VsYXJTZXJ2aWNlIHtcbiAgICAvKipcbiAgICAgKiBGbGFnIHRvIGluZGljYXRlIGlmIGEgZGlyZWN0b3J5IGlzIGNyZWF0ZWQuXG4gICAgICovXG4gICAgZmxhdD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBkb2VzIG5vdCBjcmVhdGUgdGVzdCBmaWxlcy5cbiAgICAgKi9cbiAgICBza2lwVGVzdHM/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyBpZiBhIHNwZWMgZmlsZSBpcyBnZW5lcmF0ZWQuXG4gICAgICovXG4gICAgc3BlYz86IGJvb2xlYW47XG59XG4iXX0=