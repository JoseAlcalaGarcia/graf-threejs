import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear geometría y material para el cubo
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0,1.7,1.3);
scene.add(cube);

// Cubo 2
const material2 = new THREE.MeshStandardMaterial({ color: 0xff00ff });
const cube2 = new THREE.Mesh(geometry, material2);
cube2.position.set(0,0,0.5);
scene.add(cube2);

// Cubo 3
const material3 = new THREE.MeshStandardMaterial({ color: 0xffff44 });
const cube3 = new THREE.Mesh(geometry, material3);
cube3.position.set(0,-2.3,-0.5);
scene.add(cube3);

// Agregar una luz direccional y ajustar su posición
const directionalLight = new THREE.DirectionalLight(0xffddcc, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 5;

// Función de animación con rotación y renderizado
function animate() {
    cube.rotation.x += 0.09; // Rotación en eje X
    cube.rotation.y = 0.01; // Rotación en eje Y
    // cubo2
    cube2.rotation.x = 0.05; // Rotación en eje X
    cube2.rotation.y += 0.2; // Rotación en eje Y
    // cubo3
    cube3.rotation.x += 0.06; // Rotación en eje X
    cube3.rotation.y += 0.9; // Rotación en eje Y
    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);