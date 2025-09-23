import * as THREE from 'three';

const scene = new THREE.Scene(); // scene constructor
scene.background = new THREE.Color(0x202020);

const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth/window.innerHeight, 0.1, 1000
);

camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.ssetSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({color: 0x00ff88});
const cubeMash = new THREE.Mesh(geometry, material);
scene.add(cudeMash);

const light = new THREE.DirectionalLight(0xffffff,1);
light.position.set(2,2,5);
scene.add(light);

function animate(){
    requestAnimationFrame(animate);
    cubeMash.rotation.x +=0.01;
    renderer.render (scene, camera);
}

animate();