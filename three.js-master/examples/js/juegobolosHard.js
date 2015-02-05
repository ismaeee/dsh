   
	//Juego de bolos creado por Ismael Santos Cabaña y Andres David Ariza Pallarés



    var loteria = false;//para strike 
    var premio = false;

    var contadorPrimera = 0;
    var tiradas = 0,ctiradas=0;

    var flag = false;
    var banderaTirar = false;
    var puntuaciones  = []; //Array con puntuaciones

    var todosNiveles = false;
    var mostrarPuntuacion = false;
 
    var noSeguir = false;
    var sphere;
    var scene;
    var potencia = 1;
    var empiezaTirar = false;
    var tirar = false;
    var resistencia = 0;
    var sonido = false;


    var objetoBolos = [];//array de objetos par pode trtarlos


    //Para saber si ya ha hecho el primer contato con el bolo
    var fbolos = [];


    var ind = 0;
    for(;ind<10;ind++){ fbolos[ind] = false;}


    $(function () {


        var manager = new THREE.LoadingManager();
        
        manager.onProgress = function ( item, loaded, total ) {

                console.log( item, loaded, total );

        };

        var texture = new THREE.Texture();

        var onProgress = function ( xhr ) {
                if ( xhr.lengthComputable ) {
                    var percentComplete = xhr.loaded / xhr.total * 100;
                    console.log( Math.round(percentComplete, 2) + '% downloaded' );
                }
        };

        var onError = function ( xhr ) {
        };


   



/*
 ----------------------------------------------------------------------------------------------------------- 
 -----------------------------------------------------------------------------------------------------------
         BOLOS            BOLOS            BOLOS            BOLOS            BOLOS            BOLOS     
 ----------------------------------------------------------------------------------------------------------- 
 -----------------------------------------------------------------------------------------------------------
 */

//Para mover el conjunto  de bolos más facilmente
 var bloqueXbolos = -4;
 var bloqueZbolos = -17;
 var bloqueYbolos = 0;



                //Bolo 1 con MTL
                var loader = new THREE.OBJMTLLoader();
                loader.load( 'obj/bowling/bolo_textura.obj', 'obj/bowling/bolo_textura.mtl', function ( object ) {

                    object.position.x = 0 + bloqueXbolos;
                    object.position.y = 0 + bloqueYbolos;
                    object.position.z = -30 + bloqueZbolos;
                    
                    objetoBolos[objetoBolos.length] = object;
                    scene.add( object );

                }, onProgress, onError );


                //Bolo 2 con MTL
                var loader = new THREE.OBJMTLLoader();
                loader.load( 'obj/bowling/bolo_textura.obj', 'obj/bowling/bolo_textura.mtl', function ( object ) {

                    object.position.x = 6 + bloqueXbolos;
                    object.position.y = 0 + bloqueYbolos;
                    object.position.z = -30 + bloqueZbolos;
                    
                    objetoBolos[objetoBolos.length] = object;
                    scene.add( object );

                }, onProgress, onError );


                //Bolo 3 con MTL
                var loader = new THREE.OBJMTLLoader();
                loader.load( 'obj/bowling/bolo_textura.obj', 'obj/bowling/bolo_textura.mtl', function ( object ) {

                    object.position.x = 12 + bloqueXbolos;
                    object.position.y = 0 + bloqueYbolos;
                    object.position.z = -30 + bloqueZbolos;                    
                    
                    objetoBolos[objetoBolos.length] = object;
                    scene.add( object );

                }, onProgress, onError );

                //Bolo 4 con MTL
                var loader = new THREE.OBJMTLLoader();
                loader.load( 'obj/bowling/bolo_textura.obj', 'obj/bowling/bolo_textura.mtl', function ( object ) {

                    object.position.x = 18 + bloqueXbolos;
                    object.position.y = 0 + bloqueYbolos;
                    object.position.z = -30 + bloqueZbolos;

                    objetoBolos[objetoBolos.length] = object;
                    scene.add( object );

                }, onProgress, onError );

                //Bolo 5 con MTL
                var loader = new THREE.OBJMTLLoader();
                loader.load( 'obj/bowling/bolo_textura.obj', 'obj/bowling/bolo_textura.mtl', function ( object ) {

                    object.position.x = 3 + bloqueXbolos;
                    object.position.y = 0 + bloqueYbolos;
                    object.position.z = -26 + bloqueZbolos;

                    objetoBolos[objetoBolos.length] = object;
                    scene.add( object );

                }, onProgress, onError );

                //Bolo 6 con MTL
                var loader = new THREE.OBJMTLLoader();
                loader.load( 'obj/bowling/bolo_textura.obj', 'obj/bowling/bolo_textura.mtl', function ( object ) {

                    object.position.x = 9 + bloqueXbolos;
                    object.position.y = 0 + bloqueYbolos;
                    object.position.z = -26 + bloqueZbolos;

                    objetoBolos[objetoBolos.length] = object;
                    scene.add( object );

                }, onProgress, onError );

                //Bolo 7 con MTL
                var loader = new THREE.OBJMTLLoader();
                loader.load( 'obj/bowling/bolo_textura.obj', 'obj/bowling/bolo_textura.mtl', function ( object ) {

                    object.position.x = 15 + bloqueXbolos;
                    object.position.y = 0 + bloqueYbolos;
                    object.position.z = -26 + bloqueZbolos;

                    objetoBolos[objetoBolos.length] = object;
                    scene.add( object );

                }, onProgress, onError );

                //Bolo 8 con MTL
                var loader = new THREE.OBJMTLLoader();
                loader.load( 'obj/bowling/bolo_textura.obj', 'obj/bowling/bolo_textura.mtl', function ( object ) {

                    object.position.x = 6 + bloqueXbolos;
                    object.position.y = 0 + bloqueYbolos;
                    object.position.z = -22 + bloqueZbolos;

                    objetoBolos[objetoBolos.length] = object;
                    scene.add( object );

                }, onProgress, onError );

                //Bolo 9 con MTL
                var loader = new THREE.OBJMTLLoader();
                loader.load( 'obj/bowling/bolo_textura.obj', 'obj/bowling/bolo_textura.mtl', function ( object ) {

                    object.position.x = 12 + bloqueXbolos;
                    object.position.y = 0 + bloqueYbolos;
                    object.position.z = -22 + bloqueZbolos;

                    objetoBolos[objetoBolos.length] = object;
                    scene.add( object );

                }, onProgress, onError );

                //Bolo 10 con MTL
                var loader = new THREE.OBJMTLLoader();
                loader.load( 'obj/bowling/bolo_textura.obj', 'obj/bowling/bolo_textura.mtl', function ( object ) {

                    object.position.x = 9 + bloqueXbolos;
                    object.position.y = 0 + bloqueYbolos;
					object.position.z = -18 + bloqueZbolos;
                    objetoBolos[objetoBolos.length] = object;
                    scene.add( object );

                }, onProgress, onError );   
/*
 ----------------------------------------------------------------------------------------------------------- 
 -----------------------------------------------------------------------------------------------------------
         PRUEBAS         PRUEBAS         PRUEBAS         PRUEBAS         PRUEBAS         PRUEBAS  
 ----------------------------------------------------------------------------------------------------------- 
 -----------------------------------------------------------------------------------------------------------
 */
/*
                    object.position.z = 18 + bloqueZbolos;
		            for(ind=0;ind<30;ind++){
						object.rotation.z = 1.4;
						object.rotation.y += 0; 			
					}
					object.position.y = 3;

*/
/*
 ----------------------------------------------------------------------------------------------------------- 
 -----------------------------------------------------------------------------------------------------------
         PRUEBAS         PRUEBAS         PRUEBAS         PRUEBAS         PRUEBAS         PRUEBAS  
 ----------------------------------------------------------------------------------------------------------- 
 -----------------------------------------------------------------------------------------------------------
 */


       




/*
 ----------------------------------------------------------------------------------------------------------- 
 -----------------------------------------------------------------------------------------------------------
         FIN BOLOS            FIN BOLOS            FIN BOLOS            FIN BOLOS            FIN BOLOS     
 ----------------------------------------------------------------------------------------------------------- 
 -----------------------------------------------------------------------------------------------------------
 */


        scene = new THREE.Scene();

        // create a camera, which defines where we're looking at.
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

        // create a render and set the size
        var renderer = new THREE.WebGLRenderer();

        renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
        renderer.setSize(window.innerWidth, window.innerHeight);


        // Plano del suelo... 
        var floortexture = new THREE.ImageUtils.loadTexture('fondoCarriles.jpg');
        var planeGeometry = new THREE.PlaneGeometry(110, 110, 1, 1);
        var planeMaterial = new THREE.MeshBasicMaterial({map: floortexture, side: THREE.Doubleside });
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);


  
        // Posición del plano del suelo
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 0
        plane.position.y = 0
        plane.position.z = 0

        // Se añade el plano a la escena
        scene.add(plane);


        
        //PAREDES DEL TINGLAO
        
        //Create pared1
        var cubeGeometry2 = new THREE.CubeGeometry(110, 30, 2);
        
        var fondoTexture = new THREE.ImageUtils.loadTexture('fondo.jpg');
        var fondoMaterial = new THREE.MeshBasicMaterial({map: fondoTexture });
        var fondo = new THREE.Mesh(cubeGeometry2.clone(), fondoMaterial);
        
        fondo.position.x = -40;
        fondo.position.y = 15;
        fondo.position.z = 0;
        fondo.rotation.y = Math.PI/90 * 45;
        scene.add(fondo);
        
        //create pared2
        var cubeGeometry3 = new THREE.CubeGeometry(100, 30, 2);
        
        var fondoTexture = new THREE.ImageUtils.loadTexture('fondo3.jpg');
        var fondoMaterial = new THREE.MeshBasicMaterial({map: fondoTexture });
        var fondo2 = new THREE.Mesh(cubeGeometry3.clone(), fondoMaterial);
        
        fondo2.position.x = 0;
        fondo2.position.y = 15;
        fondo2.position.z = -55;
        scene.add(fondo2);



        //create Bola de bolos, bolita , sphere... 

         var bolitaTexture = new THREE.ImageUtils.loadTexture('capitanamericaF.jpg');
         var sphereGeometry = new THREE.SphereGeometry(3.5, 10, 10);
         var sphereMaterial = new THREE.MeshBasicMaterial({map: bolitaTexture});
         sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the sphere
        sphere.position.x = 5;
        sphere.position.y = 4;
        sphere.position.z = 35;
        // add the sphere to the scene
    
        scene.add(sphere);


        // position and point the camera to the center of the scene
        camera.position.x = 55;
        camera.position.y = 30;
        camera.position.z = 40;
        camera.lookAt(scene.position);

        // add subtle ambient lighting
        var ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(ambientLight);

        // add spotlight for the shadows
        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(180, 90, 180);

        scene.add(spotLight);

       
        // add the output of the renderer to the html element
        $(".WebGL-output").append(renderer.domElement);


        render();


/*
 ----------------------------------------------------------------------------------------------------------- 
 -----------------------------------------------------------------------------------------------------------
            RENDER             RENDER             RENDER             RENDER             RENDER 
 ----------------------------------------------------------------------------------------------------------- 
 -----------------------------------------------------------------------------------------------------------
 */


        function render() {
            //var delta = clock.getDelta();
            moverBola();
            tirarBola();


            //Para no tirar todos los bolos una vez superado los cuatro niveles
            if(todosNiveles == false){ 
                contactoBolos(sphere);
            }
            //console.log('Tirar: '+tirar);
            //console.log('empezarTirar: '+empiezaTirar);
            //console.log('banderaTirar: '+banderaTirar);
            //console.log(todosNiveles==true && mostrarPuntuacion==false);       

            // render using requestAnimationFrame
            renderer.render(scene, camera);
            requestAnimationFrame(render);

        }


/*
 ----------------------------------------------------------------------------------------------------------- 
 -----------------------------------------------------------------------------------------------------------
            MOVER BOLA CON TECLADO         MOVER BOLA CON TECLADO         MOVER BOLA CON TECLADO
 ----------------------------------------------------------------------------------------------------------- 
 -----------------------------------------------------------------------------------------------------------
 */

var sube = true;
var baja = false;
        function moverBola()
                        {

                        if(empiezaTirar == false){
                            if(sube){
                                    if (sphere.position.x > -10 ){
                                        sphere.position.x -= ( 1.5);
                                    }else{
                                        sube = false;
                                        baja = true;
                                    }
                                }else{
                                    if (sphere.position.x < 15 ){
                                        sphere.position.x += ( 1.5);
                                    }else{
                                        sube = true;
                                        baja = false;
                                    }
                                }    
                        }     
                            // Empieza a preparar el tiro con potencia 
                             if (Key.isDown(Key.SPACE) && !tirar )
                            {
                                //Controlador o bandera para saber si se ha soltado el boton SPACE para tirar bola (mirar siguiente else if)
                                empiezaTirar = true;
                                

                                //Controla si el indicador de potencia debe subir o bajar
                                if(potencia > 97){
                                    flag = true;
                                }else if(potencia <= 11){
                                    flag =false;
                                }

                                if(!flag){
                                    potencia += 2;
                                }else{
                                    potencia -= 2;
                                }

                                
                                $("#Potencia").text('Potencia: '+potencia);
                                
                            }
                            else if (!Key.isDown(Key.SPACE) && empiezaTirar){
                                if(!banderaTirar){
                                    tirar = true;
                                    banderaTirar = true;
                                    noSeguir = false;
									tiradas++;

                                }
                                
                                ctiradas++;
                            }



        }



/*
 ----------------------------------------------------------------------------------------------------------- 
 -----------------------------------------------------------------------------------------------------------
         BOLA EMPIEZA A RODAR              BOLA EMPIEZA A RODAR              BOLA EMPIEZA A RODAR       
 ----------------------------------------------------------------------------------------------------------- 
 -----------------------------------------------------------------------------------------------------------
 */


        function tirarBola(){

            //Comprueba si la bola ha llegado al final del trayecto, de ser así la para
            if (sphere.position.z<(-100) && tirar==true){

                        tirar = false;


	console.log("todosNiveles: "+ todosNiveles +" mostrarPuntuacion: "+mostrarPuntuacion);

                        if(todosNiveles==true && mostrarPuntuacion==false){
                            mostrarPuntuacion = true;
                            noSeguir = true; //Indica que los bolos no deben seguir moviendose
                            puntuaciones[puntuaciones.length] = "Puntuación: "+contadorPrimera;
                            console.log(puntuaciones);

                            //Aparta bolos
                            for (ind = 0;ind<10;ind++){
                                if(fbolos[ind]){
                                    objetoBolos[ind].position.z = -70;
                                }
                            }
 						
                           console.log("Contador: "+contadorPrimera);
                           console.log("Tiradas: "+tiradas);

 						if(contadorPrimera != 10 && tiradas != 2){
 							//console.log("entra en primer if");
 						//Reinicia valores para la segunda tirada
                            sphere.position.z = 35;
                            potencia = 0;
                            banderaTirar = false;
                            empiezaTirar = false;
                            todosNiveles = false;
                    		sonido = false;
                    		mostrarPuntuacion = false;
							//mostrarPuntuacion = true;

                    	}
                    	else{

                            alerta();

                            function alerta(){
                                //un alert
                                alertify.alert("<b>Fin de Partida</b><br /><br /> Puntuación: "+contadorPrimera, function () {
                                    //aqui introducimos lo que haremos tras cerrar la alerta.
                                    location.href = 'http://proyectodsh2015.esy.es/three.js-master/examples/bolosDificil.html';  
                                });
                            }

                    		//console.log("entra en el else");
                    		tiradas = 0;
                    		contadorPrimera = 0;
                    		sphere.position.z = 35;
							potencia = 0;
                            banderaTirar = false;
                            empiezaTirar = false;
                            todosNiveles = false;
                    		sonido = false;
							mostrarPuntuacion = false;



                    		objetoBolos[0].position.z = -30 + bloqueZbolos; 
                    		objetoBolos[1].position.z = -30 + bloqueZbolos;
                    		objetoBolos[2].position.z = -30 + bloqueZbolos;
                    		objetoBolos[3].position.z = -30 + bloqueZbolos;
                    		objetoBolos[4].position.z = -26 + bloqueZbolos;
                    		objetoBolos[5].position.z = -26 + bloqueZbolos;
                    		objetoBolos[6].position.z = -26 + bloqueZbolos;
                    		objetoBolos[7].position.z = -22 + bloqueZbolos;
							objetoBolos[8].position.z = -22 + bloqueZbolos;
							objetoBolos[9].position.z = -18 + bloqueZbolos;

							for(ind = 0 ; ind<10;ind++){
								objetoBolos[ind].rotation.z = 0;
								objetoBolos[ind].rotation.y = 0;
								objetoBolos[ind].position.y = 0;
							}
                    	}

                            /*
                            for(ind = 0;ind<10;ind++){ console.log("ind: "+objetoBolos[ind].position.z)}
                             */
                            
                    

                     }
            }

            if(tirar && !noSeguir){
                //Según la potencia tira la bola
                sphere.position.z -= potencia*0.02;
                sphere.rotation.x -= 0.004*potencia*Math.random();
                sphere.rotation.z -= 0.002*potencia*Math.random();
                
                /* resistencia ... de momento omitida
                if( (sphere.position.z + ((resistencia+0.002)*1.001 )) > (sphere.position.z + (potencia/0.02))){
                    resistencia += 0.002;
                    resistencia *= 1.001;
                    sphere.position.z += resistencia;
                }
                 */

                //Comprueba posición de bola por consola, quitar    
                //console.log('Z: '+sphere.position.z);
                //console.log('X: '+sphere.position.x);
                //Muestra el sonido cuando la bola entra en contacto, más o menos, con los bolos. ** Posible mejora de precisión
                if (sphere.position.z <= -19 && !sonido){
                    //Marca la bandera de sonido como verdadera para que no vuelva a reproducir una y otra vez
                    sonido = true;
 
                    var snd = new Audio("bolos.mp3"); // buffers automatically when created
                    snd.play();
                }
            }

        }



/*
 ----------------------------------------------------------------------------------------------------------- 
 -----------------------------------------------------------------------------------------------------------
             CHOQUE BOLA CON BOLOS         CHOQUE BOLA CON BOLOS         CHOQUE BOLA CON BOLOS      
 ----------------------------------------------------------------------------------------------------------- 
 -----------------------------------------------------------------------------------------------------------
 */


        function contactoBolos(bola){ //Hecho de manera manual...
            if(!loteria && tirar){ //Tira pleno si cumple las condiciones
                loteria = true;
                if(Math.random() > 0.6 && potencia > 80 && bola.position.x > 4 && bola.position.x < 6){
                    console.log("TRIN TRIN TRIN");
                    premio = true;

                }
            }
            //Primera Linea
            
            else if (bola.position.z <= -22 && !noSeguir){
                    
                    
                    if(bola.position.x >= 1  &&  bola.position.x <= 8.5){                              
                            objetoBolos[9].position.z -= 0.20*potencia;
                            
                            var aux = objetoBolos[9].rotation.z + Math.random()*1.2;
                            if(aux < 1.4) { objetoBolos[9].rotation.z = aux;}
                            objetoBolos[9].rotation.y += Math.random()*0.5; 
                               
                            
                            if (!fbolos[9]){
                                objetoBolos[9].position.y = 3;
                                fbolos[9] = true;
                                contadorPrimera++;
                            }
                        
                    }
                    

                    //Segunda linea
                    if(bola.position.z <= -26){
                    

                        //Bolo izquierdo
                        if(bola.position.x >= -2 && bola.position.x <= 5.5){
                            objetoBolos[7].position.z -= 0.20*potencia;
                            
                            var aux = objetoBolos[7].rotation.z + Math.random()*1.2;
                            if(aux < 1.4) { objetoBolos[7].rotation.z = aux;}
                            objetoBolos[7].rotation.y += Math.random()*0.5; 

                            if(!fbolos[7]){
                                objetoBolos[7].position.y = 3;
                                fbolos[7] = true;
                                contadorPrimera++;
                            }
                        }

                        //bolo derecho
                        if(bola.position.x >= 2  && bola.position.x <= 10.5 ){
                            objetoBolos[8].position.z -= 0.20*potencia;
                        
                            var aux = objetoBolos[8].rotation.z + Math.random()*1.2;
                            if(aux < 1.4) { objetoBolos[8].rotation.z = aux;}
                            objetoBolos[8].rotation.y += Math.random()*0.5; 

                            if(!fbolos[8]){
                                objetoBolos[8].position.y = 3;
                                fbolos[8] = true;
                                contadorPrimera++;
                            }
                        }
                   


                        //Tercera Linea
                        if(bola.position.z <= -30){


                            //Bolo central
                            if(bola.position.x >= 0 && bola.position.x <= 9.5){
                                objetoBolos[5].position.z -= 0.20*potencia;
                            
                                var aux = objetoBolos[5].rotation.z + Math.random()*1.2;
                                if(aux < 1.4) { objetoBolos[5].rotation.z = aux;}
                                objetoBolos[5].rotation.y += Math.random()*0.5; 
                                if(!fbolos[5]){
                                    objetoBolos[5].position.y = 3;
                                    fbolos[5] = true;
                                    contadorPrimera++;
                                }
                            }

                            //bolo izquierdo
                            if(bola.position.x >= -4 && bola.position.x <= 5.5){
                                objetoBolos[4].position.z -= 0.20*potencia;
                            
                                var aux = objetoBolos[4].rotation.z + Math.random()*1.2;
                                if(aux < 1.4) { objetoBolos[4].rotation.z = aux;}
                                objetoBolos[4].rotation.y += Math.random()*0.5; 
                                if(!fbolos[4]){
                                    objetoBolos[4].position.y = 3;
                                    fbolos[4] = true;
                                    contadorPrimera++;
                                }
                            }

                            //bolo derecho
                            if(bola.position.x >= 4 && bola.position.x <= 13.5){
                                objetoBolos[6].position.z -= 0.20*potencia;
                            
                                var aux = objetoBolos[6].rotation.z + Math.random()*1.2;
                                if(aux < 1.4) { objetoBolos[6].rotation.z = aux;}
                                objetoBolos[6].rotation.y += Math.random()*0.5; 
                                if(!fbolos[6]){
                                    objetoBolos[6].position.y = 3;
                                    fbolos[6] = true;
                                    contadorPrimera++;
                                }
                            }


                            //Cuarta Linea
                            if(bola.position.z <= -34){

                                todosNiveles = true;


                                //Extremo izq, CR7
                                if((bola.position.x >= -7 && bola.position.x <= 2.5|| premio)){
                                    objetoBolos[0].position.z -= 0.20*potencia;
                                
                                    var aux = objetoBolos[0].rotation.z + Math.random()*1.2;
                                    if(aux < 1.4) { objetoBolos[0].rotation.z = aux;}
                                    objetoBolos[0].rotation.y += Math.random()*0.5; 
                                    if(!fbolos[0]){
                                        objetoBolos[0].position.y = 3;
                                        fbolos[0] = true;
                                        contadorPrimera++;
                                    }
                                }

                                //Media punta Izq
                                if(bola.position.x >= -2 && bola.position.x <= 5.5){
                                    objetoBolos[1].position.z -= 0.20*potencia;
                                
                                    var aux = objetoBolos[1].rotation.z + Math.random()*1.2;
                                    if(aux < 1.4) { objetoBolos[1].rotation.z = aux;}
                                    objetoBolos[1].rotation.y += Math.random()*0.5;  
                                    if(!fbolos[1]){
                                        objetoBolos[1].position.y = 3;                                    
                                        fbolos[1] = true;
                                        contadorPrimera++;                                  
                                    }
                                }

                                //Media punta Dcha
                                if(bola.position.x >= 2  && bola.position.x <= 10.5) {
                                    objetoBolos[2].position.z -= 0.20*potencia;
                                
                                    var aux = objetoBolos[2].rotation.z + Math.random()*1.2;
                                    if(aux < 1.4) { objetoBolos[2].rotation.z = aux;}
                                    objetoBolos[2].rotation.y += Math.random()*0.5; 
                                    if(!fbolos[2]){     
                                        objetoBolos[2].position.y = 3;                               
                                        fbolos[2] = true;
                                        contadorPrimera++;
                                    }
                                }

                                //Extremo derecha
                                if((bola.position.x >= 6 && bola.position.x <= 14.5) || premio){
                                    objetoBolos[3].position.z -= 0.20*potencia;
                                    
                                    var aux = objetoBolos[3].rotation.z + Math.random()*1.2;
                                    if(aux < 1.4) { objetoBolos[3].rotation.z = aux;}
                                    objetoBolos[3].rotation.y += Math.random()*0.5; 
                                    if(!fbolos[3]){
                                        objetoBolos[3].position.y = 3;
                                        fbolos[3] = true;
                                        contadorPrimera++;
                                    }
                                }                                
                            } //Fin4
                        }//Fin3
                    }//Fin2
            }//Fin1
        }//FinMetodo
    });


