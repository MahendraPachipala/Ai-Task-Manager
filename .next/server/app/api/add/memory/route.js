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
exports.id = "app/api/add/memory/route";
exports.ids = ["app/api/add/memory/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadd%2Fmemory%2Froute&page=%2Fapi%2Fadd%2Fmemory%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadd%2Fmemory%2Froute.js&appDir=D%3A%5CAi-Task-Manager%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CAi-Task-Manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadd%2Fmemory%2Froute&page=%2Fapi%2Fadd%2Fmemory%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadd%2Fmemory%2Froute.js&appDir=D%3A%5CAi-Task-Manager%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CAi-Task-Manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Ai_Task_Manager_app_api_add_memory_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/add/memory/route.js */ \"(rsc)/./app/api/add/memory/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/add/memory/route\",\n        pathname: \"/api/add/memory\",\n        filename: \"route\",\n        bundlePath: \"app/api/add/memory/route\"\n    },\n    resolvedPagePath: \"D:\\\\Ai-Task-Manager\\\\app\\\\api\\\\add\\\\memory\\\\route.js\",\n    nextConfigOutput,\n    userland: D_Ai_Task_Manager_app_api_add_memory_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/add/memory/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZGQlMkZtZW1vcnklMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmFkZCUyRm1lbW9yeSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFkZCUyRm1lbW9yeSUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDQWktVGFzay1NYW5hZ2VyJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDQWktVGFzay1NYW5hZ2VyJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fwc3RvbmUvP2FlYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcQWktVGFzay1NYW5hZ2VyXFxcXGFwcFxcXFxhcGlcXFxcYWRkXFxcXG1lbW9yeVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYWRkL21lbW9yeS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2FkZC9tZW1vcnlcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FkZC9tZW1vcnkvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxBaS1UYXNrLU1hbmFnZXJcXFxcYXBwXFxcXGFwaVxcXFxhZGRcXFxcbWVtb3J5XFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hZGQvbWVtb3J5L3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadd%2Fmemory%2Froute&page=%2Fapi%2Fadd%2Fmemory%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadd%2Fmemory%2Froute.js&appDir=D%3A%5CAi-Task-Manager%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CAi-Task-Manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/add/memory/route.js":
/*!*************************************!*\
  !*** ./app/api/add/memory/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/database */ \"(rsc)/./utils/database.js\");\n/* harmony import */ var _models_memories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/memories */ \"(rsc)/./models/memories.js\");\n\n\nconst POST = async (req)=>{\n    const { userId, memory } = await req.json();\n    if (memory == \"\") {\n        return new Response(JSON.stringify({\n            message: \"Memory cannot be empty\"\n        }), {\n            status: 500\n        });\n    }\n    try {\n        await (0,_utils_database__WEBPACK_IMPORTED_MODULE_0__.connectToDB)();\n        return _models_memories__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            userId\n        }).then((doc)=>{\n            if (doc) {\n                doc.memories.push(memory);\n                return doc.save().then(()=>{\n                    return new Response(JSON.stringify({\n                        message: \"Memory added successfully\"\n                    }), {\n                        status: 201\n                    });\n                });\n            } else {\n                const firstMemory = new _models_memories__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n                    userId,\n                    memories: [\n                        memory\n                    ]\n                });\n                return firstMemory.save().then(()=>{\n                    return new Response(JSON.stringify({\n                        message: \"First memory added successfully\"\n                    }), {\n                        status: 201\n                    });\n                });\n            }\n        }).catch((err)=>{\n            console.error(err);\n            return new Response(JSON.stringify({\n                message: \"Failed to add memory\",\n                error: err.message\n            }), {\n                status: 500\n            });\n        });\n    } catch (err) {\n        console.error(err);\n        return new Response(JSON.stringify({\n            message: \"Failed to connect to database\",\n            error: err.message\n        }), {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkZC9tZW1vcnkvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBQ047QUFFakMsTUFBTUUsT0FBTyxPQUFPQztJQUN2QixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUcsTUFBTUYsSUFBSUcsSUFBSTtJQUV6QyxJQUFHRCxVQUFRLElBQUc7UUFDVixPQUFPLElBQUlFLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFDQyxTQUFRO1FBQXdCLElBQUc7WUFBQ0MsUUFBTztRQUFHO0lBQ3RGO0lBQ0EsSUFBSTtRQUNBLE1BQU1YLDREQUFXQTtRQUVqQixPQUFPQyx3REFBUUEsQ0FBQ1csT0FBTyxDQUFDO1lBQUVSO1FBQU8sR0FDNUJTLElBQUksQ0FBQyxDQUFDQztZQUNILElBQUlBLEtBQUs7Z0JBQ0xBLElBQUlDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDWDtnQkFDbEIsT0FBT1MsSUFBSUcsSUFBSSxHQUFHSixJQUFJLENBQUM7b0JBQ25CLE9BQU8sSUFBSU4sU0FBU0MsS0FBS0MsU0FBUyxDQUFDO3dCQUFFQyxTQUFTO29CQUE0QixJQUFJO3dCQUFFQyxRQUFRO29CQUFJO2dCQUNoRztZQUNKLE9BQU87Z0JBQ0gsTUFBTU8sY0FBYyxJQUFJakIsd0RBQVFBLENBQUM7b0JBQzdCRztvQkFDQVcsVUFBVTt3QkFBQ1Y7cUJBQU87Z0JBQ3RCO2dCQUVBLE9BQU9hLFlBQVlELElBQUksR0FBR0osSUFBSSxDQUFDO29CQUMzQixPQUFPLElBQUlOLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQzt3QkFBRUMsU0FBUztvQkFBa0MsSUFBSTt3QkFBRUMsUUFBUTtvQkFBSTtnQkFDdEc7WUFDSjtRQUNKLEdBQ0NRLEtBQUssQ0FBQyxDQUFDQztZQUNKQyxRQUFRQyxLQUFLLENBQUNGO1lBQ2QsT0FBTyxJQUFJYixTQUFTQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFNBQVM7Z0JBQXdCWSxPQUFPRixJQUFJVixPQUFPO1lBQUMsSUFBSTtnQkFBRUMsUUFBUTtZQUFJO1FBQy9HO0lBQ1IsRUFBRSxPQUFPUyxLQUFLO1FBQ1ZDLFFBQVFDLEtBQUssQ0FBQ0Y7UUFDZCxPQUFPLElBQUliLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxTQUFTO1lBQWlDWSxPQUFPRixJQUFJVixPQUFPO1FBQUMsSUFBSTtZQUFFQyxRQUFRO1FBQUk7SUFDeEg7QUFDSixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9hcHAvYXBpL2FkZC9tZW1vcnkvcm91dGUuanM/YjYwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0VG9EQiB9IGZyb20gXCJAdXRpbHMvZGF0YWJhc2VcIjtcbmltcG9ydCBNZW1vcmllcyBmcm9tIFwiQG1vZGVscy9tZW1vcmllc1wiO1xuXG5leHBvcnQgY29uc3QgUE9TVCA9IGFzeW5jIChyZXEpID0+IHtcbiAgICBjb25zdCB7IHVzZXJJZCwgbWVtb3J5IH0gPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgaWYobWVtb3J5PT1cIlwiKXtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7bWVzc2FnZTpcIk1lbW9yeSBjYW5ub3QgYmUgZW1wdHlcIn0pLHtzdGF0dXM6NTAwfSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGNvbm5lY3RUb0RCKCk7XG5cbiAgICAgICAgcmV0dXJuIE1lbW9yaWVzLmZpbmRPbmUoeyB1c2VySWQgfSlcbiAgICAgICAgICAgIC50aGVuKChkb2MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvYy5tZW1vcmllcy5wdXNoKG1lbW9yeSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2Muc2F2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiTWVtb3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiIH0pLCB7IHN0YXR1czogMjAxIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdE1lbW9yeSA9IG5ldyBNZW1vcmllcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW1vcmllczogW21lbW9yeV0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaXJzdE1lbW9yeS5zYXZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJGaXJzdCBtZW1vcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIgfSksIHsgc3RhdHVzOiAyMDEgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJGYWlsZWQgdG8gYWRkIG1lbW9yeVwiLCBlcnJvcjogZXJyLm1lc3NhZ2UgfSksIHsgc3RhdHVzOiA1MDAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJGYWlsZWQgdG8gY29ubmVjdCB0byBkYXRhYmFzZVwiLCBlcnJvcjogZXJyLm1lc3NhZ2UgfSksIHsgc3RhdHVzOiA1MDAgfSk7XG4gICAgfVxufTtcbiJdLCJuYW1lcyI6WyJjb25uZWN0VG9EQiIsIk1lbW9yaWVzIiwiUE9TVCIsInJlcSIsInVzZXJJZCIsIm1lbW9yeSIsImpzb24iLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXNzYWdlIiwic3RhdHVzIiwiZmluZE9uZSIsInRoZW4iLCJkb2MiLCJtZW1vcmllcyIsInB1c2giLCJzYXZlIiwiZmlyc3RNZW1vcnkiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/add/memory/route.js\n");

