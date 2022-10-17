<template></template>

<script setup >
import * as three from "three";
import { reactive, ref, watch, onMounted, onBeforeMount } from "vue";
//创建场景
const scene = new three.Scene();
// //创建渲染器
// const renderer = new three.WebGLRenderer();
// //创建相机
// // const camera = new three.PerspectiveCamera( 45, width / height, 1, 1000 );
// 创建正交相机
// const camera = new three.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
// //创建环境光
// const light = new three.AmbientLight( 0x404040 ); // soft white light
// //创建点光源
// // const light = new three.PointLight( 0xff0000, 1, 100 );
// //创建平行光
// const directionalLight = new three.DirectionalLight( 0xffffff, 0.5 );
// //创建聚光灯
// const spotLight = new three.SpotLight( 0xffffff );
//创建渲染器
let renderer = new three.WebGLRenderer({
  antialias: true, // true/false表示是否开启反锯齿
  alpha: false, // true/false 表示是否可以设置背景色透明
  precision: "highp", // highp/mediump/lowp 表示着色精度选择
  premultipliedAlpha: false, // true/false 表示是否可以设置像素深度（用来度量图像的分率）
  preserveDrawingBuffer: true, // true/false 表示是否保存绘图缓冲
  maxLights: 3, // 最大灯光数
  stencil: false, // false/true 表示是否使用模板字体或图案
});

let camera;
let ambientLight;
const geometry = new three.BoxGeometry();
const edgeMaterial = new three.LineBasicMaterial({
  color: '#5F9EA0',
  linewidth: 5,
});
const edges2 = new three.EdgesGeometry(geometry);
const line = new three.LineSegments(edges2, edgeMaterial);
const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new three.Mesh(geometry, material);

const init = () => {
  setCamera();
  setRenderer();
  //   setLight()
  scene.add(cube,line);
  render();
  animate();
};
const render = () => {
  renderer.render(scene, camera);
};
// 新建透视相机
const setCamera = () => {
  // 第二参数就是 长度和宽度比 默认采用浏览器  返回以像素为单位的窗口的内部宽度和高度
  camera = new three.PerspectiveCamera(
    30,
    window.innerWidth / window.innerHeight,
    2,
    100
  );
  camera.position.z = 5;
};
// 设置渲染器
const setRenderer = () => {
  // 设置画布的大小
  renderer.setSize(window.innerWidth, window.innerHeight);
  console.log(renderer);
  //这里 其实就是canvas 画布  renderer.domElement
  document.body.appendChild(renderer.domElement);
};
//设置环境光
const setLight = () => {
  ambientLight = new three.AmbientLight(0xffffff); // 环境光
  scene.add(ambientLight);
};
const animate = () => {
  requestAnimationFrame(animate.bind(this));
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  line.rotation.x += 0.01;
  line.rotation.y += 0.01;
  render();
};
init();
</script>
<style lang='scss' scoped>
</style>