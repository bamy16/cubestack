import * as THREE from 'three'
import { TrackballControls } from './jsm/controls/TrackballControls.js'

// Scene
const scene = new THREE.Scene();
// Camera
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 3000);
camera.position.z = 5; // Set camera position
// Renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#233143"); // Set background colour
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // Add renderer to HTML as a canvas element
// Make Canvas Responsive
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight); // Update size
    camera.aspect = window.innerWidth / window.innerHeight; // Update aspect ratio
    camera.updateProjectionMatrix(); // Apply changes
})
// Create box:
var geometry1 = new THREE.BufferGeometry();
var geometry2 = new THREE.BufferGeometry();
var geometry3 = new THREE.BufferGeometry();
var geometry4 = new THREE.BufferGeometry();
var geometry5 = new THREE.BufferGeometry();
var geometry6 = new THREE.BufferGeometry();

// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const vertices = new Float32Array( [
	0.0, 0.0, 0.0, 
	1.0, 0.0,  0.0, 
	0.0,  1.0,  0.0, 

	1.0, 0.0,  0.0, 
    1.0, 1.0,  0.0,
    0.0,  1.0,  0.0 
	
] );
const vertices2 = new Float32Array( [
	1.0, 0.0,  0.0,
	0.0, 1.0,  0.0,
	1.0,  0.0,  1.0,

    1.0,  0.0,  1.0,
    0.0, 1.0,  0.0,
    0.0, 1.0, 1.0

] );

//plano base
geometry1.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const material1 = new THREE.MeshBasicMaterial( { color: 0xfff000 } ); 
material1.side=THREE.DoubleSide;
const mesh1 = new THREE.Mesh( geometry1, material1 );
scene.add(mesh1); // Add box to canvas amarillo

//objeto rotado
geometry2.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const material2 = new THREE.MeshBasicMaterial( { color: 0x00fff0 } );
material2.side=THREE.DoubleSide;
var mesh2 = new THREE.Mesh( geometry2, material2 );
mesh2.rotateX( Math.PI/2);
scene.add(mesh2); // Add box to canvas verdecito databiz

geometry3.setAttribute( 'position',  new THREE.BufferAttribute( vertices, 3 ));
const material3 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
material3.side=THREE.DoubleSide;
var mesh3 = new THREE.Mesh( geometry3, material3 );
mesh3.rotateX( Math.PI/2);
mesh3.rotateY( Math.PI/2);
scene.add(mesh3); // Add box to canvas blanco

geometry4.setAttribute( 'position',  new THREE.BufferAttribute( vertices, 3 ));
const material4 = new THREE.MeshBasicMaterial( { color: 0x0fff0ff } );
material4.side=THREE.DoubleSide;
var mesh4 = new THREE.Mesh( geometry4, material4 );
mesh4.rotateX( Math.PI/2);
mesh4.rotateY( Math.PI/2);
mesh4.translateY(1);
mesh4.rotateX( Math.PI/2);
scene.add(mesh4); // Add box to canvas


geometry5.setAttribute( 'position',  new THREE.BufferAttribute( vertices, 3 ));
const material5 = new THREE.MeshBasicMaterial( { color: 0x0f0ff0 } );
material5.side=THREE.DoubleSide;
var mesh5 = new THREE.Mesh( geometry5, material5 );
mesh5.rotateX( Math.PI/2);
mesh5.rotateY( Math.PI/2);
mesh5.translateY(1);
mesh5.rotateX( Math.PI/2);
mesh5.translateY(1);
mesh5.rotateX( Math.PI/2);
scene.add(mesh5); // Add box to canvas


geometry6.setAttribute( 'position',  new THREE.BufferAttribute( vertices, 3 ));
const material6 = new THREE.MeshBasicMaterial( { color: 0x0f0f0f } );
material6.side=THREE.DoubleSide;
var mesh6 = new THREE.Mesh( geometry6, material6 );
mesh6.translateY(1);
mesh6.rotateX( Math.PI/2);

