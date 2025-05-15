var mansioni = []
var settori = []
var tipoContratti = []
var professionista = {}




function populateLookup(){
    RestUtil.get("/api/lookup/mansione/all", "",
        (data) => {
            for(element of data){
                mansioni.push(element);
            }
        }
    )

    RestUtil.get("/api/lookup/settore/all", "",
        (data) => {
            for(element of data){
                settori.push(element);
            }
        }
    )

    RestUtil.get("/api/lookup/tipocontratto/all", "",
        (data) => {
            for(element of data){
                tipoContratti.push(element);
            }
        }
    )
}




//Anagrafica e contatti
function getProfessionista(){
    RestUtil.get("/camionista-byauth", "", 
        (data) => {
            document.getElementById('nome').innerHTML=data.nome ?? 'N/A';
document.getElementById('cognome').innerHTML=data.cognome ?? 'N/A';
document.getElementById('comunenascita').innerHTML=data.comunenascita ?? 'N/A';
document.getElementById('provincianascita').innerHTML=data.provincianascita ?? 'N/A';
document.getElementById('statonascita').innerHTML=data.statonascita ?? 'N/A';
document.getElementById('datanascita').innerHTML=data.datanascita ?? 'N/A';
document.getElementById('nazionalita').innerHTML=data.nazionalita ?? 'N/A';
document.getElementById('cartaidentita').innerHTML=data.cartaidentita ?? 'N/A';
document.getElementById('codicefiscale').innerHTML=data.codicefiscale ?? 'N/A';
document.getElementById('partitaiva').innerHTML=data.partitaiva ?? 'N/A';
document.getElementById('email').innerHTML=data.email ?? 'N/A';
document.getElementById('pec').innerHTML=data.pec ?? 'N/A';
document.getElementById('indirizzoresidenza').innerHTML=data.indirizzoresidenza ?? 'N/A';
document.getElementById('comuneresidenza').innerHTML=data.comuneresidenza ?? 'N/A';
document.getElementById('cap').innerHTML=data.cap ?? 'N/A';
document.getElementById('provinciaresidenza').innerHTML=data.provinciaresidenza ?? 'N/A';
document.getElementById('statoresidenza').innerHTML=data.statoresidenza ?? 'N/A';
document.getElementById('telefonocellulare').innerHTML=data.telefonocellulare ?? 'N/A';
document.getElementById('telefonofisso').innerHTML=data.telefonofisso ?? 'N/A';

professionista = {
"id": data.id,
"nome": data.nome,
"cognome": data.cognome,
"comunenascita": data.comunenascita,
"provincianascita": data.provincianascita,
"statonascita": data.statonascita,
"datanascita": data.datanascita,
"nazionalita": data.nazionalita,
"cartaidentita": data.cartaidentita,
"codicefiscale": data.codicefiscale,
"partitaiva": data.partitaiva,
"email": data.email,
"pec": data.pec,
"indirizzoresidenza": data.indirizzoresidenza,
"comuneresidenza": data.comuneresidenza,
"cap": data.cap,
"provinciaresidenza": data.provinciaresidenza,
"statoresidenza": data.statoresidenza,
"telefonocellulare": data.telefonocellulare,
"telefonofisso": data.telefonofisso,
"fotoprofilo": data.fotoprofilo
};

updateProfileImage(professionista.fotoprofilo);

        }
    )
}



function getDisponibilita(){
	RestUtil.get('/camionista-disponibilita', '',
		(data) => {
						let cardBody = document.getElementById('card-body-disponibilita');

			let bodyHTML = ``;

			for (const element of data) {
				prettyElement = {}
					Object.keys(element).forEach((key) =>{
						if (typeof element[key] === 'boolean') {
							prettyElement[key] = element[key] ? 'SI' : 'NO';
						} else {
							prettyElement[key] = element[key];
						}
					})
				bodyHTML +=`<div class='d-flex justify-content-between align-items-start'>`
				bodyHTML +=`<div>`
				bodyHTML +=`<span style='font-weight: bold;'>Tipo contratto: </span><span id='disponibilita-tipocontratto'>${prettyElement.tipocontratto.descrizione}</span>
<br>
<span style='font-weight: bold;'>Disponibile all'estero: </span><span id='internazionale'>${prettyElement.internazionale ?? 'N/A'}</span>
<br>
<span style='font-weight: bold;'>Disponibile turno notturno: </span><span id='notte'>${prettyElement.notte ?? 'N/A'}</span>
<br>
<span style='font-weight: bold;'>Disponibile in giorni festivi: </span><span id='festivi'>${prettyElement.festivi ?? 'N/A'}</span>
<br>
<span style='font-weight: bold;'>Attualemente disponibile: </span><span id='disponibile'>${prettyElement.disponibile ?? 'N/A'}</span>
<br>
<span style='font-weight: bold;'>Disponibile da: </span><span id='disponibileda'>${prettyElement.disponibileda ?? 'N/A'}</span>
<br>
<span style='font-weight: bold;'>Disponibile fino a: </span><span id='disponibilefino'>${prettyElement.disponibilefino ?? 'N/A'}</span>
<br>
<span style='font-weight: bold;'>RAL Full Time Equivalent: </span><span id='ralfte'>${prettyElement.ralfte ?? 'N/A'}</span>
<br>
`
				bodyHTML +=`</div>`
				bodyHTML +=`<div class='d-flex justify-content-end' style='gap: 10px;'>`
				bodyHTML +=`<button class='btn btn-primary btn-sm' style='width: 30px;' title='Modifica' onclick='openDynamicModal(this.closest(".card").id.replace(" ", "").toLowerCase(), ${JSON.stringify(element)})'>
			<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-pencil-square' viewBox='0 0 18 18'>
				<path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z'/>
				<path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z'/>
			</svg>
		</button>
		<button class='btn btn-primary btn-sm' style='width: 30px;' title='Elimina' onclick='deleteEntity(${element.id}, "disponibilita")'>
			<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash3-fill' viewBox='0 0 18 18'>
				<path d='M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5'/>
			</svg>
		</button>`
				bodyHTML +=`</div>`
				bodyHTML +=`</div>`
				bodyHTML +=`<hr>`
			}
			cardBody.innerHTML = bodyHTML;

		}
	)
}

