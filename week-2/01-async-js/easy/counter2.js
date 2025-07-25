//Counter without setInterval Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
let t=1;
function counter()
{
    t+=1;
    console.log(t);
    setTimeout(counter,1000);

}
counter();