/***/ }),

/***/ "(rsc)/./models/memories.js":
/*!****************************!*\
  !*** ./models/memories.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst memoriesschema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    userId: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"User\"\n    },\n    memories: [\n        {\n            type: String\n        }\n    ]\n});\nconst Memories = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Memories || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Memories\", memoriesschema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Memories);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvbWVtb3JpZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1HLGlCQUFpQixJQUFJSCw0Q0FBTUEsQ0FBQztJQUM5QkksUUFBTztRQUNIQyxNQUFLTCw0Q0FBTUEsQ0FBQ00sS0FBSyxDQUFDQyxRQUFRO1FBQzFCQyxLQUFJO0lBQ1I7SUFDQUMsVUFBUztRQUFDO1lBQUNKLE1BQUtLO1FBQU07S0FBRTtBQUM1QjtBQUVBLE1BQU1DLFdBQVdULDRDQUFNQSxDQUFDUyxRQUFRLElBQUlWLCtDQUFLQSxDQUFDLFlBQVdFO0FBRXJELGlFQUFlUSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9tb2RlbHMvbWVtb3JpZXMuanM/MTc4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NjaGVtYSwgbW9kZWwsbW9kZWxzfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgbWVtb3JpZXNzY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICB1c2VySWQ6e1xuICAgICAgICB0eXBlOlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICAgICAgcmVmOidVc2VyJ1xuICAgIH0sXG4gICAgbWVtb3JpZXM6W3t0eXBlOlN0cmluZ31dXG59KVxuXG5jb25zdCBNZW1vcmllcyA9IG1vZGVscy5NZW1vcmllcyB8fCBtb2RlbCgnTWVtb3JpZXMnLG1lbW9yaWVzc2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgTWVtb3JpZXM7Il0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwibWVtb3JpZXNzY2hlbWEiLCJ1c2VySWQiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsIm1lbW9yaWVzIiwiU3RyaW5nIiwiTWVtb3JpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/memories.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadd%2Fmemory%2Froute&page=%2Fapi%2Fadd%2Fmemory%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadd%2Fmemory%2Froute.js&appDir=D%3A%5CAi-Task-Manager%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CAi-Task-Manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();