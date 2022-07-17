let btn=document.getElementById('btn');
let output= document.getElementById('output');
let quotes=
  [
    '“You can get everything in life you want if you will just help enough other people get what they want.” —Zig Ziglar',
    '“Inspiration does exist, but it must find you working.” —Pablo Picasso',
    '“Do not settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had.” —Angela Bassett',
    '“Show up, show up, show up, and after a while the muse shows up, too.” —Isabel Allende',
    '“Do not bunt. Aim out of the ballpark. Aim for the company of immortals.” ―David Ogilvy',
   
   ' “If you believe something needs to exist, if it is something you want to use yourself, do not let anyone ever stop you from doing it.” —Tobias Lütke',
  ] ;
btn.addEventListener('click', function(){
    var randomQuote= quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})
