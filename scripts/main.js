const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("battleArea"),
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);

//Camera
const camera = new THREE.PerspectiveCamera(
  10,
  window.innerWidth / window.innerHeight,
  1,
  2500
);

const scene = new THREE.Scene();

//Lights
let dirLight = new THREE.DirectionalLight(0x0000ff);
dirLight.position.set(25, 0, 0);

let dirLight2 = new THREE.DirectionalLight(0xffffff);
dirLight2.position.set(25, 0, 0);

let dirLight3 = new THREE.DirectionalLight(0x0000ff);
dirLight3.position.set(25, 0, 0);

let dirLight4 = new THREE.DirectionalLight(0x0000ff);
dirLight4.position.set(-25, 0, 0);

scene.add(dirLight, dirLight2, dirLight3, dirLight4);

const geometry = new THREE.SphereGeometry(20, 20, 30);

const material = new THREE.MeshPhongMaterial({
  color: 0x666666,
  specular: 0x222222,
  shininess: 225,
})

const mesh = new THREE.Mesh(geometry, material);

mesh.position.set(0, 0, -1000);

renderer.render(scene, camera);

scene.add(mesh);

//RENDER LOOP
requestAnimationFrame(render);

function render() {

  dirLight.position.x = 25 * Math.sin(Date.now() / 24000);
  dirLight.position.z = 25 * Math.cos(Date.now() / 2400);

  dirLight2.position.x = 25 * Math.sin(Date.now() / -24000);
  dirLight2.position.z = 25 * Math.cos(Date.now() / 2400);

  if(dirLight.position.z > .40){
    dirLight.color.r = 1;
    dirLight.color.g = 0;
    dirLight.color.b = 0;

    dirLight3.color.r = 0;
    dirLight3.color.g = 0;
    dirLight3.color.b = 1;

    dirLight.needsUpdate = true;
    dirLight3.needsUpdate = true;
  } else {
    dirLight.color.r = 0;
    dirLight.color.g = 0;
    dirLight.color.b = 1;

    dirLight3.color.r = 1;
    dirLight3.color.g = 0;
    dirLight3.color.b = 0;

    dirLight.needsUpdate = true;
    dirLight3.needsUpdate = true;
  }

  if(dirLight2.position.z < .40){
    dirLight2.color.r = 0;
    dirLight2.color.g = 0;
    dirLight2.color.b = 1;

    dirLight4.color.r = 1;
    dirLight4.color.g = 0;
    dirLight4.color.b = 0;

    dirLight2.needsUpdate = true;
    dirLight4.needsUpdate = true;
  } else {
    dirLight2.color.r = 1;
    dirLight2.color.g = 0;
    dirLight2.color.b = 0;

    dirLight4.color.r = 0;
    dirLight4.color.g = 0;
    dirLight4.color.b = 1;

    dirLight2.needsUpdate = true;
    dirLight4.needsUpdate = true;
  }

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}