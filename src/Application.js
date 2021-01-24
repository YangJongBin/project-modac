import * as THREE from 'three'

export default class Application
{
    constructor(props) { 
        // Options
        this.$canvas = props.$canvas;

        console.log(this.$canvas)

        // Load resources
        const scene = new THREE.Scene();
        const width = window.outerWidth;
        const height = window.outerHeight;
        const aspect = width/height;
        const D = 5;

        const camera = new THREE.OrthographicCamera(-D*aspect, D*aspect, D, -D, 1, 100);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(width, height);

        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshPhongMaterial({
            color: 0x555555,
            // ambient: 0x555555,
            // specular: 0xffffff,
            // shininess: 50,
            // shading: THREE.SmoothShading
        });
    
        const cube = new THREE.Mesh(geometry, material);

        scene.add(cube);
        scene.add(new THREE.AmbientLight(0x4000ff));

        const light = new THREE.PointLight(0xffffff, 6, 40);
        light.position.set(10, 20, 15);
        scene.add(light);

        camera.position.set(20, 20 ,20);
        camera.lookAt(scene.position);  
        
        renderer.render(scene, camera)
    }
}