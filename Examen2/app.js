let dia=document.querySelector("#dia")
let mes=document.querySelector("#mes")
let fecha=document.querySelector("#fecha")
let imagen=""

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
    		if(vvdia<=20) {
    			imagen="<img src='/Examen2/imgS/Capricornio.jpg' width='200px' height='100px'>";
				//imagen="Capricornio"
    		}else if(vvdia>=21) {
                imagen="<img src='/Examen2/imgS/Acuario.jpg' width='200px' height='100px'>";		
				//imagen="Acuario"
    		}
        break;
    	case "Febrero":
    		if(vvdia<=20) {
    			imagen="<img src='/Examen2/imgS/Acuario.jpg' width='200px' height='100px'>";
				//imagen="Acuario"
    		}else if(vvdia>=21) {
                imagen="<img src='/Examen2/imgS/Piscis.jpg' width='200px' height='100px'>";
				//imagen="Piscis"			
    		}
        break;
    	case "Marzo":
    		if(vdia<=20) {
    			imagen="<img src='/Examen2/imgS/Piscis.jpg' width='200px' height='100px'>";
				//imagen="Piscis"
    		}else if(vdia>=21) {
                imagen="<img src='/Examen2/imgS/Aries.jpg' width='200px' height='100px'>";
				//imagen="Aries"
    		}
        break;
    	case "Abril":
    		if(vdia<=20) {
    			imagen="<img src='/Examen2/imgS/Aries.jpg' width='200px' height='100px'>";
				//imagen="Aries"
    		}else if(vdia>=21) {
                imagen="<img src='/Examen2/imgS/Tauro.jpg' width='200px' height='100px'>";
				//imagen="Tauro"
    		}
        break;	
    	case "Mayo":
    		if(vdia<=20) {
    			imagen="<img src='/Examen2/imgS/Tauro.jpg' width='200px' height='100px'>";
				//imagen="Tauro"
    		}else if(vdia>=21) {
                imagen="<img src='/Examen2/imgS/Geminis.jpg' width='200px' height='100px'>";
				//imagen="Geminis"
    		}
        break;	
    	case "Junio":
    		if(vdia<=20) {
    			imagen="<img src='/Examen2/imgS/Geminis.jpg' width='200px' height='100px'>";
				//imagen="Geminis"
    		}else if(vdia>=21) {
                imagen="<img src='/Examen2/imgS/Cancer.jpg' width='200px' height='100px'>";	
				//imagen="Cancer"	
    		}
        break;	
    	case "Julio":
    		if(vdia<=20) {
    			imagen="<img src='/Examen2/imgS/Cancer.jpg' width='200px' height='100px'>";
				//imagen="Cancer"
    		}else if(vdia>=21) {
                imagen="<img src='/Examen2/imgS/Leo.jpg' width='200px' height='100px'>";	
				//imagen="Leo"		
    		}
        break;	
    	case "Agosto":
    		if(vdia<=20) {
    			imagen="<img src='/Examen2/imgS/Leo.jpg' width='200px' height='100px'>";
				//imagen="Leo"
    		}else if(vdia>=21) {
                imagen="<img src='/Examen2/imgS/Virgo.jpg' width='200px' height='100px'>";
				//imagen="Virgo"
    		}
        break;	
    	case "Septiembre":
    		if(vdia<=20) {
    			imagen="<img src='/Examen2/imgS/Virgo.jpg' width='200px' height='100px'>";
				//imagen="Virgo"
    		}else if(vdia>=21) {
                imagen="<img src='/Examen2/imgS/Libra.jpg' width='200px' height='100px'>";
				//imagen="Libra"
    		}
        break;	
    	case "Octubre":
    		if(vdia<=20) {
    			imagen="<img src='/Examen2/imgS/Libra.jpg' width='200px' height='100px'>";
				//imagen="Libra"
    		}else if(vdia>=21) {
                imagen="<img src='/Examen2/imgS/Escorpio.jpg' width='200px' height='100px'>";
				//imagen="Escorpio"
    		}
        break;	
    	case "Noviembre":
    		if(vdia<=20) {
                imagen="<img src='/Examen2/imgS/Escorpio.jpg' width='200px' height='100px'>";
				//imagen="Escorpio"
    		}else if(vdia>=21) {
                imagen="<img src='/Examen2/imgS/Sagitario.jpg' width='200px' height='100px'>";
				//imagen="Sagitario"
    		}
        break;	
    	case "Diciembre":
    		if(vdia<=20) {
    			imagen="<img src='/Examen2/imgS/Sagitario.jpg' width='200px' height='100px'>";
				//imagen="Sagitario"
    		}else if(vdia>=21) {
                imagen="<img src='/Examen2/imgS/Capricornio.jpg' width='200px' height='100px'>";	
				//imagen="Capricornio"
    		}
        break;	
    	}
fecha.innerHTML=`<div>
     <h1>Fecha</h1>
     <div><label>${vdia+' de '+vmes}</label></div>
	<div>${imagen}</div>
     </div>`
	
     
},2000);
}