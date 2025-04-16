function checkboxValue(checkbox) {
    var checkboxValue = checkbox.checked ? "true" : "false";
    checkbox.value=checkboxValue;
    console.log(checkbox.value)
}