// var myHeaders = new Headers();
// myHeaders.append("apikey", "z12ZqfhkKvW4cMDZtTyMcziZTLM4ABoW");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// function searc{
//     num=floatingNumber.value
//     cun=floatingInput.value
//     if (cun.startsWith("+91")) {
//         if (num.length == 10) {
//             fetch(`https://api.apilayer.com/number_verification/validate?number=+918078210951`, requestOptions)
//             .then(response => response.json())
//             .then(result1 => displaydata(result1))

//         }
//         else {
//             // console.log('enter 10 number');
//             alert('re enter')
//         }
//     }
//     else {
//         // console.log('okk');
//         alert('not okk')
//     }
// }


// function displaydata(validation) {
//   valids=validation.valid
//   numbers=validation.number
//   internationals=validation.international_format
//   countryprefixs=validation.country_prefix
//   countrycodes=validation.country_code
//   countrynames=validation.country_name 
//   locations=validation.locations 
//   carriers=validation.carrier
//   linetypes=validation.line_type

//   result.innerHTML=`
//   <div class="row mb-3 ">
//     <label for="colFormLabel" class="col-sm-6 col-form-label col-form-label-sm">Valid <samp>: </samp></label>
//     <div class="col-sm-6">
//     <p class="mt-1 text-start">${valids}</p>            </div>
//   </div>
//           <div class="row mb-3 ">
//             <label for="colFormLabel" class="col-sm-6 col-form-label col-form-label-sm">Number <samp>: </samp></label>
//             <div class="col-sm-6">
//             <p class="mt-1 text-start">${numbers}</p>            </div>
//           </div>
//           <div class="row mb-3">
//             <label for="colFormLabel" class="col-sm-6 col-form-label col-form-label-sm">International_format <samp>: </samp></label>
//             <div class="col-sm-6">
//                 <p class="mt-1">${internationals}</p>            </div>
//           </div>
//           <div class="row mb-3">
//             <label for="colFormLabel" class="col-sm-6 col-form-label col-form-label-sm">Country_prefix <samp>: </samp></label>
//             <div class="col-sm-6">
//                 <p class="mt-1">${countryprefixs}</p>            </div>
//           </div>
//           <div class="row mb-3">
//             <label for="colFormLabel" class="col-sm-6 col-form-label col-form-label-sm">Country_code <samp>: </samp> </label>
//             <div class="col-sm-6">
//                 <p class="mt-1">${countrycodes}</p>            </div>
//           </div>
//           <div class="row mb-3">
//             <label for="colFormLabel" class="col-sm-6 col-form-label col-form-label-sm">Country_name  <samp>:</samp></label>
//             <div class="col-sm-6">
//                 <p class="mt-1">United States of America</p>            </div>
//           </div>
//           <div class="row mb-3">
//             <label for="colFormLabel" class="col-sm-6 col-form-label col-form-label-sm">Location <samp>: </samp> </label>
//             <div class="col-sm-6">
//                 <p class="mt-1">${countrynames}</p>            </div>
//           </div>
//           <div class="row mb-1 ">
//             <label for="colFormLabel" class="col-sm-6 col-form-label col-form-label-sm">Carrier <samp>: </samp></label>
//             <div class="col-sm-6">
//                 <p class="mt-1">${locations}</p>            </div>
//           </div>
//           <div class="row mb-1 ">
//             <label for="colFormLabel" class="col-sm-6 col-form-label col-form-label-sm">Line_type <samp>: </samp></label>
//             <div class="col-sm-6">
//                 <p class="mt-1">${linetypes}</p>            </div>
//           </div>

//         </div>`
// }


var myHeaders = new Headers();
myHeaders.append("apikey", "1SW7WZDkNkFx0hLPat3WcO7vTBxJw2kP");
// z12ZqfhkKvW4cMDZtTyMcziZTLM4ABoW
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

function search() {
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

        </div>`
}