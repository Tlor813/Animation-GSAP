// ✅ gsap loaded? 
console.log( gsap );

gsap.from('#inmid',{
  
    opacity: 0,
    duration: 1,
  delay: .5,
    
  })
  
  gsap.from('#incurve',{
    
    opacity: 0,
    duration: 2,
  delay: 1,
    
  })
  
  
  gsap.from('#bottom',{
    
    opacity: 0,
    duration: 3,
  delay:1.5,
    
  })
  
  gsap.from('#indot',{
    
    opacity: 0,
    duration: 3,
  delay:2,
    
  })
  
  gsap.from('#left',{
    
    opacity: 0,
    duration: 3,
  delay: 2.5,
    
  })
  
  gsap.from('#right',{
    
    opacity: 0,
    duration: 3,
  delay: 3,
  })
  
  gsap.from('#second',{
    
    opacity: 0,
    duration: 3,
  delay:4,
    
  })
  
  gsap.from('#top',{
    
    opacity: 0,
    duration: 3,
  delay: 4.5,
    
  })
  
  gsap.from('#R',{
    
    opacity: 0,
    duration: 3,
  delay: 5,
    
  })
  
  
  
  GSDevTools.create();
  
  
  
  
  gsap.from('#finger',{
  scale: 1.3,
    delay: 6,
  })
  
  
   
  
  
  
  gsap.to('#frontw',{
  rotation: "+=360", 
    repeat:-1, 
    ease: Linear.easeNone, 
    transformOrigin:"50% 50%",
    
    
    
    
          })
          
  gsap.to('#head',{
  rotation: 45,
    repeat: -1,
    transformOrigin:"right",
    duration: 1,
    yoyo: true,
    y: 1,
          })
  gsap.to('#body',{
  rotation: 3,
    repeat: -1,
    transformOrigin:"top",
    duration:1,
    yoyo: true,
    x: .5
          })
  
  gsap.to('#frontw',{
  scale: 1.1,
    duration: 1,
    repeat: -1,
    yoyo: true,
    x: .5
          })
  
  gsap.to('#backw',{
  scale: 1.1,
    duration: 1,
    repeat: -1,
    yoyo: true,
    
          })
  
  gsap.from('.ears',{
  y: 300 ,
    duration: 2, 
          })
  
  gsap.from('.arm',{
  y: 300 ,
    
  rotation: 90,
    duration: 2, 
   
          })
  
  gsap.from('.limb',{
  y: 300 ,
    duration: 2, 
          })

  gsap.from('.slash',{
  y: 300 ,
    x:  300,
    delay: 3,
    ease: 'expo.out',
    duration: .5,
          })
  
  gsap.from('.small',{
  y: 300 ,
    duration: 2, 
          })

  gsap.from('.leftBody',{
  y: 300 ,
    duration: 2, 
          })
  
  gsap.from('.backline',{
  y: 300 ,
    duration: 2, 
          })
  
  gsap.from('.middle',{
  y: 300 ,
    duration: 2, 
          })
  
  gsap.from('.backleg',{
  y: 300 ,
    duration: 2, 
          })
  
  gsap.from('#bug',{
   rotate: 25,
    duration: 1,
    repeat: 2,
    yoyo: true,
    
          })

  gsap.to('#bug',{
  scale: 1.3,
    delay:  3,
    repeat: 1,  
    yoyo : true,
          })