function getLavoroAttuale(){
	RestUtil.get('/camionista-lavoroattuale', '',
		(data) => {
						let cardBody = document.getElementById('card-body-lavoroattuale');

			let bodyHTML = ``;

			for (const element of data) {
				prettyElement = {}
					Object.keys(element).forEach((key) =>{
						if (typeof element[key] === 'boolean') {
							prettyElement[key] = element[key] ? 'SI' : 'NO';
						} else {
							prettyElement[key] = element[key];
						}
					})
				bodyHTML +=`<div class='d-flex justify-content-between align-items-start'>`
				bodyHTML +=`<div>`
				bodyHTML +=`<span style='font-weight: bold;'>Mansione: </span><span id='lavoroattuale-mansione'>${prettyElement.mansione.descrizione}</span>
<br>
<span style='font-weight: bold;'>Datore di lavoro: </span><span id='datore'>${prettyElement.datore ?? 'N/A'}</span>
<br>
<span style='font-weight: bold;'>Data inizio lavoro: </span><span id='datainizio'>${prettyElement.datainizio ?? 'N/A'}</span>
<br>
<span style='font-weight: bold;'>Descrizione: </span><span id='descrizione'>${prettyElement.descrizione ?? 'N/A'}</span>
<br>
`
				bodyHTML +=`</div>`
				bodyHTML +=`<div class='d-flex justify-content-end' style='gap: 10px;'>`
				bodyHTML +=`<button class='btn btn-primary btn-sm' style='width: 30px;' title='Modifica' onclick='openDynamicModal(this.closest(".card").id.replace(" ", "").toLowerCase(), ${JSON.stringify(element)})'>
			<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-pencil-square' viewBox='0 0 18 18'>
				<path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z'/>
				<path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z'/>
			</svg>
		</button>
		<button class='btn btn-primary btn-sm' style='width: 30px;' title='Elimina' onclick='deleteEntity(${element.id}, "lavoroattuale")'>
			<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash3-fill' viewBox='0 0 18 18'>
				<path d='M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5'/>
			</svg>
		</button>`
				bodyHTML +=`</div>`
				bodyHTML +=`</div>`
				bodyHTML +=`<hr>`
			}
			cardBody.innerHTML = bodyHTML;

		}
	)
}

function getEsperienza(){
	RestUtil.get('/camionista-esperienza', '',
		(data) => {
						let cardBody = document.getElementById('card-body-esperienza');

			let bodyHTML = ``;

			for (const element of data) {
				prettyElement = {}
					Object.keys(element).forEach((key) =>{
						if (typeof element[key] === 'boolean') {
							prettyElement[key] = element[key] ? 'SI' : 'NO';
						} else {
							prettyElement[key] = element[key];
						}
					})
				bodyHTML +=`<div class='d-flex justify-content-between align-items-start'>`
				bodyHTML +=`<div>`
				bodyHTML +=`<span style='font-weight: bold;'>Mansione: </span><span id='esperienza-mansione'>${prettyElement.mansione.descrizione}</span>
<br>
<span style='font-weight: bold;'>Settore: </span><span id='esperienza-settore'>${prettyElement.settore.descrizione}</span>
<br>
<span style='font-weight: bold;'>Descrizione: </span><span id='descrizione'>${prettyElement.descrizione ?? 'N/A'}</span>
<br>
<span style='font-weight: bold;'>Data inizio esperienza: </span><span id='inizioesperienza'>${prettyElement.inizioesperienza ?? 'N/A'}</span>
<br>
<span style='font-weight: bold;'>Durata esperienza: </span><span id='durataesperienza'>${prettyElement.durataesperienza ?? 'N/A'}</span>
<br>
`
				bodyHTML +=`</div>`
				bodyHTML +=`<div class='d-flex justify-content-end' style='gap: 10px;'>`
				bodyHTML +=`<button class='btn btn-primary btn-sm' style='width: 30px;' title='Modifica' onclick='openDynamicModal(this.closest(".card").id.replace(" ", "").toLowerCase(), ${JSON.stringify(element)})'>
			<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-pencil-square' viewBox='0 0 18 18'>
				<path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z'/>
				<path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z'/>
			</svg>
		</button>
		<button class='btn btn-primary btn-sm' style='width: 30px;' title='Elimina' onclick='deleteEntity(${element.id}, "esperienza")'>
			<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash3-fill' viewBox='0 0 18 18'>
				<path d='M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5'/>
			</svg>
		</button>`
				bodyHTML +=`</div>`
				bodyHTML +=`</div>`
				bodyHTML +=`<hr>`
			}
			cardBody.innerHTML = bodyHTML;

		}
	)
}

function getSegnalazione(){
	RestUtil.get('/camionista-segnalazione', '',
		(data) => {
						let cardBody = document.getElementById('card-body-segnalazione');

			let bodyHTML = ``;

			for (const element of data) {
				prettyElement = {}
					Object.keys(element).forEach((key) =>{
						if (typeof element[key] === 'boolean') {
							prettyElement[key] = element[key] ? 'SI' : 'NO';
						} else {
							prettyElement[key] = element[key];
						}
					})
				bodyHTML +=`<div class='d-flex justify-content-between align-items-start'>`
				bodyHTML +=`<div>`
				bodyHTML +=`<span style='font-weight: bold;'>Data segnalazione: </span><span id='data'>${prettyElement.data ?? 'N/A'}</span>
<br>
<span style='font-weight: bold;'>Segnalazione: </span><span id='testo'>${prettyElement.testo ?? 'N/A'}</span>
<br>
<span style='font-weight: bold;'>Stato segnalazione: </span><span id='stato'>${prettyElement.stato ?? 'N/A'}</span>
<br>
<span style='font-weight: bold;'>Esito segnalazione: </span><span id='esito'>${prettyElement.esito ?? 'N/A'}</span>
<br>
`
				bodyHTML +=`</div>`
				bodyHTML +=`<div class='d-flex justify-content-end' style='gap: 10px;'>`
				bodyHTML +=`<button class='btn btn-primary btn-sm' style='width: 30px;' title='Modifica' onclick='openDynamicModal(this.closest(".card").id.replace(" ", "").toLowerCase(), ${JSON.stringify(element)})'>
			<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-pencil-square' viewBox='0 0 18 18'>
				<path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z'/>
				<path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z'/>
			</svg>
		</button>
		<button class='btn btn-primary btn-sm' style='width: 30px;' title='Elimina' onclick='deleteEntity(${element.id}, "segnalazione")'>
			<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash3-fill' viewBox='0 0 18 18'>
				<path d='M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5'/>
			</svg>
		</button>`
				bodyHTML +=`</div>`
				bodyHTML +=`</div>`
				bodyHTML +=`<hr>`
			}
			cardBody.innerHTML = bodyHTML;

		}
	)
}

