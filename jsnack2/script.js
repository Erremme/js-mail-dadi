
/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"*/

//1Chiedo al Pc di generare un Num per il giocarote da 1 a 6
const playerNumb = Math.floor(Math.random () * 6) + 1;
//2 Chiedo al Pc di generare un Num per se stesso da 1 a 6
const cpuNumb = Math.floor(Math.random () * 6) + 1;
console.log( playerNumb , cpuNumb )
//3Confronto i due numeri 
//4 Se è maggiore il numero del player mando il messaggio :" ha vinto PLAYER/"
if(playerNumb > cpuNumb){
  console.log(' Ha vinto : PLAYER')  
}else if(playerNumb < cpuNumb){
//5 Altrimenti Se è maggiore il numero del cpu mando il messaggio :" ha vinto CPU/" 
    console.log('Ha vinto: CPU')
}else{
 //6 Altrimenti mando il messaggio " Avete pareggiato" 
 console.log("Avete pareggiato")  
}

