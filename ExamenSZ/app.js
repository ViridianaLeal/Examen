let dia=document.querySelector("#dia")
let mes=document.querySelector("#mes")
let fecha=document.querySelector("#fecha")
let imagen=document.querySelector("#img")

dia.oninput=()=>{calcular()} 
mes.onchange=()=>{calcular()} 

const calcular=()=>{
  let vdia=parseInt(dia.value)
  let vmes=mes.value
  document.querySelector("#vdia").innerHTML=vdia
  document.querySelector("#vmes").innerHTML=vmes
  
  
  fecha.innerHTML="<img src='spinner.gif' width='200px' height='100px'>";
    setTimeout(()=>{   
     switch(vmes) {
    	case "Enero":
    		if(vdia<=20) {
    			imagen.innerHTML="<img src='imgS/Capricornio.jpg' width='200px' height='100px'>";
    		}else if(vdia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Acuario.jpg' width='200px' height='100px'>";		
    		}
        break;
    	case "Febrero":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Acuario.jpg' width='200px' height='100px'>";
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Piscis.jpg' width='200px' height='100px'>";			
    		}
        break;
    	case "Marzo":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Piscis.jpg' width='200px' height='100px'>";
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Aries.jpg' width='200px' height='100px'>";
    		}
        break;
    	case "Abril":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Aries.jpg' width='200px' height='100px'>";
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Tauro.jpg' width='200px' height='100px'>";
    		}
        break;	
    	case "Mayo":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Tauro.jpg' width='200px' height='100px'>";
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Geminis.jpg' width='200px' height='100px'>";
    		}
        break;	
    	case "Junio":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Geminis.jpg' width='200px' height='100px'>";
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Cancer.jpg' width='200px' height='100px'>";		
    		}
        break;	
    	case "Julio":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Cancer.jpg' width='200px' height='100px'>";
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Leo.jpg' width='200px' height='100px'>";			
    		}
        break;	
    	case "Agosto":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Leo.jpg' width='200px' height='100px'>";
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Virgo.jpg' width='200px' height='100px'>";
    		}
        break;	
    	case "Septiembre":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Virgo.jpg' width='200px' height='100px'>";
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Libra.jpg' width='200px' height='100px'>";
    		}
        break;	
    	case "Octubre":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Libra.jpg' width='200px' height='100px'>";
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Escorpio.jpg' width='200px' height='100px'>";
    		}
        break;	
    	case "Noviembre":
    		if(dia<=20) {
                imagen.innerHTML="<img src='/Examen2/imgS/Escorpio.jpg' width='200px' height='100px'>";
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Sagitario.jpg' width='200px' height='100px'>";
    		}
        break;	
    	case "Diciembre":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Sagitario.jpg' width='200px' height='100px'>";
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Capricornio.jpg' width='200px' height='100px'>";	
    		}
        break;	
    	}
fecha.innerHTML=`<div>
     <h1>Fecha</h1>
     <div><label>${vdia+' de '+vmes}</label></div>
     <div><label>${imagen}</label></div>
     </div>`
	
     
},2000);
}