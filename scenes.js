let planeString2 = `
v 0.000000 49.100000 0.000000
v 1.000000 49.100000 0.000000
v 0.000000 48.900000 -1.00000
vt 1.000000 0.000000
vt 0.000000 1.000000
vt 0.000000 0.000000
vn 0.0000 1.0000 0.0000
f 1/1/1 2/2/1 3/3/1
`
let planeScenePerspective = new Scene([
  new RayTracedObject(Mesh.fromOBJ(planeString2), new VolumeShader()), 
  new RayTracedObject(new Sphere(new Vector3(0, 20, 0), 50), new MixShader(new DiffuseShader({r:0, g:0, b:255}), new MirrorShader(), .25)), 
  new RayTracedObject(new Sphere(new Vector3(0, -60, 0), 40), new MixShader(new DiffuseShader({r:0, g:0, b:255}), new MirrorShader(), .25))], 
  new Camera(
    new Vector3(0,0,100), 
    new Vector3(0,0,-1), 
    Vector3.up, 
    Camera.Perspective,
    Math.PI/4
    ), 
  [new SunLight(Vector3.one, new Vector3(0,-1,0)), new SunLight(Vector3.one, new Vector3(1,-1,1))]);




Scene.scene = planeScenePerspective;