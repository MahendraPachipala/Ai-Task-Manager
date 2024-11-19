"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5CAi-Task-Manager%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CAi-Task-Manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5CAi-Task-Manager%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CAi-Task-Manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Ai_Task_Manager_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"D:\\\\Ai-Task-Manager\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: D_Ai_Task_Manager_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDQWktVGFzay1NYW5hZ2VyJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDQWktVGFzay1NYW5hZ2VyJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNZO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fwc3RvbmUvP2JlNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcQWktVGFzay1NYW5hZ2VyXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXEFpLVRhc2stTWFuYWdlclxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5CAi-Task-Manager%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CAi-Task-Manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/database */ \"(rsc)/./utils/database.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/user */ \"(rsc)/./models/user.js\");\n\n\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    scope: \"https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/gmail.modify\",\n                    access_type: \"offline\",\n                    prompt: \"consent\"\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, account }) {\n            if (account) {\n                console.log(account);\n                token.accessToken = account.access_token;\n                token.refreshToken = account.refresh_token;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            console.log(\"refreshToken\", token.refreshToken);\n            const sessionUser = await _models_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                email: session.user.email\n            });\n            if (sessionUser) {\n                session.user.id = sessionUser._id.toString();\n            }\n            session.user.accessToken = token.accessToken;\n            session.user.refreshToken = token.refreshToken;\n            return session;\n        },\n        async signIn ({ profile }) {\n            try {\n                await (0,_utils_database__WEBPACK_IMPORTED_MODULE_2__.connectToDB)();\n                const userExists = await _models_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                    email: profile.email\n                });\n                if (!userExists) {\n                    await _models_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create({\n                        email: profile.email,\n                        username: profile.name.replace(/\\s+/g, \"\").toLowerCase(),\n                        image: profile.picture\n                    });\n                }\n                return true;\n            } catch (error) {\n                console.log(\"Sign-in error:\", error);\n                return false;\n            }\n        }\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBQ1Y7QUFDZDtBQUVoQyxNQUFNSSxVQUFVSixnREFBUUEsQ0FBQztJQUN2QkssV0FBVztRQUNYSixzRUFBY0EsQ0FBQztZQUNiSyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CO1lBQzlDQyxlQUFlO2dCQUNiQyxRQUFRO29CQUNOQyxPQUFPO29CQUNQQyxhQUFhO29CQUNiQyxRQUFRO2dCQUNWO1lBQ0Y7UUFDRjtLQUNEO0lBQ0NDLFdBQVc7UUFFVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFO1lBQzFCLElBQUlBLFNBQVM7Z0JBQ1hDLFFBQVFDLEdBQUcsQ0FBQ0Y7Z0JBQ1pELE1BQU1JLFdBQVcsR0FBR0gsUUFBUUksWUFBWTtnQkFDeENMLE1BQU1NLFlBQVksR0FBR0wsUUFBUU0sYUFBYTtZQUM1QztZQUNBLE9BQU9QO1FBQ1Q7UUFFQSxNQUFNUSxTQUFRLEVBQUVBLE9BQU8sRUFBRVIsS0FBSyxFQUFFO1lBQzlCRSxRQUFRQyxHQUFHLENBQUMsZ0JBQWVILE1BQU1NLFlBQVk7WUFFN0MsTUFBTUcsY0FBYyxNQUFNekIsb0RBQUlBLENBQUMwQixPQUFPLENBQUM7Z0JBQ3JDQyxPQUFPSCxRQUFRSSxJQUFJLENBQUNELEtBQUs7WUFDM0I7WUFFQSxJQUFHRixhQUFhO2dCQUNkRCxRQUFRSSxJQUFJLENBQUNDLEVBQUUsR0FBR0osWUFBWUssR0FBRyxDQUFDQyxRQUFRO1lBQzVDO1lBRUFQLFFBQVFJLElBQUksQ0FBQ1IsV0FBVyxHQUFHSixNQUFNSSxXQUFXO1lBQzVDSSxRQUFRSSxJQUFJLENBQUNOLFlBQVksR0FBR04sTUFBTU0sWUFBWTtZQUM5QyxPQUFPRTtRQUNUO1FBR0EsTUFBTVEsUUFBTyxFQUFFQyxPQUFPLEVBQUU7WUFDdEIsSUFBSTtnQkFDRixNQUFNbEMsNERBQVdBO2dCQUVqQixNQUFNbUMsYUFBYSxNQUFNbEMsb0RBQUlBLENBQUMwQixPQUFPLENBQUM7b0JBQ3BDQyxPQUFPTSxRQUFRTixLQUFLO2dCQUN0QjtnQkFFQSxJQUFJLENBQUNPLFlBQVk7b0JBQ2YsTUFBTWxDLG9EQUFJQSxDQUFDbUMsTUFBTSxDQUFDO3dCQUNoQlIsT0FBT00sUUFBUU4sS0FBSzt3QkFDcEJTLFVBQVVILFFBQVFJLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsSUFBSUMsV0FBVzt3QkFDdERDLE9BQU9QLFFBQVFRLE9BQU87b0JBQ3hCO2dCQUNGO2dCQUVBLE9BQU87WUFDVCxFQUFFLE9BQU9DLE9BQU87Z0JBQ2R4QixRQUFRQyxHQUFHLENBQUMsa0JBQWtCdUI7Z0JBQzlCLE9BQU87WUFDVDtRQUNGO0lBQ0Y7QUFDRjtBQUUyQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcHN0b25lLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/ZGExYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IHsgY29ubmVjdFRvREIgfSBmcm9tIFwiQHV0aWxzL2RhdGFiYXNlXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiQG1vZGVscy91c2VyXCI7XG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICBHb29nbGVQcm92aWRlcih7XG4gICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcbiAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgIGF1dGhvcml6YXRpb246IHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzY29wZTogJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2FsZW5kYXIgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC91c2VyaW5mby5wcm9maWxlIGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvdXNlcmluZm8uZW1haWwgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9nbWFpbC5tb2RpZnknLFxuICAgICAgICBhY2Nlc3NfdHlwZTogJ29mZmxpbmUnLFxuICAgICAgICBwcm9tcHQ6ICdjb25zZW50JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG5dLFxuICBjYWxsYmFja3M6IHtcblxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCBhY2NvdW50IH0pIHtcbiAgICAgIGlmIChhY2NvdW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFjY291bnQpO1xuICAgICAgICB0b2tlbi5hY2Nlc3NUb2tlbiA9IGFjY291bnQuYWNjZXNzX3Rva2VuO1xuICAgICAgICB0b2tlbi5yZWZyZXNoVG9rZW4gPSBhY2NvdW50LnJlZnJlc2hfdG9rZW47XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVmcmVzaFRva2VuXCIsdG9rZW4ucmVmcmVzaFRva2VuKTtcblxuICAgICAgY29uc3Qgc2Vzc2lvblVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe1xuICAgICAgICBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsLFxuICAgICAgfSk7XG5cbiAgICAgIGlmKHNlc3Npb25Vc2VyKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHNlc3Npb25Vc2VyLl9pZC50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBzZXNzaW9uLnVzZXIuYWNjZXNzVG9rZW4gPSB0b2tlbi5hY2Nlc3NUb2tlbjtcbiAgICAgIHNlc3Npb24udXNlci5yZWZyZXNoVG9rZW4gPSB0b2tlbi5yZWZyZXNoVG9rZW47XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuXG5cbiAgICBhc3luYyBzaWduSW4oeyBwcm9maWxlIH0pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGNvbm5lY3RUb0RCKCk7XG5cbiAgICAgICAgY29uc3QgdXNlckV4aXN0cyA9IGF3YWl0IFVzZXIuZmluZE9uZSh7XG4gICAgICAgICAgZW1haWw6IHByb2ZpbGUuZW1haWwsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdXNlckV4aXN0cykge1xuICAgICAgICAgIGF3YWl0IFVzZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIGVtYWlsOiBwcm9maWxlLmVtYWlsLFxuICAgICAgICAgICAgdXNlcm5hbWU6IHByb2ZpbGUubmFtZS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBpbWFnZTogcHJvZmlsZS5waWN0dXJlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7IFxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTaWduLWluIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBmYWxzZTsgXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJjb25uZWN0VG9EQiIsIlVzZXIiLCJoYW5kbGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJhdXRob3JpemF0aW9uIiwicGFyYW1zIiwic2NvcGUiLCJhY2Nlc3NfdHlwZSIsInByb21wdCIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwiYWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsInJlZnJlc2hUb2tlbiIsInJlZnJlc2hfdG9rZW4iLCJzZXNzaW9uIiwic2Vzc2lvblVzZXIiLCJmaW5kT25lIiwiZW1haWwiLCJ1c2VyIiwiaWQiLCJfaWQiLCJ0b1N0cmluZyIsInNpZ25JbiIsInByb2ZpbGUiLCJ1c2VyRXhpc3RzIiwiY3JlYXRlIiwidXNlcm5hbWUiLCJuYW1lIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiaW1hZ2UiLCJwaWN0dXJlIiwiZXJyb3IiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        unique: [\n            true,\n            \"Email already existe!\"\n        ],\n        required: [\n            true,\n            \"Email is required\"\n        ]\n    },\n    username: {\n        type: String,\n        required: true,\n        unique: true,\n        match: /^[a-zA-Z0-9]{8,30}$/\n    },\n    image: {\n        type: String\n    }\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFDN0MsTUFBTUcsYUFBYSxJQUFJSCw0Q0FBTUEsQ0FBQztJQUMxQkksT0FBTTtRQUNGQyxNQUFLQztRQUNMQyxRQUFPO1lBQUM7WUFBSztTQUF3QjtRQUNyQ0MsVUFBUztZQUFDO1lBQUs7U0FBb0I7SUFDdkM7SUFFQUMsVUFBVTtRQUNWSixNQUFNQztRQUNORSxVQUFVO1FBQ1ZELFFBQVE7UUFDUkcsT0FBTztJQUNQO0lBRUFDLE9BQU07UUFDRk4sTUFBS0M7SUFDVDtBQUVKO0FBRUEsTUFBTU0sT0FBT1YsNENBQU1BLENBQUNVLElBQUksSUFBSVgsK0NBQUtBLENBQUMsUUFBT0U7QUFDekMsaUVBQWVTLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXBzdG9uZS8uL21vZGVscy91c2VyLmpzPzY1OTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTY2hlbWEsbW9kZWwsbW9kZWxzfSBmcm9tICdtb25nb29zZSc7XG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgZW1haWw6e1xuICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgdW5pcXVlOlt0cnVlLCdFbWFpbCBhbHJlYWR5IGV4aXN0ZSEnXSxcbiAgICAgICAgcmVxdWlyZWQ6W3RydWUsJ0VtYWlsIGlzIHJlcXVpcmVkJ10sXG4gICAgfSxcblxuICAgIHVzZXJuYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICBtYXRjaDogL15bYS16QS1aMC05XXs4LDMwfSQvLCBcbiAgICB9XG4gICAsXG4gICAgaW1hZ2U6e1xuICAgICAgICB0eXBlOlN0cmluZ1xuICAgIH1cblxufSk7XG5cbmNvbnN0IFVzZXIgPSBtb2RlbHMuVXNlciB8fCBtb2RlbChcIlVzZXJcIixVc2VyU2NoZW1hKTtcbmV4cG9ydCBkZWZhdWx0IFVzZXI7Il0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwiVXNlclNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInVuaXF1ZSIsInJlcXVpcmVkIiwidXNlcm5hbWUiLCJtYXRjaCIsImltYWdlIiwiVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/user.js\n");