function getQualifica(){
	RestUtil.get('/camionista-qualifica', '',
		(data) => {
						let cardBody = document.getElementById('card-body-qualifica');

			let bodyHTML = ``;

			for (const element of data) {
				prettyElement = {}
					Object.keys(element).forEach((key) =>{
						if (typeof element[key] === 'boolean') {
							prettyElement[key] = element[key] ? 'SI' : 'NO';
						} else {
							prettyElement[key] = element[key];
						}
					})
				bodyHTML +=`<div class='d-flex justify-content-between align-items-start'>`
				bodyHTML +=`<div>`
				bodyHTML +=`<span style='font-weight: bold;'>Tipo: </span><span id='tipo'>${prettyElement.tipo ?? 'N/A'}</span>
<br>
<span style='font-weight: bold;'>Categoria: </span><span id='categoria'>${prettyElement.categoria ?? 'N/A'}</span>
<br>
<span style='font-weight: bold;'>Ente Emittente: </span><span id='enteemittente'>${prettyElement.enteemittente ?? 'N/A'}</span>
<br>
<span style='font-weight: bold;'>Data Rilascio: </span><span id='datarilascio'>${prettyElement.datarilascio ?? 'N/A'}</span>
<br>
<span style='font-weight: bold;'>Codice: </span><span id='codice'>${prettyElement.codice ?? 'N/A'}</span>
<br>
`
				bodyHTML +=`</div>`
				bodyHTML +=`<div class='d-flex justify-content-end' style='gap: 10px;'>`
				bodyHTML +=`<button class='btn btn-primary btn-sm' style='width: 30px;' title='Modifica' onclick='openDynamicModal(this.closest(".card").id.replace(" ", "").toLowerCase(), ${JSON.stringify(element)})'>
			<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-pencil-square' viewBox='0 0 18 18'>
				<path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z'/>
				<path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z'/>
			</svg>
		</button>
		<button class='btn btn-primary btn-sm' style='width: 30px;' title='Elimina' onclick='deleteEntity(${element.id}, "qualifica")'>
			<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash3-fill' viewBox='0 0 18 18'>
				<path d='M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5'/>
			</svg>
		</button>`
				bodyHTML +=`</div>`
				bodyHTML +=`</div>`
				bodyHTML +=`<hr>`
			}
			cardBody.innerHTML = bodyHTML;

		}
	)
}





