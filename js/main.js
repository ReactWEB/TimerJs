let now = new Date(),
    future = new Date(document.querySelector('.timer__main-clock'),
    diff = Math.floor((future.getTime() - now.getTime()) / 1000);

const counts = () => {
  let dateLeft = diff,
      dateTemp = 0;
    
  dateTemp = Math.floor(dateLeft / (60 * 60));
  dateLeft -= dateTemp * 60 * 60;
  if(dateTemp < 10){
    dateTemp = '0' + dateTemp; 
  }
  document.querySelector('.hours span').innerHTML = `${dateTemp} :`;

  dateTemp = Math.floor(dateLeft / 60);
  dateLeft -= dateTemp * 60;
  if(dateTemp < 10){
    dateTemp = '0' + dateTemp; 
  }
  document.querySelector('.minutes span').innerHTML = `${dateTemp} :`;

  if(dateTemp < 10){
    dateTemp = '0' + dateLeft; 
  }
  document.querySelector('.seconds span').innerHTML = dateTemp;
}
counts();
