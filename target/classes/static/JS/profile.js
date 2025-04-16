function addArea() {
    let name=document.getElementById("valueName").value
    let type=document.getElementById("valueType").value
    switch (type) {
        case "string":
        document.getElementById("addArea").innerHTML+=
        "<div  class='input-group mb-1'>"+
            "<span class='input-group-text'>"+name+"</span>"+
            "<input id="+name+" class='form-control' type='text' placeholder="+name+" aria-label="+name+">"+
        "</div>"
            break;
        case "integer":
        document.getElementById("addArea").innerHTML+=
        "<div  class='input-group mb-1'>"+
            "<span class='input-group-text'>"+name+"</span>"+
            "<input id="+name+" class='form-control' type='number' step='1' placeholder="+name+" aria-label="+name+">"+
        "</div>"
            break;
        case "boolean":
        document.getElementById("addArea").innerHTML+=
        "<div  class='form-check'>"+
            "<input id="+name+" class='form-check-input' type='checkbox' value='false' aria-label="+name+">"+
            "<label class='form-check-label' for="+name+">"+name+"</label>"+
        "</div>"
            break;
        case "date":
        document.getElementById("addArea").innerHTML+=
        "<div  class='input-group mb-1'>"+
            "<span class='input-group-text'>"+name+"</span>"+
            "<input id="+name+" class='form-control' type='date' placeholder="+name+" aria-label="+name+">"+
        "</div>"
            break;
    
        default:
            break;
    }				
}

function delet(id){
    fetch('/profilo/delet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mapKey: id
        }),
      })
      .then(response => response.json())
      .then(data => {
        document.getElementById(id).remove()
        console.log('Risposta dal server:', data);
      })
      .catch(error => {
        console.error('Errore nella richiesta:', error);
      });
}