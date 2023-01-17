import * as THREE from 'three'
import { OrbitControls } from './jsm/controls/OrbitControls.js'
import Stats from './jsm/libs/stats.module.js'
import { GUI } from './jsm/libs/lil-gui.module.min.js'
import { Plane } from 'three'

var camera, scene, renderer, controls;
var sphere, cube;

function init() {

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(0, 5, 1.5).setLength(100);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor("#233143");
  //renderer.setClearColor(0xcccccc);
  document.body.appendChild(renderer.domElement);
 
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  var plane = new THREE.GridHelper(100, 10);
  scene.add(plane);
    
  sphere = new THREE.Mesh(new THREE.SphereGeometry(10, 16, 8), new THREE.MeshBasicMaterial({color: "red", wireframe: true}));
  sphere.position.set(-20, 0, 0);
  cube = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), new THREE.MeshBasicMaterial({color: "green", wireframe: true}));
  cube.position.set(20, 0, 0);
  var worldAxis = new THREE.AxesHelper(20);
  scene.add(worldAxis);
  scene.add(sphere);
  scene.add(cube);
  
  var sphereAxis = new THREE.AxesHelper(20);
  sphere.add(sphereAxis);
  var cubeAxis = new THREE.AxesHelper(20);
  cube.add(cubeAxis);
}

var delta;
function animate() {
  requestAnimationFrame(animate);
  rendering();
}

function render() {
  renderer.render(scene, camera);
}
const rendering = function() {
    requestAnimationFrame(rendering);
    // Constantly rotate box
    scene.rotation.z -= 0.005;
    scene.rotation.x -= 0.01;
    renderer.render(scene, camera);
}

init();

animate();