function openDynamicModal(tipo, element) {
    let modalTitle = document.getElementById('dynamicModalLabel');
    let form = document.getElementById('dynamicForm');
    let salvaBtn = undefined;
    let html = '';
    
    	switch(tipo){
		case 'residenza':
			modalTitle.textContent = (element != null ? 'Modifica ' : 'Aggiungi ') + 'Residenza'
			html = `
<div id="251">
	<div id="252" class="input-group mb-1">
		<span id="253" class="input-group-text">
			Indirizzo di Residenza
		</span>
		<input id="input-residenza-indirizzoresidenza" jsonkey="persona_${element != null ? element.id : 0}-indirizzoresidenza" class="form-control" type="text" placeholder="Indirizzo di Residenza" aria-label="Indirizzo di Residenza" value="${element != null ? element.indirizzoresidenza : ""}"/>
	</div>
</div>
<div id="255">
	<div id="256" class="input-group mb-1">
		<span id="257" class="input-group-text">
			Comune di Residenza
		</span>
		<input id="input-residenza-comuneresidenza" jsonkey="persona_${element != null ? element.id : 0}-comuneresidenza" class="form-control" type="text" placeholder="Comune di Residenza" aria-label="Comune di Residenza" value="${element != null ? element.comuneresidenza : ""}"/>
	</div>
</div>
<div id="259">
	<div id="260" class="input-group mb-1">
		<span id="261" class="input-group-text">
			CAP
		</span>
		<input id="input-residenza-cap" jsonkey="persona_${element != null ? element.id : 0}-cap" class="form-control" type="text" placeholder="CAP" aria-label="CAP" value="${element != null ? element.cap : ""}"/>
	</div>
</div>
<div id="263">
	<div id="264" class="input-group mb-1">
		<span id="265" class="input-group-text">
			Provincia di Residenza
		</span>
		<input id="input-residenza-provinciaresidenza" jsonkey="persona_${element != null ? element.id : 0}-provinciaresidenza" class="form-control" type="text" placeholder="Provincia di Residenza" aria-label="Provincia di Residenza" value="${element != null ? element.provinciaresidenza : ""}"/>
	</div>
</div>
<div id="267">
	<div id="268" class="input-group mb-1">
		<span id="269" class="input-group-text">
			Stato di Residenza
		</span>
		<input id="input-residenza-statoresidenza" jsonkey="persona_${element != null ? element.id : 0}-statoresidenza" class="form-control" type="text" placeholder="Stato di Residenza" aria-label="Stato di Residenza" value="${element != null ? element.statoresidenza : ""}"/>
	</div>
</div>
			`;
			function composeResidenzaBody(){
	const indirizzoresidenza = document.getElementById('input-residenza-indirizzoresidenza');
	const comuneresidenza = document.getElementById('input-residenza-comuneresidenza');
	const cap = document.getElementById('input-residenza-cap');
	const provinciaresidenza = document.getElementById('input-residenza-provinciaresidenza');
	const statoresidenza = document.getElementById('input-residenza-statoresidenza');

	let body = {};
		body[indirizzoresidenza.getAttribute('jsonkey')]= indirizzoresidenza.value;
		body[comuneresidenza.getAttribute('jsonkey')]= comuneresidenza.value;
		body[cap.getAttribute('jsonkey')]= cap.value;
		body[provinciaresidenza.getAttribute('jsonkey')]= provinciaresidenza.value;
		body[statoresidenza.getAttribute('jsonkey')]= statoresidenza.value;

				return body;
			}
document.getElementById('dynamic-modal-save-btn').innerHTML = `<button id='salvaDynamic' class='btn btn-primary' type='button'>Salva</button>`;
salvaBtn = document.getElementById('salvaDynamic');
			salvaBtn.onclick= function() {
				if(element != null){
					updateEntity(composeResidenzaBody);
				} else{
					insertEntity(composeResidenzaBody);
				}
			}
	form.innerHTML = html;
			break;
		case 'esperienze':
			modalTitle.textContent = (element != null ? 'Modifica ' : 'Aggiungi ') + 'Esperienze'
			html = `
<div id="271">
	<div id="272" class="input-group mb-1">
		<span id="273" class="input-group-text">
			Descrizione
		</span>
		<input id="input-esperienze-descrizione" jsonkey="esperienza_${element != null ? element.id : 0}-descrizione" class="form-control" type="text" placeholder="Descrizione" aria-label="Descrizione" value="${element != null ? element.descrizione : ""}"/>
	</div>
</div>
<div id="275">
	<div id="276" class="input-group mb-1">
		<span id="277" class="input-group-text">
			Data inizio esperienza
		</span>
		<input id="input-esperienze-inizioesperienza" jsonkey="esperienza_${element != null ? element.id : 0}-inizioesperienza" class="form-control" type="date" placeholder="Data inizio esperienza" aria-label="Data inizio esperienza" value="${element != null ? element.inizioesperienza : ""}"/>
	</div>
</div>
<div id="279">
	<div id="280" class="input-group mb-1">
		<span id="281" class="input-group-text">
			Durata esperienza
		</span>
		<input id="input-esperienze-durataesperienza" jsonkey="esperienza_${element != null ? element.id : 0}-durataesperienza" class="form-control" type="number" step="1" placeholder="Durata esperienza" aria-label="Durata esperienza" value="${element != null ? element.durataesperienza : ""}" oninput="checkInteger(this)" onkeydown="preventEKey(event)"/>
	</div>
</div>
<div id="283" class="input-group mb-1">
	<span id="284" class="input-group-text">
		Settore
	</span>
	<select id="input-esperienze-settore" class="form-select" aria-label="Settore">
	</select>
</div>
<div id="286" class="input-group mb-1">
	<span id="287" class="input-group-text">
		Mansione
	</span>
	<select id="input-esperienze-mansione" class="form-select" aria-label="Mansione">
	</select>
</div>
			`;
			function composeEsperienzeBody(){
	const descrizione = document.getElementById('input-esperienze-descrizione');
	const inizioesperienza = document.getElementById('input-esperienze-inizioesperienza');
	const durataesperienza = document.getElementById('input-esperienze-durataesperienza');
	const settore = document.getElementById('input-esperienze-settore');
	const mansione = document.getElementById('input-esperienze-mansione');

	let body = {};
		body[descrizione.getAttribute('jsonkey')]= descrizione.value;
		body[inizioesperienza.getAttribute('jsonkey')]= inizioesperienza.value;
		body[durataesperienza.getAttribute('jsonkey')]= durataesperienza.value;
		body[`esperienza_${element != null ? element.id : 0}-settore`]= settore.value;
		body[`esperienza_${element != null ? element.id : 0}-mansione`]= mansione.value;

				return body;
			}
document.getElementById('dynamic-modal-save-btn').innerHTML = `<button id='salvaDynamic' class='btn btn-primary' type='button'>Salva</button>`;
salvaBtn = document.getElementById('salvaDynamic');
			salvaBtn.onclick= function() {
				if(element != null){
					updateEntity(composeEsperienzeBody);
				} else{
					insertEntity(composeEsperienzeBody);
				}
			}
	form.innerHTML = html;
			break;
		case 'disponibilit‡':
			modalTitle.textContent = (element != null ? 'Modifica ' : 'Aggiungi ') + 'Disponibilit‡'
			html = `
<div id="289">
	<div id="290" class="form-check">
		<input id="input-disponibilit‡-internazionale" jsonkey="disponibilita_${element != null ? element.id : 0}-internazionale" class="form-check-input" type="checkbox" placeholder="Disponibile all'estero" aria-label="Disponibile all'estero" ${element != null ? (element.internazionale == true ? "checked" : "") : ""}/>
		<label id="292" class="form-check-label" for="input-disponibilit‡-internazionale">
			Disponibile all'estero
		</label>
	</div>
</div>
<div id="293">
	<div id="294" class="form-check">
		<input id="input-disponibilit‡-notte" jsonkey="disponibilita_${element != null ? element.id : 0}-notte" class="form-check-input" type="checkbox" placeholder="Disponibile turno notturno" aria-label="Disponibile turno notturno" ${element != null ? (element.notte == true ? "checked" : "") : ""}/>
		<label id="296" class="form-check-label" for="input-disponibilit‡-notte">
			Disponibile turno notturno
		</label>
	</div>
</div>
<div id="297">
	<div id="298" class="form-check">
		<input id="input-disponibilit‡-festivi" jsonkey="disponibilita_${element != null ? element.id : 0}-festivi" class="form-check-input" type="checkbox" placeholder="Disponibile in giorni festivi" aria-label="Disponibile in giorni festivi" ${element != null ? (element.festivi == true ? "checked" : "") : ""}/>
		<label id="300" class="form-check-label" for="input-disponibilit‡-festivi">
			Disponibile in giorni festivi
		</label>
	</div>
</div>
<div id="301">
	<div id="302" class="form-check">
		<input id="input-disponibilit‡-disponibile" jsonkey="disponibilita_${element != null ? element.id : 0}-disponibile" class="form-check-input" type="checkbox" placeholder="Attualemente disponibile" aria-label="Attualemente disponibile" ${element != null ? (element.disponibile == true ? "checked" : "") : ""}/>
		<label id="304" class="form-check-label" for="input-disponibilit‡-disponibile">
			Attualemente disponibile
		</label>
	</div>
</div>
<div id="305">
	<div id="306" class="input-group mb-1">
		<span id="307" class="input-group-text">
			Disponibile da
		</span>
		<input id="input-disponibilit‡-disponibileda" jsonkey="disponibilita_${element != null ? element.id : 0}-disponibileda" class="form-control" type="date" placeholder="Disponibile da" aria-label="Disponibile da" value="${element != null ? element.disponibileda : ""}"/>
	</div>
</div>
<div id="309">
	<div id="310" class="input-group mb-1">
		<span id="311" class="input-group-text">
			Disponibile fino a
		</span>
		<input id="input-disponibilit‡-disponibilefino" jsonkey="disponibilita_${element != null ? element.id : 0}-disponibilefino" class="form-control" type="date" placeholder="Disponibile fino a" aria-label="Disponibile fino a" value="${element != null ? element.disponibilefino : ""}"/>
	</div>
</div>
<div id="313">
	<div id="314" class="input-group mb-1">
		<span id="315" class="input-group-text">
			RAL Full Time Equivalent
		</span>
		<input id="input-disponibilit‡-ralfte" jsonkey="disponibilita_${element != null ? element.id : 0}-ralfte" class="form-control" type="number" step="1" placeholder="RAL Full Time Equivalent" aria-label="RAL Full Time Equivalent" value="${element != null ? element.ralfte : ""}" oninput="checkInteger(this)" onkeydown="preventEKey(event)"/>
	</div>
</div>
<div id="317" class="input-group mb-1">
	<span id="318" class="input-group-text">
		Tipo Contratto
	</span>
	<select id="input-disponibilit‡-tipocontratto" class="form-select" aria-label="Tipo Contratto">
	</select>
</div>
			`;
			function composeDisponibilit‡Body(){
	const internazionale = document.getElementById('input-disponibilit‡-internazionale');
	const notte = document.getElementById('input-disponibilit‡-notte');
	const festivi = document.getElementById('input-disponibilit‡-festivi');
	const disponibile = document.getElementById('input-disponibilit‡-disponibile');
	const disponibileda = document.getElementById('input-disponibilit‡-disponibileda');
	const disponibilefino = document.getElementById('input-disponibilit‡-disponibilefino');
	const ralfte = document.getElementById('input-disponibilit‡-ralfte');
	const tipocontratto = document.getElementById('input-disponibilit‡-tipocontratto');

	let body = {};
		body[internazionale.getAttribute('jsonkey')]= internazionale.checked;
		body[notte.getAttribute('jsonkey')]= notte.checked;
		body[festivi.getAttribute('jsonkey')]= festivi.checked;
		body[disponibile.getAttribute('jsonkey')]= disponibile.checked;
		body[disponibileda.getAttribute('jsonkey')]= disponibileda.value;
		body[disponibilefino.getAttribute('jsonkey')]= disponibilefino.value;
		body[ralfte.getAttribute('jsonkey')]= ralfte.value;
		body[`disponibilita_${element != null ? element.id : 0}-tipocontratto`]= tipocontratto.value;

				return body;
			}
document.getElementById('dynamic-modal-save-btn').innerHTML = `<button id='salvaDynamic' class='btn btn-primary' type='button'>Salva</button>`;
salvaBtn = document.getElementById('salvaDynamic');
			salvaBtn.onclick= function() {
				if(element != null){
					updateEntity(composeDisponibilit‡Body);
				} else{
					insertEntity(composeDisponibilit‡Body);
				}
			}
	form.innerHTML = html;
			break;
		case 'segnalazioni':
			modalTitle.textContent = (element != null ? 'Modifica ' : 'Aggiungi ') + 'Segnalazioni'
			html = `
<div id="320">
	<div id="321" class="input-group mb-1">
		<span id="322" class="input-group-text">
			Data segnalazione
		</span>
		<input id="input-segnalazioni-data" jsonkey="segnalazione_${element != null ? element.id : 0}-data" class="form-control" type="date" placeholder="Data segnalazione" aria-label="Data segnalazione" value="${element != null ? element.data : ""}"/>
	</div>
</div>
<div id="324">
	<div id="325" class="input-group mb-1">
		<span id="326" class="input-group-text">
			Segnalazione
		</span>
		<input id="input-segnalazioni-testo" jsonkey="segnalazione_${element != null ? element.id : 0}-testo" class="form-control" type="text" placeholder="Segnalazione" aria-label="Segnalazione" value="${element != null ? element.testo : ""}"/>
	</div>
</div>
<div id="328">
	<div id="329" class="input-group mb-1">
		<span id="330" class="input-group-text">
			Stato segnalazione
		</span>
		<input id="input-segnalazioni-stato" jsonkey="segnalazione_${element != null ? element.id : 0}-stato" class="form-control" type="text" placeholder="Stato segnalazione" aria-label="Stato segnalazione" value="${element != null ? element.stato : ""}"/>
	</div>
</div>
<div id="332">
	<div id="333" class="input-group mb-1">
		<span id="334" class="input-group-text">
			Esito segnalazione
		</span>
		<input id="input-segnalazioni-esito" jsonkey="segnalazione_${element != null ? element.id : 0}-esito" class="form-control" type="text" placeholder="Esito segnalazione" aria-label="Esito segnalazione" value="${element != null ? element.esito : ""}"/>
	</div>
</div>
			`;
			function composeSegnalazioniBody(){
	const data = document.getElementById('input-segnalazioni-data');
	const testo = document.getElementById('input-segnalazioni-testo');
	const stato = document.getElementById('input-segnalazioni-stato');
	const esito = document.getElementById('input-segnalazioni-esito');

	let body = {};
		body[data.getAttribute('jsonkey')]= data.value;
		body[testo.getAttribute('jsonkey')]= testo.value;
		body[stato.getAttribute('jsonkey')]= stato.value;
		body[esito.getAttribute('jsonkey')]= esito.value;

				return body;
			}
document.getElementById('dynamic-modal-save-btn').innerHTML = `<button id='salvaDynamic' class='btn btn-primary' type='button'>Salva</button>`;
salvaBtn = document.getElementById('salvaDynamic');
			salvaBtn.onclick= function() {
				if(element != null){
					updateEntity(composeSegnalazioniBody);
				} else{
					insertEntity(composeSegnalazioniBody);
				}
			}
	form.innerHTML = html;
			break;
		case 'lavoriattuali':
			modalTitle.textContent = (element != null ? 'Modifica ' : 'Aggiungi ') + 'Lavori attuali'
			html = `
<div id="336">
	<div id="337" class="input-group mb-1">
		<span id="338" class="input-group-text">
			Datore di lavoro
		</span>
		<input id="input-lavoriattuali-datore" jsonkey="lavoroattuale_${element != null ? element.id : 0}-datore" class="form-control" type="text" placeholder="Datore di lavoro" aria-label="Datore di lavoro" value="${element != null ? element.datore : ""}"/>
	</div>
</div>
<div id="340">
	<div id="341" class="input-group mb-1">
		<span id="342" class="input-group-text">
			Data inizio lavoro
		</span>
		<input id="input-lavoriattuali-datainizio" jsonkey="lavoroattuale_${element != null ? element.id : 0}-datainizio" class="form-control" type="date" placeholder="Data inizio lavoro" aria-label="Data inizio lavoro" value="${element != null ? element.datainizio : ""}"/>
	</div>
</div>
<div id="344">
	<div id="345" class="input-group mb-1">
		<span id="346" class="input-group-text">
			Descrizione
		</span>
		<input id="input-lavoriattuali-descrizione" jsonkey="lavoroattuale_${element != null ? element.id : 0}-descrizione" class="form-control" type="text" placeholder="Descrizione" aria-label="Descrizione" value="${element != null ? element.descrizione : ""}"/>
	</div>
</div>
<div id="348" class="input-group mb-1">
	<span id="349" class="input-group-text">
		Mansione
	</span>
	<select id="input-lavoriattuali-mansione" class="form-select" aria-label="Mansione">
	</select>
</div>
			`;
			function composeLavoriattualiBody(){
	const datore = document.getElementById('input-lavoriattuali-datore');
	const datainizio = document.getElementById('input-lavoriattuali-datainizio');
	const descrizione = document.getElementById('input-lavoriattuali-descrizione');
	const mansione = document.getElementById('input-lavoriattuali-mansione');

	let body = {};
		body[datore.getAttribute('jsonkey')]= datore.value;
		body[datainizio.getAttribute('jsonkey')]= datainizio.value;
		body[descrizione.getAttribute('jsonkey')]= descrizione.value;
		body[`lavoroattuale_${element != null ? element.id : 0}-mansione`]= mansione.value;

				return body;
			}
document.getElementById('dynamic-modal-save-btn').innerHTML = `<button id='salvaDynamic' class='btn btn-primary' type='button'>Salva</button>`;
salvaBtn = document.getElementById('salvaDynamic');
			salvaBtn.onclick= function() {
				if(element != null){
					updateEntity(composeLavoriattualiBody);
				} else{
					insertEntity(composeLavoriattualiBody);
				}
			}
	form.innerHTML = html;
			break;
		case 'qualifiche':
			modalTitle.textContent = (element != null ? 'Modifica ' : 'Aggiungi ') + 'Qualifiche'
			html = `
<div id="351">
	<div id="352" class="input-group mb-1">
		<span id="353" class="input-group-text">
			Tipo
		</span>
		<input id="input-qualifiche-tipo" jsonkey="qualifica_${element != null ? element.id : 0}-tipo" class="form-control" type="text" placeholder="Tipo" aria-label="Tipo" value="${element != null ? element.tipo : ""}"/>
	</div>
</div>
<div id="355">
	<div id="356" class="input-group mb-1">
		<span id="357" class="input-group-text">
			Categoria
		</span>
		<input id="input-qualifiche-categoria" jsonkey="qualifica_${element != null ? element.id : 0}-categoria" class="form-control" type="text" placeholder="Categoria" aria-label="Categoria" value="${element != null ? element.categoria : ""}"/>
	</div>
</div>
<div id="359">
	<div id="360" class="input-group mb-1">
		<span id="361" class="input-group-text">
			Ente Emittente
		</span>
		<input id="input-qualifiche-enteemittente" jsonkey="qualifica_${element != null ? element.id : 0}-enteemittente" class="form-control" type="text" placeholder="Ente Emittente" aria-label="Ente Emittente" value="${element != null ? element.enteemittente : ""}"/>
	</div>
</div>
<div id="363">
	<div id="364" class="input-group mb-1">
		<span id="365" class="input-group-text">
			Data Rilascio
		</span>
		<input id="input-qualifiche-datarilascio" jsonkey="qualifica_${element != null ? element.id : 0}-datarilascio" class="form-control" type="date" placeholder="Data Rilascio" aria-label="Data Rilascio" value="${element != null ? element.datarilascio : ""}"/>
	</div>
</div>
<div id="367">
	<div id="368" class="input-group mb-1">
		<span id="369" class="input-group-text">
			Codice
		</span>
		<input id="input-qualifiche-codice" jsonkey="qualifica_${element != null ? element.id : 0}-codice" class="form-control" type="text" placeholder="Codice" aria-label="Codice" value="${element != null ? element.codice : ""}"/>
	</div>
</div>
			`;
			function composeQualificheBody(){
	const tipo = document.getElementById('input-qualifiche-tipo');
	const categoria = document.getElementById('input-qualifiche-categoria');
	const enteemittente = document.getElementById('input-qualifiche-enteemittente');
	const datarilascio = document.getElementById('input-qualifiche-datarilascio');
	const codice = document.getElementById('input-qualifiche-codice');

	let body = {};
		body[tipo.getAttribute('jsonkey')]= tipo.value;
		body[categoria.getAttribute('jsonkey')]= categoria.value;
		body[enteemittente.getAttribute('jsonkey')]= enteemittente.value;
		body[datarilascio.getAttribute('jsonkey')]= datarilascio.value;
		body[codice.getAttribute('jsonkey')]= codice.value;

				return body;
			}
document.getElementById('dynamic-modal-save-btn').innerHTML = `<button id='salvaDynamic' class='btn btn-primary' type='button'>Salva</button>`;
salvaBtn = document.getElementById('salvaDynamic');
			salvaBtn.onclick= function() {
				if(element != null){
					updateEntity(composeQualificheBody);
				} else{
					insertEntity(composeQualificheBody);
				}
			}
	form.innerHTML = html;
			break;
		case 'anagrafica':
			modalTitle.textContent = (element != null ? 'Modifica ' : 'Aggiungi ') + 'Anagrafica'
			html = `
<div id="371">
	<div id="372" class="input-group mb-1">
		<span id="373" class="input-group-text">
			Nome
		</span>
		<input id="input-anagrafica-nome" jsonkey="persona_${element != null ? element.id : 0}-nome" class="form-control" type="text" placeholder="Nome" aria-label="Nome" value="${element != null ? element.nome : ""}"/>
	</div>
</div>
<div id="375">
	<div id="376" class="input-group mb-1">
		<span id="377" class="input-group-text">
			Cognome
		</span>
		<input id="input-anagrafica-cognome" jsonkey="persona_${element != null ? element.id : 0}-cognome" class="form-control" type="text" placeholder="Cognome" aria-label="Cognome" value="${element != null ? element.cognome : ""}"/>
	</div>
</div>
<div id="379">
	<div id="380" class="input-group mb-1">
		<span id="381" class="input-group-text">
			Comune di Nascita
		</span>
		<input id="input-anagrafica-comunenascita" jsonkey="persona_${element != null ? element.id : 0}-comunenascita" class="form-control" type="text" placeholder="Comune di Nascita" aria-label="Comune di Nascita" value="${element != null ? element.comunenascita : ""}"/>
	</div>
</div>
<div id="383">
	<div id="384" class="input-group mb-1">
		<span id="385" class="input-group-text">
			Provincia di Nascita
		</span>
		<input id="input-anagrafica-provincianascita" jsonkey="persona_${element != null ? element.id : 0}-provincianascita" class="form-control" type="text" placeholder="Provincia di Nascita" aria-label="Provincia di Nascita" value="${element != null ? element.provincianascita : ""}"/>
	</div>
</div>
<div id="387">
	<div id="388" class="input-group mb-1">
		<span id="389" class="input-group-text">
			Stato di Nascita
		</span>
		<input id="input-anagrafica-statonascita" jsonkey="persona_${element != null ? element.id : 0}-statonascita" class="form-control" type="text" placeholder="Stato di Nascita" aria-label="Stato di Nascita" value="${element != null ? element.statonascita : ""}"/>
	</div>
</div>
<div id="391">
	<div id="392" class="input-group mb-1">
		<span id="393" class="input-group-text">
			Data di Nascita
		</span>
		<input id="input-anagrafica-datanascita" jsonkey="persona_${element != null ? element.id : 0}-datanascita" class="form-control" type="date" placeholder="Data di Nascita" aria-label="Data di Nascita" value="${element != null ? element.datanascita : ""}"/>
	</div>
</div>
<div id="395">
	<div id="396" class="input-group mb-1">
		<span id="397" class="input-group-text">
			Nazionalit‡
		</span>
		<input id="input-anagrafica-nazionalita" jsonkey="persona_${element != null ? element.id : 0}-nazionalita" class="form-control" type="text" placeholder="Nazionalit‡" aria-label="Nazionalit‡" value="${element != null ? element.nazionalita : ""}"/>
	</div>
</div>
<div id="399">
	<div id="400" class="input-group mb-1">
		<span id="401" class="input-group-text">
			Carta d'identit‡
		</span>
		<input id="input-anagrafica-cartaidentita" jsonkey="persona_${element != null ? element.id : 0}-cartaidentita" class="form-control" type="text" placeholder="Carta d'identit‡" aria-label="Carta d'identit‡" value="${element != null ? element.cartaidentita : ""}"/>
	</div>
</div>
<div id="403">
	<div id="404" class="input-group mb-1">
		<span id="405" class="input-group-text">
			Codice Fiscale
		</span>
		<input id="input-anagrafica-codicefiscale" jsonkey="persona_${element != null ? element.id : 0}-codicefiscale" class="form-control" type="text" placeholder="Codice Fiscale" aria-label="Codice Fiscale" value="${element != null ? element.codicefiscale : ""}"/>
	</div>
</div>
<div id="407">
	<div id="408" class="input-group mb-1">
		<span id="409" class="input-group-text">
			P.IVA
		</span>
		<input id="input-anagrafica-partitaiva" jsonkey="persona_${element != null ? element.id : 0}-partitaiva" class="form-control" type="text" placeholder="P.IVA" aria-label="P.IVA" value="${element != null ? element.partitaiva : ""}"/>
	</div>
</div>
			`;
			function composeAnagraficaBody(){
	const nome = document.getElementById('input-anagrafica-nome');
	const cognome = document.getElementById('input-anagrafica-cognome');
	const comunenascita = document.getElementById('input-anagrafica-comunenascita');
	const provincianascita = document.getElementById('input-anagrafica-provincianascita');
	const statonascita = document.getElementById('input-anagrafica-statonascita');
	const datanascita = document.getElementById('input-anagrafica-datanascita');
	const nazionalita = document.getElementById('input-anagrafica-nazionalita');
	const cartaidentita = document.getElementById('input-anagrafica-cartaidentita');
	const codicefiscale = document.getElementById('input-anagrafica-codicefiscale');
	const partitaiva = document.getElementById('input-anagrafica-partitaiva');

	let body = {};
		body[nome.getAttribute('jsonkey')]= nome.value;
		body[cognome.getAttribute('jsonkey')]= cognome.value;
		body[comunenascita.getAttribute('jsonkey')]= comunenascita.value;
		body[provincianascita.getAttribute('jsonkey')]= provincianascita.value;
		body[statonascita.getAttribute('jsonkey')]= statonascita.value;
		body[datanascita.getAttribute('jsonkey')]= datanascita.value;
		body[nazionalita.getAttribute('jsonkey')]= nazionalita.value;
		body[cartaidentita.getAttribute('jsonkey')]= cartaidentita.value;
		body[codicefiscale.getAttribute('jsonkey')]= codicefiscale.value;
		body[partitaiva.getAttribute('jsonkey')]= partitaiva.value;

				return body;
			}
document.getElementById('dynamic-modal-save-btn').innerHTML = `<button id='salvaDynamic' class='btn btn-primary' type='button'>Salva</button>`;
salvaBtn = document.getElementById('salvaDynamic');
			salvaBtn.onclick= function() {
				if(element != null){
					updateEntity(composeAnagraficaBody);
				} else{
					insertEntity(composeAnagraficaBody);
				}
			}
	form.innerHTML = html;
			break;
		case 'contatti':
			modalTitle.textContent = (element != null ? 'Modifica ' : 'Aggiungi ') + 'Contatti'
			html = `
<div id="411">
	<div id="412" class="input-group mb-1">
		<span id="413" class="input-group-text">
			Email
		</span>
		<input id="input-contatti-email" jsonkey="persona_${element != null ? element.id : 0}-email" class="form-control" type="text" placeholder="Email" aria-label="Email" value="${element != null ? element.email : ""}"/>
	</div>
</div>
<div id="415">
	<div id="416" class="input-group mb-1">
		<span id="417" class="input-group-text">
			PEC
		</span>
		<input id="input-contatti-pec" jsonkey="persona_${element != null ? element.id : 0}-pec" class="form-control" type="text" placeholder="PEC" aria-label="PEC" value="${element != null ? element.pec : ""}"/>
	</div>
</div>
<div id="419">
	<div id="420" class="input-group mb-1">
		<span id="421" class="input-group-text">
			Telefono Cellulare
		</span>
		<input id="input-contatti-telefonocellulare" jsonkey="persona_${element != null ? element.id : 0}-telefonocellulare" class="form-control" type="text" placeholder="Telefono Cellulare" aria-label="Telefono Cellulare" value="${element != null ? element.telefonocellulare : ""}"/>
	</div>
</div>
<div id="423">
	<div id="424" class="input-group mb-1">
		<span id="425" class="input-group-text">
			Telefono Fisso
		</span>
		<input id="input-contatti-telefonofisso" jsonkey="persona_${element != null ? element.id : 0}-telefonofisso" class="form-control" type="text" placeholder="Telefono Fisso" aria-label="Telefono Fisso" value="${element != null ? element.telefonofisso : ""}"/>
	</div>
</div>
			`;
			function composeContattiBody(){
	const email = document.getElementById('input-contatti-email');
	const pec = document.getElementById('input-contatti-pec');
	const telefonocellulare = document.getElementById('input-contatti-telefonocellulare');
	const telefonofisso = document.getElementById('input-contatti-telefonofisso');

	let body = {};
		body[email.getAttribute('jsonkey')]= email.value;
		body[pec.getAttribute('jsonkey')]= pec.value;
		body[telefonocellulare.getAttribute('jsonkey')]= telefonocellulare.value;
		body[telefonofisso.getAttribute('jsonkey')]= telefonofisso.value;

				return body;
			}
document.getElementById('dynamic-modal-save-btn').innerHTML = `<button id='salvaDynamic' class='btn btn-primary' type='button'>Salva</button>`;
salvaBtn = document.getElementById('salvaDynamic');
			salvaBtn.onclick= function() {
				if(element != null){
					updateEntity(composeContattiBody);
				} else{
					insertEntity(composeContattiBody);
				}
			}
	form.innerHTML = html;
			break;
	}



    

    if(tipo == "disponibilit√†"){
		let select = document.getElementById('input-disponibilit√†-tipocontratto');
        let html = ``;
		for(lu of tipoContratti){
            html += `<option value='${lu.id}'>${lu.descrizione}</option>`;
        }
        select.innerHTML = html;
        if(element != null){
			select.value = element.tipocontratto.id
		}
	}
    else if(tipo == "esperienze"){
		let selectMans = document.getElementById('input-esperienze-mansione');
		let selectSettore = document.getElementById('input-esperienze-settore');

        let htmlMans = ``;
		for(lu of mansioni){
            htmlMans += `<option value='${lu.id}'>${lu.descrizione}</option>`;
        }
        selectMans.innerHTML = htmlMans;

        let htmlSett = ``;
		for(lu of settori){
            htmlSett += `<option value='${lu.id}'>${lu.descrizione}</option>`;
        }
        selectSettore.innerHTML = htmlSett;
        if(element != null){
			selectMans.value = element.mansione.id
            selectSettore.value = element.settore.id
		}
	}
    else if(tipo == "lavoriattuali"){
		let select = document.getElementById('input-lavoriattuali-mansione');
        let html = ``;
		for(lu of mansioni){
            html += `<option value='${lu.id}'>${lu.descrizione}</option>`;
        }
        select.innerHTML = html;
        if(element != null){
			select.value = element.mansione.id
		}
	}

    
    const modal = new bootstrap.Modal(document.getElementById('dynamicModal'));
    modal.show();
}


