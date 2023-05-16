let dia=document.querySelector("#dia")
let mes=document.querySelector("#mes")
let fecha=document.querySelector("#fecha")
let imagen=document.querySelector("#imagen")

dia.oninput=()=>{calcular()} 
mes.onchange=()=>{calcular()} 

const calcular=()=>{
  let vdia=parseInt(dia.value)
  let vmes=mes.value
  document.querySelector("#vdia").innerHTML=vdia
  document.querySelector("#vmes").innerHTML=vmes
  
  
  fecha.innerHTML="<img src='/Examen2/imgS/spinner.gif' width='200px' height='100px'>";
    setTimeout(()=>{   
     switch(vmes) {
    	case "Enero":
    		if(vdia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Capricornio.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Capricornio"
    		}else if(vdia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Acuario.jpg' width='200px' height='100px'>";		
				imagen.innerHTML="Acuario"
    		}
        break;
    	case "Febrero":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Acuario.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Acuario"
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Piscis.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Piscis"			
    		}
        break;
    	case "Marzo":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Piscis.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Piscis"
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Aries.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Aries"
    		}
        break;
    	case "Abril":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Aries.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Aries"
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Tauro.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Tauro"
    		}
        break;	
    	case "Mayo":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Tauro.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Tauro"
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Geminis.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Geminis"
    		}
        break;	
    	case "Junio":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Geminis.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Geminis"
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Cancer.jpg' width='200px' height='100px'>";	
				imagen.innerHTML="Cancer"	
    		}
        break;	
    	case "Julio":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Cancer.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Cancer"
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Leo.jpg' width='200px' height='100px'>";	
				imagen.innerHTML="Leo"		
    		}
        break;	
    	case "Agosto":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Leo.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Leo"
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Virgo.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Virgo"
    		}
        break;	
    	case "Septiembre":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Virgo.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Virgo"
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Libra.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Libra"
    		}
        break;	
    	case "Octubre":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Libra.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Libra"
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Escorpio.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Escorpio"
    		}
        break;	
    	case "Noviembre":
    		if(dia<=20) {
                imagen.innerHTML="<img src='/Examen2/imgS/Escorpio.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Escorpio"
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Sagitario.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Sagitario"
    		}
        break;	
    	case "Diciembre":
    		if(dia<=20) {
    			imagen.innerHTML="<img src='/Examen2/imgS/Sagitario.jpg' width='200px' height='100px'>";
				imagen.innerHTML="Sagitario"
    		}else if(dia>=21) {
                imagen.innerHTML="<img src='/Examen2/imgS/Capricornio.jpg' width='200px' height='100px'>";	
				imagen.innerHTML="Capricornio"
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