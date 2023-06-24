const calculateTemp = () => {
    
    const temperature = document.getElementById('temperature').value;
    const conversionOption = document.getElementById('conversionOption').value;

    let result;

    const fhToCel = (fahrenheit) => {
        let celsius =  Math.round((fahrenheit * 9/5) + 32);
        return celsius;
    }

    const celToFh = (celsius) => {
        let fahrenheit =  Math.round((celsius - 32) * 5/9);
        return fahrenheit;
    }

    // let result;
    // document.getElementById('finalResult').innerHTML = `temperature is ${fhToCel(temperature)}`


    if(conversionOption === "fahrenheit"){
        result = fhToCel(temperature);
        document.getElementById('finalResult').innerHTML = `= ${result} degree Fahrenheit `;
    }
    else{
        result = celToFh(temperature);
        document.getElementById('finalResult').innerHTML = `= ${result} degree Celsius `;
    }    

   
    


}