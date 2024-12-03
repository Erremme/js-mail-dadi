/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email.
NON POTETE UTILIZZARE NESSUN METODO COME:
- includes
- indexOf
- find
- search
- ecc...*/
const authorizedMail =['giovanni20@example.com', 'raffaele20@example.com','francesco20@example.com']
const userMail = prompt('Inserisci la tua email')
isUserAuthorized = false;
for(let i = 0; i < authorizedMail.length; i++){
    if(authorizedMail[i] === userMail)
        isUserAuthorized = true;
}

if(isUserAuthorized){
    alert('Sei autorizzado ad accedere')
}else{
    alert('Mi dispiace non sei autorizzato')
}