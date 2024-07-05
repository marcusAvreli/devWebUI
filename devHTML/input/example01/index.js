// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter, errMsg) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function(event) {
    textbox.addEventListener(event, function(e) {
      if (inputFilter(this.value)) {
        // Accepted value
        if (["keydown","mousedown","focusout"].indexOf(e.type) >= 0){
          this.classList.remove("input-error");
          this.setCustomValidity("");
        }
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        // Rejected value - restore the previous one
        this.classList.add("input-error");
        this.setCustomValidity(errMsg);
        this.reportValidity();
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        // Rejected value - nothing to restore
        this.value = "";
      }
    });
  });
}


// Install input filters.
setInputFilter(document.getElementById("intTextBox"), function(value) {
  return /^-?\d*$/.test(value); }, "Must be an integer");
setInputFilter(document.getElementById("uintTextBox"), function(value) {
  return /^\d*$/.test(value); }, "Must be an unsigned integer");
setInputFilter(document.getElementById("intLimitTextBox"), function(value) {
  return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 500); }, "Must be between 0 and 500");
setInputFilter(document.getElementById("floatTextBox"), function(value) {
  return /^-?\d*[.,]?\d*$/.test(value); }, "Must be a floating (real) number");
setInputFilter(document.getElementById("currencyTextBox"), function(value) {
  return /^-?\d*[.,]?\d{0,2}$/.test(value); }, "Must be a currency value");
setInputFilter(document.getElementById("latinTextBox"), function(value) {
  return /^[a-z]*$/i.test(value); }, "Must use alphabetic latin characters");
setInputFilter(document.getElementById("hexTextBox"), function(value) {
  return /^[0-9a-f]*$/i.test(value); }, "Must use hexadecimal characters");
  
 function  getOptions() {
    const defaultFormat = new Intl.NumberFormat();
    const options = Object.assign(defaultFormat.resolvedOptions(), this.config);

    // Autoset style
    if (this.percent) {
      options.style = "percent";
    }
    if (this.currency) {
      options.currency = this.currency;
      options.style = "currency";
    }
    if (options.unit) {
      options.style = "unit";
    }
    return options;
  };
  const test=new Intl.NumberFormat("en", this.getOptions());
  const formatted = test.format(1);
  console.log("formatted:"+formatted);
  console.log("formatted:"+Intl.NumberFormat( 'ja-JP',{ style: 'currency', currency: 'JPY' }).format(123456.719));
  console.log("formatted:"+Intl.NumberFormat( 'ru',{ style: 'currency', currency: 'JPY' }).format(1));