/*
    Scene
    -Lingkungan 3d yang akan menjadi aplikasi kita
    -3d world

    Camera
    -Camera yang kita gunakan untuk melihat ke ddalm 3d wordl tersebut

    Renderer 
    -Yang menampilkan hasil dari camera ke layar 
*/
import * as THREE from 'three';
const scene = new THREE.Scene();

/*
    1.FOV. Bukkan kamera how many wide is ur camera
    2.Aspectratio 
    3.Near Clip sebearapa dekat kamera bisa melihat
    4.Far Clip seberapa jauh kamera bisa melihat

*/
const cam = new THREE.PerspectiveCamera(45,innerWidth/innerHeight,1,100);
var renderer=new THREE.WebGLRenderer();

var box=new THREE.BoxGeometry(1,1,1);//Membuat Box dengan ukuran P:1 L:1 T:1
var boxMat=new THREE.MeshBasicMaterial({color:0xff0000}); //Box Berwarna Merah
var boxMesh=new THREE.Mesh(box,boxMat);

scene.add(boxMesh);
cam.position.z=5;//memudurkan posisi ke arah sumbu z 

renderer.setSize(innerWidth,innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene,cam);

window.addEventListener('resize',function(){
    renderer.setSize(this.window.innerWidth,this.window.innerHeight);
    ///cam.aspect=this.window.innerWidth,this.window.innerHeight
    cam.updateProjectionMatrix();
})



function draw(){
    requestAnimationFrame(draw)
    boxMesh.rotation.y +=0.01;
    renderer.render(scene,cam);
}

draw()