function insertEntity(bodyComposerFunction){
	let body = bodyComposerFunction();
	
	RestUtil.post('/api/entity/insert', '', body, 
        (data) => {
            const modal = bootstrap.Modal.getInstance(document.getElementById('dynamicModal'));
            modal.hide();
            // document.getElementById('dynamicForm').reset();
            refreshAll();
        }, 
        (error) => {
            console.error('Errore durante il salvataggio:', error);
            alert(error.message);
        }
    );
}

function updateEntity(bodyComposerFunction){
	let body = bodyComposerFunction();
	
	RestUtil.post('/api/entity/update', '', body, 
        (data) => {
            const modal = bootstrap.Modal.getInstance(document.getElementById('dynamicModal'));
            modal.hide();
            // document.getElementById('dynamicForm').reset();
            refreshAll();
        }, 
        (error) => {
            console.error('Errore durante l\'aggiornamento:', error);
            alert(error.message);
        }
    );
}

function deleteEntity(elementId, entity){
    let body = {
        "id": elementId,
        "entity": entity
    }
	
	RestUtil.post('/api/entity/delete', '', body, 
        (data) => {
            if(data === true){
                alert("Eliminazione riuscita")
                refreshAll();
            }
        }, 
        (error) => {
            console.error('Errore durante l\'eliminazione:', error);
            alert(error.message);
        }
    );
}

