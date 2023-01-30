
var myHeaders = new Headers();
myHeaders.append("apikey", "3dXvSln9l7T3i6m1Usp3ur31jAHqMPs7");
// z12ZqfhkKvW4cMDZtTyMcziZTLM4ABoW (1)
// 1SW7WZDkNkFx0hLPat3WcO7vTBxJw2kP (2)
// 3dXvSln9l7T3i6m1Usp3ur31jAHqMPs7 (3)
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

function search() {
  results.innerHTML=`<div class="d-flex justify-content-center loader">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`
    num=floatingNumber.value
    cun=floatingInput.value
    if (cun.startsWith("+91")) {
        if (num.length == 10 ) {
            fetch(`https://api.apilayer.com/number_verification/validate?number=${cun}${num}`, requestOptions).then(response => response.json()).then(result1 => displaydata(result1))

        }
        else {
            // console.log('enter 10 number');
            alert('Phone Number must be of 10 digit')
        }
    }
    else {
        // console.log('okk');
        // fetch(`https://api.apilayer.com/number_verification/validate?number=${cum}${num}`, requestOptions).then(response => response.json()).then(result1 => displaydata(result1))
        fetch(`https://api.apilayer.com/number_verification/validate?number=${cum}${num}`, requestOptions).then(response => response.json()).then(result1 => displaydata(result1))

      }
}

function reenter(){
  window.location="index.html"
}


function displaydata(validation) {
  valids=validation.valid
  numbers=validation.number
  internationals=validation.international_format
  countryprefixs=validation.country_prefix
  countrycodes=validation.country_code
  countrynames=validation.country_name 
  locations=validation.location 
  carriers=validation.carrier
  linetypes=validation.line_type

  results.innerHTML=`
  <div class="row mb-3 ">
    <label for="colFormLabel" class="col-sm-6 col-form-label col-form-label-sm">Valid <samp>: </samp></label>
    <div class="col-sm-6">
    <p class="mt-1 text-start">${valids}</p>            </div>
  </div>
          <div class="row mb-3 ">
            <label for="colFormLabel" class="col-sm-6 col-form-label col-form-label-sm">Number <samp>: </samp></label>
            <div class="col-sm-6">
            <p class="mt-1 text-start">${numbers}</p>            </div>
          </div>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-6 col-form-label col-form-label-sm">International_format <samp>: </samp></label>
            <div class="col-sm-6">
                <p class="mt-1">${internationals}</p>            </div>
          </div>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-6 col-form-label col-form-label-sm">Country_prefix <samp>: </samp></label>
            <div class="col-sm-6">
                <p class="mt-1">:${countryprefixs}</p>            </div>
          </div>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-6 col-form-label col-form-label-sm">Country_code <samp>: </samp> </label>
            <div class="col-sm-6">
                <p class="mt-1">${countrycodes}</p>            </div>
          </div>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-6 col-form-label col-form-label-sm">Country_name  <samp>:</samp></label>
            <div class="col-sm-6">
                <p class="mt-1">${countrynames}</p>            </div>
          </div>
          <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-6 col-form-label col-form-label-sm">Location <samp>: </samp> </label>
            <div class="col-sm-6">
                <p class="mt-1">${locations}</p>            </div>
          </div>
          <div class="row mb-1 ">
            <label for="colFormLabel" class="col-sm-6 col-form-label col-form-label-sm">Carrier <samp>: </samp></label>
            <div class="col-sm-6">
                <p class="mt-1">${carriers}</p>            </div>
          </div>
          <div class="row mb-1 ">
            <label for="colFormLabel" class="col-sm-6 col-form-label col-form-label-sm">Line_type <samp>: </samp></label>
            <div class="col-sm-6">
                <p class="mt-1">${linetypes}</p>            </div>
          </div>
          
        </div>
        <div class="row mt-2">
          <div class="d-grid gap-1 d-flex justify-content-center ">
  <button class="btn btn-primary me-md-2 p-2 w-50 " type="button" onclick="reenter()">Ok</button>
  
</div>
      </div>`
}