scene.add(mesh6); // Add box to canvas
//mesh3.rotation.setFromVector3(new THREE.Vector3( Math.PI / 2, 0, 0));
//scene.add(mesh2); // Add box to canvas

// Create spheres: 
const sphereMeshes = [];
const sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32); // Define geometry
const sphereMaterial = new THREE.MeshLambertMaterial({color: 0xC56CEF}); // Define material
for (let i=0; i<2; i++) {
    sphereMeshes[i] = new THREE.Mesh(sphereGeometry, sphereMaterial); // Build sphere
    sphereMeshes[i].position.set(0, 0, 0);
    scene.add(sphereMeshes[i]); // Add sphere to canvas
}
// Lights
const lights = []; // Storage for lights
// const lightHelpers = []; // Storage for light helpers
// Properties for each light
const lightValues = [
    {colour: 0x14D14A, intensity: 8, dist: 12, x: 1, y: 0, z: 8},
    {colour: 0xBE61CF, intensity: 6, dist: 12, x: -2, y: 1, z: -10},
    {colour: 0x00FFFF, intensity: 3, dist: 10, x: 0, y: 10, z: 1},
    {colour: 0x00FF00, intensity: 6, dist: 12, x: 0, y: -10, z: -1},
    {colour: 0x16A7F5, intensity: 6, dist: 12, x: 10, y: 3, z: 0},
    {colour: 0x90F615, intensity: 6, dist: 12, x: -10, y: -1, z: 0}
];
for (let i=0; i<6; i++) {
    // Loop 6 times to add each light to lights array
    // using the lightValues array to input properties
    lights[i] = new THREE.PointLight(
      lightValues[i]['colour'], 
      lightValues[i]['intensity'], 
      lightValues[i]['dist']
    );
  
    lights[i].position.set(
      lightValues[i]['x'], 
      lightValues[i]['y'], 
      lightValues[i]['z']
    );
  
    scene.add(lights[i]);
// Add light helpers for each light
    // lightHelpers[i] = new THREE.PointLightHelper(lights[i]);
    // scene.add(lightHelpers[i]);
};
//Trackball Controls for Camera 
const controls = new TrackballControls(camera, renderer.domElement); 
//controls.rotateSpeed = 4;
//controls.dynamicDampingFactor = 0.15;
// Axes Helper
 const axesHelper = new THREE.AxesHelper(5);
 scene.add( axesHelper ); // X axis = red, Y axis = green, Z axis = blue
// Trigonometry Constants for Orbital Paths 
let theta = 0; // Current angle
// Angle increment on each render
const dTheta = 2 * Math.PI / 100;
// Rendering Function
const rendering = function() {
    // Rerender every time the page refreshes (pause when on another tab)
    requestAnimationFrame(rendering);
// Update trackball controls
    controls.update();
// Constantly rotate box
    //scene.rotation.z -= 0.005;
    //scene.rotation.x -= 0.01;
//Increment theta, and update sphere coords based off new value        
    theta += dTheta;
// Store trig functions for sphere orbits 
    // MUST BE INSIDE RENDERING FUNCTION OR THETA VALUES ONLY GET SET ONCE
    const trigs = [
        {x: Math.cos(theta*1.05), y: Math.sin(theta*1.05), z: Math.cos(theta*1.05), r: 2},
        {x: Math.cos(theta*0.8), y: Math.sin(theta*0.8), z: Math.sin(theta*0.8), r: 2.25},
        {x: Math.cos(theta*1.25), y: Math.cos(theta*1.25), z: Math.sin(theta*1.25), r: 2.5},
        {x: Math.sin(theta*0.6), y: Math.cos(theta*0.6), z: Math.sin(theta*0), r: 2.75}
    ];
// Loop 4 times (for each sphere), updating the position 
    for (let i=0; i<2; i++) {
        sphereMeshes[i].position.x = trigs[i]['r'] * trigs[i]['x'];
        sphereMeshes[i].position.y = trigs[i]['r'] * trigs[i]['y'];
        sphereMeshes[i].position.z = trigs[i]['r'] * trigs[i]['z'];
    };
renderer.render(scene, camera);
}
rendering();