function deleteEntityAssociation(elementId, entity){
    let body = {
        "id": elementId,
        "entity": entity
    }
	
	RestUtil.post('/api/entity/delete-association', '', body, 
        (data) => {
            if(data === true){
                alert("Eliminazione riuscita")
                refreshAll();
            }
        }, 
        (error) => {
            console.error('Errore durante l\'eliminazione:', error);
            alert(error.message);
        }
    );
}

document.querySelectorAll('.card-header button[title="Aggiungi"]').forEach(btn => {
	btn.addEventListener('click', function(e) {
		e.stopPropagation();
		const card = btn.closest('.card');
		if (card) {
			// if (card.id === 'qualifiche') openDynamicModal('qualifiche');
			// else if (card.id === 'esperienze') openDynamicModal('esperienze');
			openDynamicModal(card.id);
			// Aggiungi altri casi per altre card...
		}
	});
});

function updateProfileImage(imageBase64) {
    const profileImage = document.getElementById('profile-image');
    const container = profileImage.closest('.profile-image-container');
    
    if (imageBase64) {
        profileImage.src = "data:image/jpg;base64,"+imageBase64;
        container.classList.add('has-image');
    } else {
        profileImage.src = ''; // Empty src will show the fallback icon
        container.classList.remove('has-image');
    }
}

