var r1=0;
var r2=255;
var g1=0;
var g2=255;
var b1=0;
var b2=255;

function addImage(c1,ctx1,imgORIG,inpIMG,c2,ctx2,imgToAdd)

{
var img1 = document.getElementById(imgORIG);

ctx1.drawImage(img1, 0, 0,img1.width,img1.height,0,0,c1.width,c1.height);
var img2 = document.getElementById(imgToAdd);

ctx2.drawImage(img2, 0, 0,img2.width,img2.height,0,0,c2.width,c2.height);

var kk1=ctx1.getImageData(0,0,c1.width,c1.height);

var kk2=ctx2.getImageData(0,0,c2.width,c2.height);


var cor_R;

var cor_G;

var cor_B;




var val_R;

var val_G;

var val_B;


var cnt=0;

for(var rr=1;rr<=c2.height;rr++)

for(var cc=1;cc<=c2.width;cc++)

{pnt=(rr-1)*c2.width+(cc-1);

cnt=cnt+1;

cor_R=4*pnt-4;

cor_G=4*pnt-4+1;

cor_B=4*pnt-4+2;

val_R=kk1.data[cor_R];

val_G=kk1.data[cor_G];

val_B=kk1.data[cor_B];
val_R=parseInt(val_R);
val_G=parseInt(val_G);
val_B=parseInt(val_B);
if(val_R>=r1 && val_R<=r2 && val_G>=g1 && val_G<=g2 && val_B>=b1 && val_B<=b2)
{kk1.data[cor_R]=kk2.data[cor_R];

kk1.data[cor_G]=kk2.data[cor_G];

kk1.data[cor_B]=kk2.data[cor_B];}
}
  //end of if
ctx1.putImageData(kk1,0,0);

var imm2=c1.toDataURL();

document.getElementById(inpIMG).src=imm2;

document.getElementById(imgORIG).src=imm2;

}


function validateAndCorrectRGBData(rMin,rMax,gMin,gMax,bMin,bMax)
{
r1=document.getElementById(rMin).value;
r2=document.getElementById(rMax).value;
g1=document.getElementById(gMin).value;
g2=document.getElementById(gMax).value;
b1=document.getElementById(bMin).value;
b2=document.getElementById(bMax).value;
r1=parseInt(r1);
if(isNaN(r1))
{document.getElementById(rMin).value=0;}
else if(r1<0)
{document.getElementById(rMin).value=0;}
else if(r1>255)
{document.getElementById(rMin).value=255;}

g1=parseInt(g1);
if(isNaN(g1))
{document.getElementById(gMin).value=0;}
else if(g1<0)
{document.getElementById(gMin).value=0;}
else if(g1>255)
{document.getElementById(gMin).value=255;}

b1=parseInt(b1);
if(isNaN(b1))
{document.getElementById(bMin).value=0;}
else if(b1<0)
{document.getElementById(bMin).value=0;}
else if(b1>255)
{document.getElementById(bMin).value=255;}

r2=parseInt(r2);
if(isNaN(r2))
{document.getElementById(rMax).value=255;}
else if(r2<r1 || r2>255)
{document.getElementById(rMax).value=255;}

g2=parseInt(g2);
if(isNaN(g2))
{document.getElementById(gMax).value=255;}
else if(g2<g1 || g2>255)
{document.getElementById(gMax).value=255;}

b2=parseInt(b2);
if(isNaN(b2))
{document.getElementById(bMax).value=255;}
else if(b2<b1 || b2>255)
{document.getElementById(bMax).value=255;}
}
