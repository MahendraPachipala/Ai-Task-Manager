"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Chat/page",{

/***/ "(app-pages-browser)/./utils/GeminiHistory.js":
/*!********************************!*\
  !*** ./utils/GeminiHistory.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GeminiHistory: function() { return /* binding */ GeminiHistory; }\n/* harmony export */ });\n/* harmony import */ var _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google/generative-ai */ \"(app-pages-browser)/./node_modules/@google/generative-ai/dist/index.mjs\");\n\nconst genAI = new _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.GoogleGenerativeAI(\"AIzaSyDcx3mcD4bVp3pq3LkuEKa0cvbrnUOyHg0\");\nconst model = genAI.getGenerativeModel({\n    model: \"gemini-1.5-flash\"\n});\nconst chat = model.startChat({\n    history: [\n        {\n            role: \"user\",\n            parts: [\n                {\n                    text: 'You are ProductivePro, an AI assistant. \\n          You will answer questions based solely on provided memories. \\n          If a question has no related memories, \\n          respond with: \"There are no memories related to your question.\\n          while giving more than one memory at a time in response give some space between them for each one starting.\\n          if you are giving links there must b\"'\n                }\n            ]\n        },\n        {\n            role: \"model\",\n            parts: [\n                {\n                    text: \"Great to meet you. What would you like to know?\"\n                }\n            ]\n        }\n    ]\n});\nasync function GeminiHistory(prompt) {\n    try {\n        let result = await chat.sendMessage(prompt);\n        console.log(result);\n        return result.response.text();\n    } catch (error) {\n        console.error(\"Error in GeminiHistory:\", error);\n        return \"There was an error processing your request.\";\n    }\n}\n_c = GeminiHistory;\n\nvar _c;\n$RefreshReg$(_c, \"GeminiHistory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3V0aWxzL0dlbWluaUhpc3RvcnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkQ7QUFDM0QsTUFBTUMsUUFBUSxJQUFJRCxxRUFBa0JBLENBQUNFLHlDQUFrQztBQUV2RSxNQUFNRyxRQUFRSixNQUFNSyxrQkFBa0IsQ0FBQztJQUFFRCxPQUFPO0FBQW1CO0FBRW5FLE1BQU1FLE9BQU9GLE1BQU1HLFNBQVMsQ0FBQztJQUMzQkMsU0FBUztRQUNQO1lBQ0VDLE1BQU07WUFDTkMsT0FBTztnQkFDTDtvQkFDRUMsTUFBTztnQkFNVDthQUNEO1FBQ0g7UUFDQTtZQUNFRixNQUFNO1lBQ05DLE9BQU87Z0JBQUM7b0JBQUVDLE1BQU07Z0JBQWtEO2FBQUU7UUFDdEU7S0FDRDtBQUNIO0FBRUEsZUFBZUMsY0FBY0MsTUFBTTtJQUNqQyxJQUFJO1FBQ0YsSUFBSUMsU0FBUyxNQUFNUixLQUFLUyxXQUFXLENBQUNGO1FBQ3BDRyxRQUFRQyxHQUFHLENBQUNIO1FBQ1osT0FBT0EsT0FBT0ksUUFBUSxDQUFDUCxJQUFJO0lBQzdCLEVBQUUsT0FBT1EsT0FBTztRQUNkSCxRQUFRRyxLQUFLLENBQUMsMkJBQTJCQTtRQUN6QyxPQUFPO0lBQ1Q7QUFDRjtLQVRlUDtBQWFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL0dlbWluaUhpc3RvcnkuanM/ZjAwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb29nbGVHZW5lcmF0aXZlQUkgfSBmcm9tIFwiQGdvb2dsZS9nZW5lcmF0aXZlLWFpXCI7XG5jb25zdCBnZW5BSSA9IG5ldyBHb29nbGVHZW5lcmF0aXZlQUkocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0VNSU5JX0tFWSk7XG4gXG5jb25zdCBtb2RlbCA9IGdlbkFJLmdldEdlbmVyYXRpdmVNb2RlbCh7IG1vZGVsOiBcImdlbWluaS0xLjUtZmxhc2hcIiB9KTtcblxuY29uc3QgY2hhdCA9IG1vZGVsLnN0YXJ0Q2hhdCh7XG4gIGhpc3Rvcnk6IFtcbiAgICB7XG4gICAgICByb2xlOiBcInVzZXJcIixcbiAgICAgIHBhcnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBgWW91IGFyZSBQcm9kdWN0aXZlUHJvLCBhbiBBSSBhc3Npc3RhbnQuIFxuICAgICAgICAgIFlvdSB3aWxsIGFuc3dlciBxdWVzdGlvbnMgYmFzZWQgc29sZWx5IG9uIHByb3ZpZGVkIG1lbW9yaWVzLiBcbiAgICAgICAgICBJZiBhIHF1ZXN0aW9uIGhhcyBubyByZWxhdGVkIG1lbW9yaWVzLCBcbiAgICAgICAgICByZXNwb25kIHdpdGg6IFwiVGhlcmUgYXJlIG5vIG1lbW9yaWVzIHJlbGF0ZWQgdG8geW91ciBxdWVzdGlvbi5cbiAgICAgICAgICB3aGlsZSBnaXZpbmcgbW9yZSB0aGFuIG9uZSBtZW1vcnkgYXQgYSB0aW1lIGluIHJlc3BvbnNlIGdpdmUgc29tZSBzcGFjZSBiZXR3ZWVuIHRoZW0gZm9yIGVhY2ggb25lIHN0YXJ0aW5nLlxuICAgICAgICAgIGlmIHlvdSBhcmUgZ2l2aW5nIGxpbmtzIHRoZXJlIG11c3QgYlwiYCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICByb2xlOiBcIm1vZGVsXCIsXG4gICAgICBwYXJ0czogW3sgdGV4dDogXCJHcmVhdCB0byBtZWV0IHlvdS4gV2hhdCB3b3VsZCB5b3UgbGlrZSB0byBrbm93P1wiIH1dLFxuICAgIH0sXG4gIF0sXG59KTtcblxuYXN5bmMgZnVuY3Rpb24gR2VtaW5pSGlzdG9yeShwcm9tcHQpIHtcbiAgdHJ5IHtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY2hhdC5zZW5kTWVzc2FnZShwcm9tcHQpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdC5yZXNwb25zZS50ZXh0KCk7IFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBHZW1pbmlIaXN0b3J5OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFwiVGhlcmUgd2FzIGFuIGVycm9yIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LlwiO1xuICB9XG59XG5cblxuXG5leHBvcnQgIHtHZW1pbmlIaXN0b3J5fTtcbiJdLCJuYW1lcyI6WyJHb29nbGVHZW5lcmF0aXZlQUkiLCJnZW5BSSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HRU1JTklfS0VZIiwibW9kZWwiLCJnZXRHZW5lcmF0aXZlTW9kZWwiLCJjaGF0Iiwic3RhcnRDaGF0IiwiaGlzdG9yeSIsInJvbGUiLCJwYXJ0cyIsInRleHQiLCJHZW1pbmlIaXN0b3J5IiwicHJvbXB0IiwicmVzdWx0Iiwic2VuZE1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/GeminiHistory.js\n"));

/***/ })

});