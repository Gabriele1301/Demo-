var formData = {}
	if(sessionStorage.getItem("loggyOBJ" )){
		formData	= JSON.parse(sessionStorage.getItem("loggyOBJ"));
	}
	
if(formData){
	// Popola i campi del form con i dati salvati
	Object.keys(formData).forEach(key => {
		const input = document.querySelector(`input[name="${key}"]`);
		if (input) {
            if (key !== 'usertype') {
                input.value = formData[key];
            }
		}
        if (key === 'usertype') {
            const radio = document.querySelector(`input[name="${key}"][value="${formData[key]}"]`);
            
            if (radio) {
                const nextElement = radio.nextElementSibling;
                
                // Verifica se il nextElement esiste prima di modificarne lo stile
                if (nextElement) {
                    nextElement.style.border = '3px solid #198754';  // Aggiungi il bordo verde
                }
            }
        }
	});
}
var ids=[];
    var actualCard=0;
    const cards = document.querySelectorAll('.card');
    const radios = document.querySelectorAll('input[type="radio"]');
    var inputs=document.querySelectorAll("input");
    inputs.forEach(element => {
        if (!ids.includes(element)) {
            ids.push(element)
        }
        element.addEventListener('input', (e) => {
            element.classList.remove("is-invalid")
            const { name, value } = e.target;
            formData[name] = value; // aggiorna o crea la chiave nell'oggetto globale
            sessionStorage.setItem("loggyOBJ", JSON.stringify(formData));
          });

    });
    
    document.querySelectorAll("input[type='radio']").forEach(e=>{
        e.addEventListener("change",(event)=>{
            if (event.target.checked) {
                const { name, value } = event.target;
                formData[name] = value;
        }
        })
    })

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            document.querySelectorAll('.image-radio img').forEach(img => {
                img.style.border = 'none';  // Rimuove il bordo da tutte
            });
            let img = radio.nextElementSibling;
            img.style.border = "none"; 
            if (radio.checked) {
                img.style.border = '3px solid #198754';  // Aggiunge il bordo verde
            }

        });
    });

    function next() {
        cards[actualCard].classList.add("d-none");
        actualCard+=1;
        cards[actualCard].classList.remove("d-none");
        document.getElementsByClassName("progress-bar")[0].style.width=(actualCard/cards.length)*100+"%"
    }
    function prev() {
        cards[actualCard].classList.add("d-none");
        actualCard-=1;
        cards[actualCard].classList.remove("d-none");
        document.getElementsByClassName("progress-bar")[0].style.width=(actualCard/cards.length)*100+"%"
    
    }

    function signup() {
        let form=true
        console.log(sessionStorage.getItem("loggyOBJ"))
        if (!formData['usertype']) {
            console.log(formData['usertype'])
            radios.forEach(radio => {
                const img = radio.nextElementSibling;
                img.style.border = '3px solid red';  // Aggiunge il bordo verde
        
            });
        }
        inputs.forEach(input => {
            if ((input.name!=="piva" && input.name!=="pec") && input.value.trim()==="") {
                if (input.name==="telefonocellulare" || input.name=="telefonofisso") {
                    if (document.querySelector(`input[name="${'telefonocellulare'}"]`).value.trim() !="" ||document.querySelector(`input[name="${'telefonofisso'}"]`).value.trim() !="" ) {
                        return;
                    }
                }
                input.classList.add("is-invalid")
                form=false
            }
        });
        
        if (form) {
            fetch('', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json' 
                },
                body: sessionStorage.getItem("loggyOBJ")
              })
              .then(response => response.json())  
              .then(data => {
              })
              .catch(error => {
                console.error('error：', error);
              });
        }else{
            alert("campi obbligatori non inseriti")
        }
    }