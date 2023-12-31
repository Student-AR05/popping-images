const btn=document.querySelector("#throttle");
const throttleFunction=(func, delay)=>{
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if(now - prev> delay){
      prev = now;
      return func(...args); 
    }
  }
}
document.querySelector('#center').addEventListener("mousemove", throttleFunction((dets)=>{
  var div = document.createElement("div");
  div.classList.add("imagediv");
  div.style.left = dets.clientX+'px';
  div.style.top = dets.clientY+'px';
  var img= document.createElement("img");
  img.setAttribute("src", "https://images.unsplash.com/photo-1695051626405-e6a288c882d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80")  
  div.appendChild(img);

  document.body.appendChild(div);

  gsap.to(img,{
    y: "0",
    ease: Power3,
    duration: .5
  })

  gsap.to(img,{
    y: "100%",
    delay: .5,
    ease: Power2
  });

  setTimeout(function(){
    div.remove();
  },2000)
}, 400)
);