/***/ }),

/***/ "(rsc)/./utils/database.js":
/*!***************************!*\
  !*** ./utils/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDB: () => (/* binding */ connectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false;\nconst connectToDB = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    if (isConnected) {\n        console.log(\"MongoDB is already connectd\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n            dbName: \"ProductivePro\",\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        isConnected = true;\n        console.log(\"MongoDB connected\");\n    } catch (error) {\n        console.log(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9kYXRhYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsSUFBSUMsY0FBYztBQUVYLE1BQU1DLGNBQWM7SUFDdkJGLG1EQUFZLENBQUMsZUFBYztJQUUzQixJQUFHQyxhQUFZO1FBQ1hHLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0o7SUFFQSxJQUFHO1FBQ0MsTUFBTUwsdURBQWdCLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFDO1lBQzNDQyxRQUFPO1lBQ1BDLGlCQUFnQjtZQUNoQkMsb0JBQW1CO1FBQ3ZCO1FBRUFYLGNBQWM7UUFDZEcsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCLEVBQ0EsT0FBTVEsT0FBTTtRQUNSVCxRQUFRQyxHQUFHLENBQUNRO0lBQ2hCO0FBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcHN0b25lLy4vdXRpbHMvZGF0YWJhc2UuanM/MmI5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5sZXQgaXNDb25uZWN0ZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RUb0RCID0gYXN5bmMgKCkgPT57XG4gICAgbW9uZ29vc2Uuc2V0KCdzdHJpY3RRdWVyeScsdHJ1ZSk7XG5cbiAgICBpZihpc0Nvbm5lY3RlZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGlzIGFscmVhZHkgY29ubmVjdGQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeXtcbiAgICAgICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSx7XG4gICAgICAgICAgICBkYk5hbWU6XCJQcm9kdWN0aXZlUHJvXCIsXG4gICAgICAgICAgICB1c2VOZXdVcmxQYXJzZXI6dHJ1ZSxcbiAgICAgICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTp0cnVlLFxuICAgICAgICB9KVxuXG4gICAgICAgIGlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coJ01vbmdvREIgY29ubmVjdGVkJylcbiAgICB9XG4gICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsImlzQ29ubmVjdGVkIiwiY29ubmVjdFRvREIiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImRiTmFtZSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./utils/database.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5CAi-Task-Manager%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CAi-Task-Manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();