function chooseImage() {
    // Create a hidden file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // Accept only image files
    
    // When a file is selected
    fileInput.addEventListener('change', function(event) {
        if (fileInput.files && fileInput.files[0]) {
            const file = fileInput.files[0];
            
            // Create FormData object to send the file
            const formData = new FormData();
            formData.append('image', file);

            RestUtil.post_multipart("/professionista-update-image", "", formData,
                (imageUrl) => {
                    refreshAll();
                },
                (error) => {
                    alert(error.message)
                }
            );
        }
    });
    
    // Trigger the file selection dialog
    fileInput.click();
}

// function checkNumber(input) {
//     const valore = input.value;
//     if (!Number.isInteger(Number(valore))) {
//       alert("Inserisci solo numeri interi.");
//       input.value = ""; // reset
//     }
// }


function checkNumber(input) {
    const valore = input.value;
    // Rimuovi eventuali errori precedenti
    input.classList.remove('is-invalid');
    let errorMsg = input.parentNode.querySelector('.invalid-feedback');
    if (errorMsg) errorMsg.remove();

    // if (valore.toLowerCase().includes('e')) {
    //     alert("Valore non valido. Niente 'e' o notazione scientifica.");
    //     input.focus();
    // }

    if (isNaN(Number(valore))) {
        input.classList.add('is-invalid');
        // Crea il messaggio di errore solo se non esiste gi√†
        if (!errorMsg) {
            errorMsg = document.createElement('div');
            errorMsg.className = 'invalid-feedback';
            errorMsg.innerText = "Inserisci solo numeri.";
            input.parentNode.appendChild(errorMsg);
        }
        input.value = ""; // reset
    }
}

