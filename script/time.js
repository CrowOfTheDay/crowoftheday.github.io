let options = {
    timeZone: 'Etc/GMT-7', // sign is inverted fuck you
    hour: 'numeric',
    minute: 'numeric',
},
    formatter = new Intl.DateTimeFormat([], options);

console.log(formatter.format(new Date()));
document.getElementById("timezone").innerHTML = formatter.format(new Date());