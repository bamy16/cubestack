import * as THREE from 'three'
import { TWEEN } from './jsm/libs/tween.module.min.js'
import Stats from './jsm/libs/stats.module.js'
import { TrackballControls } from './jsm/controls/TrackballControls.js'
//npm install three
//npm install tweenjs

function main(){
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
   
    var group = create_cube();
    scene.add(group);
    //setTimeout(function() {group2 = create_cube(); group2.translateX(4);},1000);
    //group2.matrix = group.matrix;
    //group2.customDepthMaterial = group.customDepthMaterial;
    //group2.translateX(1);
    //scene.add(group);

    //for(let i=1;i<3;i++){
    //        group = create_cube();
    //        group.translateX(i);
    //        scene.add(group);
    //}

    function create_cube(){
      //setTimeout(function() {
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
        //cara 1 - amarillo
        geometry1.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
        const material1 = new THREE.MeshBasicMaterial( { color: 0xfff000 } ); 
        material1.side=THREE.DoubleSide;
        var mesh1 = new THREE.Mesh( geometry1, material1 );
        mesh1.matrixAutoUpdate = true;

        //scene.add(mesh1);


        //cara 2
        geometry2.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
        const material2 = new THREE.MeshBasicMaterial( { color: 0x00fff0 } );
        material2.side=THREE.DoubleSide;
        var mesh2 = new THREE.Mesh( geometry2, material2 );
        mesh2.matrixAutoUpdate = true;
        if (tw_rotate_X(mesh2,mesh2.position.x, mesh2.position.y,mesh2.position.z, mesh2.rotation.x,mesh2.rotation.y, Math.PI/2, 300)){
            mesh2.rotateX( Math.PI/2);
            //8scene.add(mesh2);
        }


        geometry3.setAttribute( 'position',  new THREE.BufferAttribute( vertices, 3 ));
        const material3 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
        material3.side=THREE.DoubleSide;
        var mesh3 = new THREE.Mesh( geometry3, material3 );
        mesh3.matrixAutoUpdate = true;
        mesh3.matrix = mesh2.matrix; 
        if (tw_rotate_Y(mesh3,mesh3.position.x, mesh3.position.y,mesh3.position.z, Math.PI/2, mesh3.rotation.y, Math.PI/2, 2500)){
            //scene.add(mesh3);
        }



        geometry4.setAttribute( 'position',  new THREE.BufferAttribute( vertices, 3 ));
        const material4 = new THREE.MeshBasicMaterial( { color: 0x0fff0ff } );
        material4.side=THREE.DoubleSide;
        var mesh4 = new THREE.Mesh( geometry4, material4 );
        var pos_x =0;
        var pos_y =0;
        var pos_z =0;
        var rot_x = 0;
        var rot_y = 0;

        mesh4.matrixAutoUpdate = false;
        mesh4.translateY(1);
        pos_x = mesh4.position.x;
        pos_y = mesh4.position.y;
        pos_z = mesh4.position.z;
        rot_x = mesh4.rotation.x;
        rot_y = mesh4.rotation.y;
        setTimeout(function() {
            if(tw_rotate_X(mesh4, pos_x, pos_y, pos_z, rot_x, rot_y, Math.PI/2, 300)){
                //scene.add(mesh4); 
                mesh4.matrixAutoUpdate = true;
            }
        }, 6000);



        geometry5.setAttribute( 'position',  new THREE.BufferAttribute( vertices, 3 ));
        const material5 = new THREE.MeshBasicMaterial( { color: 0x0f0ff0 } );
        material5.side=THREE.DoubleSide;
        var mesh5 = new THREE.Mesh( geometry5, material5 );
        mesh5.matrix = mesh4.matrix;
        mesh4.matrixAutoUpdate = false;
        var pos_x_5 =0;
        var pos_y_5 =0;
        var pos_z_5 =0;
        var rot_x_5 = 0;
        var rot_y_5 = 0;

        mesh5.matrixAutoUpdate = false;
        mesh5.translateX(1);
        pos_x_5 = mesh5.position.x;
        pos_y_5 = mesh5.position.y;
        pos_z_5 = mesh5.position.z;
        rot_x_5 = mesh5.rotation.x;
        rot_y_5 = mesh5.rotation.y;
        setTimeout(function() {
            if(tw_rotate_Y(mesh5, pos_x_5, pos_y_5, pos_z_5, rot_x_5, rot_y_5, -Math.PI/2, 300)){
                //scene.add(mesh5); 
                mesh5.matrixAutoUpdate = true;
            }
        }, 9500);



        geometry6.setAttribute( 'position',  new THREE.BufferAttribute( vertices, 3 ));
        const material6 = new THREE.MeshBasicMaterial( { color: 0x0f0f0f } );
        material6.side=THREE.DoubleSide;
        var mesh6 = new THREE.Mesh( geometry6, material6 );
        var pos_z_f =0;
        pos_z_f = mesh6.position.z;
        pos_z_f = pos_z_f +1;
        setTimeout(function() {
            if(translate_Z(mesh6, mesh6.position.x, mesh6.position.y, mesh6.position.z, pos_z_f, 1000)){
            //mesh6.rotateX( Math.PI/2);
                //scene.add(mesh6); 
            }
        }, 11000);


        //scene.add(mesh1);
        //scene.add(mesh2);
        //scene.add(mesh3);
        //scene.add(mesh4);
        //scene.add(mesh5);
        //scene.add(mesh6);
        var group = new THREE.Group();
        group.add(mesh1);
        group.add(mesh2);           
        group.add(mesh3);
        group.add(mesh4);
        group.add(mesh5);
        group.add(mesh6);
        return group;
        
        
        //var group2 = group.clone(true);
        //scene.add(group2.translateX(5));        
        //var group_aux = [];

        //for (let i=0; i<6; i++) {
        //    for(let j=1; j<=10; j++){
        //    group_aux[i] = group.clone();
        //    group_aux[i].translateX(j);
        //    scene.add(group_aux[i]);
        //    }
        //};

        //},3000);
    };

   



    function tw_rotate_X(mesh, pos_x, pos_y, pos_z, angle_iX, angleiY, angle_fX, t_delay){
        try{
            var tween = new TWEEN.Tween({ x: pos_x, y: pos_y, z: pos_z, xRotation: angle_iX, yRotation: angleiY })
           .to({ x: mesh.position.x, y: mesh.position.y, z: mesh.position.z, xRotation: angle_fX, yRotation: angleiY }, 2000)
           .onUpdate((coords) => {
                mesh.position.x = coords.x;
                mesh.position.y = coords.y;
                mesh.position.z = coords.z;
                mesh.rotation.x = coords.xRotation;
                mesh.rotation.y = coords.yRotation;

           })
           .repeat(0)
           .delay(t_delay);
            tween.start();
        }catch (error) {
            console.error(error);
            return -1;
        }
        return 1;
    };

    function tw_rotate_Y(mesh, pos_x, pos_y, pos_z, angle_iX, angleiY, angle_fY, t_delay){
        try{
            var tween = new TWEEN.Tween({ x: pos_x, y: pos_y, z: pos_z, xRotation: angle_iX, yRotation: angleiY })
           .to({ x: mesh.position.x, y: mesh.position.y, z: mesh.position.z, xRotation: angle_iX, yRotation: angle_fY }, 2000)
           .onUpdate((coords) => {
                mesh.position.x = coords.x;
                mesh.position.y = coords.y;
                mesh.position.z = coords.z;
                mesh.rotation.x = coords.xRotation;
                mesh.rotation.y = coords.yRotation;

           })
           .repeat(0)
           .delay(t_delay);
            tween.start();
        }catch (error) {
            console.error(error);
            return -1;
        }
        return 1;
    };
    function translate_Z(mesh,pos_x,pos_y,pos_z,pos_z_f,t_delay){
        try{
            var tween = new TWEEN.Tween({ x:  pos_x, y:  pos_y, z: pos_z })
           .to({ x: pos_x, y: pos_y, z: pos_z_f }, 100)
           .onUpdate((coords) => {
                mesh.position.x = coords.x;
                mesh.position.y = coords.y;
                mesh.position.z = coords.z;
           })
           .repeat(0)
           .delay(t_delay);
            tween.start();
        }catch (error) {
            console.error(error);
            return -1;
        }
        return 1;
    };
    function translate_Y(mesh){
        try{
            var tween = new TWEEN.Tween({ x:  mesh.position.y, y:  mesh.position.y, z:  mesh.position.y })
           .to({ x: mesh.position.x, y: mesh.translateY(1), z: mesh.position.z }, 2000)
           .onUpdate((coords) => {
                mesh.position.x = coords.x;
                mesh.position.y = coords.y;
                mesh.position.z = coords.z;
           })
           .repeat(0)
           .delay(t_delay);
            tween.start();
        }catch (error) {
            console.error(error);
            return -1;
        }
        return 1;
    };


   

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
    function animate() {
        requestAnimationFrame(animate);

        controls.update();

        TWEEN.update();

        renderer.render(scene, camera);

        stats.update();
    }


    rendering();

    animate();
};
main();
