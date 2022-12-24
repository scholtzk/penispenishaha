/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */ /******/ (()=>{
    /******/ var __webpack_modules__ = {
        /***/ "./js/app.js": /*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/ /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images */ \"./js/images.js\");\n/* harmony import */ var _shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/vertex.glsl */ \"./js/shaders/vertex.glsl\");\n/* harmony import */ var _shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/fragment.glsl */ \"./js/shaders/fragment.glsl\");\n/* harmony import */ var _shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction lerp(start, end, t) {\n  return start * (1 - t) + end * t;\n}\nlet targetX = 0;\nlet targetY = 0;\nconst textureOne = new three__WEBPACK_IMPORTED_MODULE_3__.TextureLoader().load(_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].imageOne);\nconst textureTwo = new three__WEBPACK_IMPORTED_MODULE_3__.TextureLoader().load(_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].imageTwo);\nconst textureThree = new three__WEBPACK_IMPORTED_MODULE_3__.TextureLoader().load(_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].imageThree);\nconst textureFour = new three__WEBPACK_IMPORTED_MODULE_3__.TextureLoader().load(_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].imageFour);\nclass WebGL {\n  constructor() {\n    this.container = document.querySelector('main');\n    this.links = [...document.querySelectorAll('li')];\n    this.scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();\n    this.perspective = 1000;\n    this.sizes = new three__WEBPACK_IMPORTED_MODULE_3__.Vector2(0, 0);\n    this.offset = new three__WEBPACK_IMPORTED_MODULE_3__.Vector2(0, 0); // Positions of mesh on screen. Will be updated below.\n    this.uniforms = {\n      uTexture: {\n        value: new three__WEBPACK_IMPORTED_MODULE_3__.TextureLoader().load(_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].imageThree)\n      },\n      uAlpha: {\n        value: 0.0\n      },\n      uOffset: {\n        value: new three__WEBPACK_IMPORTED_MODULE_3__.Vector2(0.0, 0.0)\n      }\n    };\n    this.links.forEach((link, idx) => {\n      link.addEventListener('mouseenter', () => {\n        switch (idx) {\n          case 0:\n            this.uniforms.uTexture.value = textureOne;\n            break;\n          case 1:\n            this.uniforms.uTexture.value = textureTwo;\n            break;\n          case 2:\n            this.uniforms.uTexture.value = textureThree;\n            break;\n          case 3:\n            this.uniforms.uTexture.value = textureFour;\n            break;\n        }\n      });\n      link.addEventListener('mouseleave', () => {\n        this.uniforms.uAlpha.value = lerp(this.uniforms.uAlpha.value, 0.0, 0.1);\n      });\n    });\n    this.addEventListeners(document.querySelector('ul'));\n    this.setUpCamera();\n    this.onMouseMove();\n    this.createMesh();\n    this.render();\n  }\n  get viewport() {\n    let width = window.innerWidth;\n    let height = window.innerHeight;\n    let aspectRatio = width / height;\n    return {\n      width,\n      height,\n      aspectRatio\n    };\n  }\n  addEventListeners(element) {\n    element.addEventListener('mouseenter', () => {\n      this.linkHovered = true;\n    });\n    element.addEventListener('mouseleave', () => {\n      this.linkHovered = false;\n    });\n  }\n  setUpCamera() {\n    window.addEventListener('resize', this.onWindowResize.bind(this));\n    let fov = 180 * (2 * Math.atan(this.viewport.height / 2 / this.perspective)) / Math.PI;\n    this.camera = new three__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCamera(fov, this.viewport.aspectRatio, 0.1, 1000);\n    this.camera.position.set(0, 0, this.perspective);\n    this.renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGL1Renderer({\n      antialias: true,\n      alpha: true\n    });\n    this.renderer.setSize(this.viewport.width, this.viewport.height);\n    this.renderer.setPixelRatio(window.devicePixelRatio);\n    this.container.appendChild(this.renderer.domElement);\n  }\n  createMesh() {\n    this.geometry = new three__WEBPACK_IMPORTED_MODULE_3__.PlaneGeometry(1, 1, 20, 20);\n    this.material = new three__WEBPACK_IMPORTED_MODULE_3__.ShaderMaterial({\n      uniforms: this.uniforms,\n      vertexShader: (_shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_1___default()),\n      fragmentShader: (_shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_2___default()),\n      transparent: true\n      // wireframe: true,\n      // side: THREE.DoubleSide\n    });\n\n    this.mesh = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(this.geometry, this.material);\n    this.sizes.set(250, 250, 1);\n    this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);\n    this.mesh.position.set(this.offset.x, this.offset.y, 0);\n    this.scene.add(this.mesh);\n  }\n  onWindowResize() {\n    this.camera.aspect = this.viewport.aspectRatio;\n    this.camera.fov = 180 * (2 * Math.atan(this.viewport.height / 2 / this.perspective)) / Math.PI;\n    this.renderer.setSize(this.viewport.width, this.viewport.height);\n    this.camera.updateProjectionMatrix();\n  }\n  onMouseMove() {\n    window.addEventListener('mousemove', e => {\n      targetX = e.clientX;\n      targetY = e.clientY;\n    });\n  }\n  render() {\n    this.offset.x = lerp(this.offset.x, targetX, 0.1);\n    this.offset.y = lerp(this.offset.y, targetY, 0.1);\n    this.uniforms.uOffset.value.set((targetX - this.offset.x) * 0.0005, -(targetY - this.offset.y) * 0.0005);\n    // this.mesh.scale.set(this.sizes.x, this.sizes.y)\n    this.mesh.position.set(this.offset.x - window.innerWidth / 2, -this.offset.y + window.innerHeight / 2, 0);\n\n    // set uAlpha when list is hovered / unhovered\n    this.linkHovered ? this.uniforms.uAlpha.value = lerp(this.uniforms.uAlpha.value, 1.0, 0.1) : this.uniforms.uAlpha.value = lerp(this.uniforms.uAlpha.value, 0.0, 0.1);\n    for (let i = 0; i < this.links.length; i++) {\n      if (this.linkHovered) {\n        this.links[i].style.opacity = 0.2;\n      } else {\n        this.links[i].style.opacity = 1;\n      }\n    }\n    this.renderer.render(this.scene, this.camera);\n    window.requestAnimationFrame(this.render.bind(this));\n  }\n}\n\n// Set the offset so the the mouse pointer matches your gif's pointer\nvar cursorOffset = {\n  left: -30,\n  top: -20\n};\nnew WebGL();\n\n//# sourceURL=webpack://penispenishaha/./js/app.js?");
        /***/ },
        /***/ "./js/images.js": /*!**********************!*\
  !*** ./js/images.js ***!
  \**********************/ /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
            "use strict";
            eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/1.jpg */ "./images/1.jpg");\n/* harmony import */ var _images_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/2.jpg */ "./images/2.jpg");\n/* harmony import */ var _images_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/3.jpg */ "./images/3.jpg");\n/* harmony import */ var _images_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/4.jpg */ "./images/4.jpg");\n\n\n\n\nconst images = {\n  imageOne: _images_1_jpg__WEBPACK_IMPORTED_MODULE_0__["default"],\n  imageTwo: _images_2_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],\n  imageThree: _images_3_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],\n  imageFour: _images_4_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (images);\n\n//# sourceURL=webpack://penispenishaha/./js/images.js?');
        /***/ },
        /***/ "./images/1.jpg": /*!**********************!*\
  !*** ./images/1.jpg ***!
  \**********************/ /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
            "use strict";
            eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("https://scholtzk.github.io/penispenishaha/509cdfa3adb3f32beeab6d844884c618.jpg");\n\n//# sourceURL=webpack://penispenishaha/./images/1.jpg?');
        /***/ },
        /***/ "./images/2.jpg": /*!**********************!*\
  !*** ./images/2.jpg ***!
  \**********************/ /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
            "use strict";
            eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("https://scholtzk.github.io/penispenishaha/b550e1ef61e860b70e684b7aeca9ca52.jpg");\n\n//# sourceURL=webpack://penispenishaha/./images/2.jpg?');
        /***/ },
        /***/ "./images/3.jpg": /*!**********************!*\
  !*** ./images/3.jpg ***!
  \**********************/ /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
            "use strict";
            eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("https://scholtzk.github.io/penispenishaha/db8261b330ec24b3eb78f6a6ce8c3d32.jpg");\n\n//# sourceURL=webpack://penispenishaha/./images/3.jpg?');
        /***/ },
        /***/ "./images/4.jpg": /*!**********************!*\
  !*** ./images/4.jpg ***!
  \**********************/ /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
            "use strict";
            eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("https://scholtzk.github.io/penispenishaha/43494a818ae58aedc975ec308aec029b.jpg");\n\n//# sourceURL=webpack://penispenishaha/./images/4.jpg?');
        /***/ },
        /***/ "./js/shaders/fragment.glsl": /*!**********************************!*\
  !*** ./js/shaders/fragment.glsl ***!
  \**********************************/ /***/ (module)=>{
            eval('module.exports = "uniform sampler2D uTexture;\\nuniform float uAlpha;\\nuniform vec2 uOffset;\\nvarying vec2 vUv;\\nvec3 rgbShift(sampler2D textureimage, vec2 uv, vec2 offset) {\\n\\tfloat r = texture2D(textureimage, uv + offset).r;\\n\\tvec2 gb = texture2D(textureimage, uv).gb;\\n\\treturn vec3(r, gb);\\n}\\nvoid main() {\\n\\tvec3 color = rgbShift(uTexture, vUv, uOffset);\\n\\tgl_FragColor = vec4(color, uAlpha);\\n}\\n"\n\n//# sourceURL=webpack://penispenishaha/./js/shaders/fragment.glsl?');
        /***/ },
        /***/ "./js/shaders/vertex.glsl": /*!********************************!*\
  !*** ./js/shaders/vertex.glsl ***!
  \********************************/ /***/ (module)=>{
            eval('module.exports = "uniform sampler2D uTexture;\\nuniform vec2 uOffset;\\nvarying vec2 vUv;\\nfloat M_PI = 3.141529;\\nvec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {\\n\\tposition.x = position.x + (sin(uv.y * M_PI) * offset.x);\\n\\tposition.y = position.y + (sin(uv.x * M_PI) * offset.y);\\n\\treturn position;\\n}\\nvoid main() {\\n\\tvUv = uv;\\n\\tvec3 newPosition = deformationCurve(position, uv, uOffset);\\n\\tgl_Position = (projectionMatrix * modelViewMatrix) * vec4(newPosition, 1.0);\\n}\\n"\n\n//# sourceURL=webpack://penispenishaha/./js/shaders/vertex.glsl?');
        /***/ },
        /***/ "./node_modules/three/build/three.module.js": /*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/ /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
            "use strict";
        /***/ }
    };
    /************************************************************************/ /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/ /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/ if (cachedModule !== undefined) /******/ return cachedModule.exports;
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = __webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {}
        };
        /******/ /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/ /******/ // Return the exports of the module
        /******/ return module.exports;
    /******/ }
    /******/ /************************************************************************/ /******/ /* webpack/runtime/compat get default export */ /******/ (()=>{
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = (module)=>{
            /******/ var getter = module && module.__esModule ? /******/ ()=>module["default"] : /******/ ()=>module;
            /******/ __webpack_require__.d(getter, {
                a: getter
            });
            /******/ return getter;
        /******/ };
    /******/ })();
    /******/ /******/ /* webpack/runtime/define property getters */ /******/ (()=>{
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = (exports, definition)=>{
            /******/ for(var key in definition)/******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) /******/ Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        /******/ };
    /******/ })();
    /******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/ (()=>{
        /******/ __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
    /******/ })();
    /******/ /******/ /* webpack/runtime/make namespace object */ /******/ (()=>{
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = (exports)=>{
            /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            /******/ Object.defineProperty(exports, "__esModule", {
                value: true
            });
        /******/ };
    /******/ })();
    /******/ /************************************************************************/ /******/ /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module can't be inlined because the eval devtool is used.
    /******/ var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ /******/ })();

//# sourceMappingURL=index.c3cb5631.js.map