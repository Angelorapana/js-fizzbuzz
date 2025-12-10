// Scrivi un programma che stampi i numeri da 1 a 100, 
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


//Come faccio a sapere se un numero è divisibile per?
//Quando il risultato della divisione di numero / 3 o / 5 è un numero intero

let numero;



for (let numero = 1; numero <= 100; numero = numero +1 ){
    
    if (numero % 3 == 0 && numero % 5 == 0) { console.log (numero + " FizzBuzz ")}

      else if (numero % 5 == 0 ){console.log(numero + " Buzz ")}

       else if (numero % 3 == 0){console.log(numero + " Fizz ")} 

       else  {(numero % 3 !== 0 && numero % 5 !== 0) }{console.log(numero)};
}

//Nota: è importante anche se si tratta di operazioni l'ordine in cui viene eseguita la richiesta, 
// è stato necessario inserire prima il cmd relativo al consolelog FIZZBUZZ e poi di seguiti i successivi



// ??Perchè il cmd " else if " finale senza if non funziona??  


 // let numero;
//let risultatoDivisoTre = (numero / 3);
//let risultatoDivisoCinque = (numero / 5);



//for (let numero = 1; numero <= 100; numero = numero +1 ){
    
  //  let risultatoDivisoTre = (numero/3)
  //  let risultatoDivisoCinque = (numero/5)
    // if (Number.isInteger(risultatoDivisoTre) && Number.isInteger(risultatoDivisoCinque)) { console.log (numero + " FizzBuzz ")}
    //  else if (Number.isInteger(risultatoDivisoCinque )){console.log(numero + " Buzz ")}
      // else if (Number.isInteger(risultatoDivisoTre)){console.log(numero + " Fizz ")} 
       // else if (!Number.isInteger(risultatoDivisoTre) && !Number.isInteger(risultatoDivisoCinque)) {console.log(numero)};}