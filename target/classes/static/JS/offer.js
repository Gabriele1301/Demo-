var jobs=[
    {
        "id":1,
        "descr":"descrizione",
        "ruolo":"ruolo",
        "stipendio":"100"
        ,"date":"00/00/00"
        
    },{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
    ,{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
];
var filtrs={};
var index=1
function eventsInit() {
    let stipendioMinimo=document.getElementById("stipendio-minimo")
    stipendioMinimo.addEventListener('input',()=>{
        document.getElementById("stipendio-minimo-value").value=stipendioMinimo.value
    })
    let stipendioMinimoValue=document.getElementById("stipendio-minimo-value")
    stipendioMinimoValue.addEventListener('input',()=>{
        if (stipendioMinimoValue.value=='') {
            stipendioMinimoValue.value=0
        }
        document.getElementById("stipendio-minimo").value=stipendioMinimoValue.value
        stipendioMinimo.dispatchEvent(new Event('input'))
    })
    let filtro=document.querySelectorAll('input[name]')
    filtro.forEach(element=>{
        element.addEventListener('input',()=>{
            filtrs[element.getAttribute('name')]=element.value
        })
    })

    document.getElementById('filtro').addEventListener('change',()=>{
    if (filtrs['date']) {
        filtrs['date']= new Date(Date.now()-Number(filtrs['date']*1000*60*60*24)).toLocaleDateString()
    
    }
    console.log(filtrs)
    RestUtil.post('...',null,filtrs,filtroOk,filtroKo)
    })

    // carica le offerte
    jobsLoad(1)

    document.querySelectorAll('svg').forEach(element=>{

        element.addEventListener('click',()=>{
            
        })
    })

}

eventsInit()
// fetch("").then((data)=>{
//     data.forEach(element=>{
//         jobs.push(element)
//     })
// })





// ogni modifica nei filtri manda il post per aggiornare la lista 


function filtroOk(data) {
    jobs=data
    jobsLoad(1)
}
function filtroKo(data) {
}

document.getElementById('prev').addEventListener('click',()=>{
    pagPrev()
})
 
document.getElementById('next').addEventListener('click',()=>{
    pagNext()
})






function redirect(id) {
    window.open("/jobs?id="+id, '_blank');
}

function pagPrev() {
    if (index>1) {
        index--
    }
    jobsLoad(index)
}
function pagNext() {
    if (index!=Math.ceil(jobs.length/5)) {
        index++
        
    }
    jobsLoad(index)
}
function pagination() {
    let elements=document.querySelectorAll('.page-item .page-link')
    elements.forEach(element=>{
        element.addEventListener('click',()=>{
            index=element.getAttribute('value')

            jobsLoad(index)
        })
    })
    
}
function paginatCleanActive() {
    document.querySelectorAll('.page-link').forEach(element=>{
            element.classList.remove('active')
        })
    }
function paginationButtons() {
    let iStart=1
    let iEnd=Math.ceil(jobs.length/5)
    if ( Math.ceil(jobs.length/5)>=5 ) {
        iEnd=5
        
        if (index>2 && index < Math.ceil(jobs.length/5)-1 ) {
                iStart=Number(index)-2
                iEnd=Number(index)+2
        }
        if (index > Math.ceil(jobs.length/5)-2) {
            iEnd=Math.ceil(jobs.length/5)
            iStart=iEnd-4
        }
    }
    document.querySelectorAll('.page-item .page-link').forEach(element=>{
        element.parentElement.remove()
    })
        for (let i = iStart; i <= iEnd ;i++) {
            let pageItem=document.getElementById('next')
            pageItem.insertAdjacentHTML('beforebegin','<li class="page-item">'+
                '<a class="page-link" href="#" value="'+i+'">'+(i)+'</a>'+
                '</li>')
        }
    pagination()
}
// funzione che si occupa ad aggiungere le offerte
function jobsLoad(index) {
    paginationButtons()
    let jobsList=document.getElementById('jobs')
    jobsList.innerHTML=""
    let startIndex=(index-1)*5
    let lastIndex;
    if (index*5>jobs.length) {
        lastIndex=jobs.length
    }else{
        lastIndex=index*5
    }

    /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.722 15.977a3.5 3.5 0 0 1 4.556 0l2.727 2.337a.3.3 0 0 0 .495-.228V5.25a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v12.836a.3.3 0 0 0 .495.228l2.727-2.337zM7 3.25h10a2 2 0 0 1 2 2v14.576a1 1 0 0 1-1.65.759l-4.048-3.47a2 2 0 0 0-2.604 0l-4.047 3.47A1 1 0 0 1 5 19.825V5.25a2 2 0 0 1 2-2z"></path></svg> */
    for (let i = startIndex; i < lastIndex; i++) {
        let job=jobs[i]
        jobsList.innerHTML+=
        '<div class="card pointer mb-3" onclick="redirect('+job.id+')" >'+
            '<div  class="card-body">'+
                '<div class="float-end focus" style="border-radius: 50%;"><svg id="svg'+job.id+'" style="width:30px;height:30px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9.722 15.977a3.5 3.5 0 0 1 4.556 0l2.727 2.337a.3.3 0 0 0 .495-.228V5.25a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v12.836a.3.3 0 0 0 .495.228l2.727-2.337zM7 3.25h10a2 2 0 0 1 2 2v14.576a1 1 0 0 1-1.65.759l-4.048-3.47a2 2 0 0 0-2.604 0l-4.047 3.47A1 1 0 0 1 5 19.825V5.25a2 2 0 0 1 2-2z"></path></svg> </div>'+
                '<h6>'+job.ruolo+'</h6>'+
                '<p6>'+job.descr+'</p6>'+
                '</div>'+
                '<p6 class="d-flex justify-content-end ">'+job.date+'</p6>'+
        '</div>'
    }
    paginatCleanActive()
    document.querySelector('.page-item .page-link[value="'+index+'"]').classList.add('active')
    
}