function preventEKey(event) {
    if (event.key === 'e' || event.key === 'E') {
        event.preventDefault();
    }
}

function checkInteger(input) {
    const valore = input.value;
    const integerPart = valore.match(/^-?\d+(?=[.,]|$)/);
    // Rimuovi eventuali errori precedenti
    input.classList.remove('is-invalid');
    let errorMsg = input.parentNode.querySelector('.invalid-feedback');
    if (errorMsg) errorMsg.remove();

    // if (/e/i.test(valore)){ // controlla che la stringa contenga 'e' o 'E'
    if (!Number.isInteger(Number(valore))) {
        input.classList.add('is-invalid');
        // Crea il messaggio di errore solo se non esiste gi√†
        if (!errorMsg) {
            errorMsg = document.createElement('div');
            errorMsg.className = 'invalid-feedback';
            errorMsg.innerText = "Inserisci solo numeri interi.";
            input.parentNode.appendChild(errorMsg);
        }
        input.value = integerPart[0]; // reset
    }
}


function refreshAll(){
    getProfessionista();
    getDisponibilita();

getLavoroAttuale();

getEsperienza();

getSegnalazione();

getQualifica();


}

populateLookup();
getProfessionista();
getDisponibilita();

getLavoroAttuale();

getEsperienza();

getSegnalazione();

getQualifica();


