var xchange_cnt=0;


function swap_values(val1,val2)
{

val1=val1+val2;

val2=val1-val2;

}


function getMousePosAbs(c,evt)
{
var rect=c.getBoundingClientRect();
return {
x:(evt.clientX),
y:(evt.clientY)
};
}

function getMousePos(c,evt)
{
var rect=c.getBoundingClientRect();
return {
x:(evt.clientX-rect.left),
y:(evt.clientY-rect.top)
};
}

function commitChanges(c1,ctx1,c2,ctx2,inp_img,orig_img,outp_img)
{
var mat2Data=ctx2.getImageData(0,0,c2.width,c2.height);

ctx1.putImageData(mat2Data,0,0);

var imm2=c2.toDataURL();

document.getElementById(inp_img).src=imm2;

document.getElementById(orig_img).src=imm2;

}

function makeBoxBWCoordinates(c,ctx,X1,Y1,X2,Y2,inp_img,outp_img,img_Orig)
{
var XMAX=0;
var XMIN=0;
var YMAX=0;
var YMIN=0;
if(X1>X2)
{XMAX=X1;
 XMIN=X2;}
else
{XMAX=X2;
 XMIN=X1;}

if(Y1>Y2)
{YMAX=Y1;
 YMIN=Y2;}
else
{YMAX=Y2;
 YMIN=Y1;}

var widd;
var hait;
if(self.innerWidth>768)
{widd=423;
hait=238;
widd=400;
hait=250;
}
else
{widd=c.width;
hait=c.height;}

alert("Width:"+String(c.width)+"\nHeight:"+String(c.height));

var kk=ctx.getImageData(0,0,widd,hait);

var cor_R=0;

var cor_G=0;

var cor_B=0;
var varTemp=0;
var rect=c.getBoundingClientRect();
var count=0;

for(var rr=YMIN-rect.top;rr<=YMAX-rect.top;rr++)

for(var cc=XMIN-rect.left;cc<=XMAX-rect.left;cc++)

{varTemp=(rr-1)*widd+(cc-1);

count=count+1;

cor_R=4*varTemp-4;

cor_G=4*varTemp-4+1;

cor_B=4*varTemp-4+2;


kk.data[cor_R]=255;

kk.data[cor_G]=0;

kk.data[cor_B]=0;
}

ctx.putImageData(kk,0,0);


var imm1=c.toDataURL();

document.getElementById(inp_img).src=imm1;

document.getElementById(outp_img).src=imm1;

document.getElementById(img_Orig).src=imm1;

}

function doOverLayWork(c2,ctx2,c3,ctx3,inp_img,outp_img,img_Orig,evt)
{

if(self.innerWidth>768)
{widd=423;
hait=238;}
else
{widd=c2.width;
hait=c2.height;}

var mousePos=getMousePos(c3,evt);
var varX=mousePos.x;
var varY=mousePos.y;
var ii=(varY-1)*widd+(varX-1);


document.getElementById("mouseX").value=varX;
document.getElementById("mouseY").value=varY;
var kk=ctx3.getImageData(0,0,widd,hait);

var kk2=ctx2.getImageData(0,0,widd,hait);


var cor_R=4*ii-4;

var cor_G=4*ii-4+1;

var cor_B=4*ii-4+2;


kk.data[cor_R]=255;

kk.data[cor_G]=0;

kk.data[cor_B]=0;
kk2.data[cor_R]=255;

kk2.data[cor_G]=0;

kk2.data[cor_B]=0;

ctx3.putImageData(kk,0,0);

ctx2.putImageData(kk2,0,0);


var imm1=c2.toDataURL();

document.getElementById(inp_img).src=imm1;

var imm2=c3.toDataURL();

document.getElementById(outp_img).src=imm2;

document.getElementById(img_Orig).src=imm2;

}

function doOverLayFromJSFile(c,ctx)
{

}

function advancedPaint(hidden_div,main_div,imgORIG,img_name,outp_img,c2,ctx2,c3,ctx3,typ,thres,thres1,thres2)

{
thres1=thres1.valueOf();

thres2=thres2.valueOf();

if(thres1>thres2)

{

//var thresh_temp;
//thresh_temp=thres1;
//thres1=thres2;
//thres2=thresh_temp;



}


document.getElementById('holder').value=thres1+" to "+thres2;



xchange_cnt=xchange_cnt+1;

if(xchange_cnt>3)

{xchange_cnt=0;}

var img2 = document.getElementById(imgORIG);

ctx2.drawImage(img2, 0, 0,img2.width,img2.height,0,0,c2.width,c2.height);

kk=ctx2.getImageData(0,0,c2.width,c2.height);

kk2=ctx2.getImageData(0,0,c2.width,c2.height);


var cor_R;

var cor_G;

var cor_B;


var cor_R2;

var cor_G2;

var cor_B2;


var cor_R3;

var cor_G3;

var cor_B3;


var val_R;

var val_G;

var val_B;


var cnt=0;
if(typ=='threshold')

{
var thval=thres;

for(var ii=2;ii<(c2.width*c2.height);ii++)

{cnt=cnt+1;

cor_R=4*ii-4;

cor_G=4*ii-4+1;

cor_B=4*ii-4+2;


val_R=kk.data[cor_R];

val_G=kk.data[cor_G];

val_B=kk.data[cor_B];


if((val_B+val_R+val_G)/3>thval)

{kk2.data[cor_R]=kk.data[cor_R];

kk2.data[cor_G]=kk.data[cor_G];

kk2.data[cor_B]=kk.data[cor_B];}

else

{kk2.data[cor_R]=0;

kk2.data[cor_G]=0;

kk2.data[cor_B]=0;}
}
}  //end of if(typp=='threshold')

else if(typ=='-ve')

{
for(var ii=1;ii<(c2.width*c2.height);ii++)

{cnt=cnt+1;

cor_R=4*ii-4;

cor_G=4*ii-4+1;

cor_B=4*ii-4+2;


kk2.data[cor_R]=255-kk.data[cor_R];

kk2.data[cor_G]=255-kk.data[cor_G];

kk2.data[cor_B]=255-kk.data[cor_B];
}
}  //end of if(typp=='-ve')

else if(typ=='same')

{
for(var rr=1;rr<=c2.height;rr++)

for(var cc=1;cc<=c2.width;cc++)

{pnt=(rr-1)*c2.width+(cc-1);

cnt=cnt+1;

cor_R=4*pnt-4;

cor_G=4*pnt-4+1;

cor_B=4*pnt-4+2;


kk2.data[cor_R]=kk.data[cor_R];

kk2.data[cor_G]=kk.data[cor_G];

kk2.data[cor_B]=kk.data[cor_B];
}
}

else if(typ=='edge')

{
var pnt1=0;

var pnt2=0;

var pnt3=0;

var sens=thres;


for(var rr=2;rr<=c2.height;rr++)

for(var cc=2;cc<=c2.width;cc++)

{
pnt=(rr-1)*c2.width+(cc-1);

pnt2=(rr-1)*c2.width+((cc-1)-1);

pnt3=((rr-1)-1)*c2.width+(cc-1);

cor_R=4*pnt-4;

cor_G=4*pnt-4+1;

cor_B=4*pnt-4+2;


cor_R2=4*pnt2-4;

cor_G2=4*pnt2-4+1;

cor_B2=4*pnt2-4+2;


cor_R3=4*pnt3-4;

cor_G3=4*pnt3-4+1;

cor_B3=4*pnt3-4+2;


if(Math.abs(kk.data[cor_R]-kk.data[cor_R2])>sens || Math.abs(kk.data[cor_G]-kk.data[cor_G2])>sens || Math.abs(kk.data[cor_B]-kk.data[cor_B2])>sens)

{kk2.data[cor_R]=255;

kk2.data[cor_G]=0;

kk2.data[cor_B]=0;}

else

{
kk2.data[cor_R]=0;

kk2.data[cor_G]=0;

kk2.data[cor_B]=0;
}


if(Math.abs(kk.data[cor_R]-kk.data[cor_R3])>sens || Math.abs(kk.data[cor_G]-kk.data[cor_G3])>sens || Math.abs(kk.data[cor_B]-kk.data[cor_B3])>sens)

{kk2.data[cor_R]=255;

kk2.data[cor_G]=0;

kk2.data[cor_B]=0;}

}

}  //end of if(typp=='edge')

else if(typ=='edgewithbckimg')

{
var pnt1=0;

var pnt2=0;

var pnt3=0;

var sens=thres;


for(var rr=2;rr<=c2.height;rr++)

for(var cc=2;cc<=c2.width;cc++)

{
pnt=(rr-1)*c2.width+(cc-1);

pnt2=(rr-1)*c2.width+((cc-1)-1);

pnt3=((rr-1)-1)*c2.width+(cc-1);

cor_R=4*pnt-4;

cor_G=4*pnt-4+1;

cor_B=4*pnt-4+2;


cor_R2=4*pnt2-4;

cor_G2=4*pnt2-4+1;

cor_B2=4*pnt2-4+2;


cor_R3=4*pnt3-4;

cor_G3=4*pnt3-4+1;

cor_B3=4*pnt3-4+2;


if(Math.abs(kk.data[cor_R]-kk.data[cor_R2])>sens || Math.abs(kk.data[cor_G]-kk.data[cor_G2])>sens || Math.abs(kk.data[cor_B]-kk.data[cor_B2])>sens)

{kk2.data[cor_R]=255;

kk2.data[cor_G]=0;

kk2.data[cor_B]=0;}

else

{
kk2.data[cor_R]=kk.data[cor_R];

kk2.data[cor_G]=kk.data[cor_G];

kk2.data[cor_B]=kk.data[cor_B];
}


if(Math.abs(kk.data[cor_R]-kk.data[cor_R3])>sens || Math.abs(kk.data[cor_G]-kk.data[cor_G3])>sens || Math.abs(kk.data[cor_B]-kk.data[cor_B3])>sens)

{kk2.data[cor_R]=255;

kk2.data[cor_G]=0;

kk2.data[cor_B]=0;}

}

}  //end of if(typp=='edgewithbckimg')

else if(typ=='edgewithreal')

{
var pnt1=0;

var pnt2=0;

var pnt3=0;

var sens=thres;


for(var rr=2;rr<=c2.height;rr++)

for(var cc=2;cc<=c2.width;cc++)

{
pnt=(rr-1)*c2.width+(cc-1);

pnt2=(rr-1)*c2.width+((cc-1)-1);

pnt3=((rr-1)-1)*c2.width+(cc-1);

cor_R=4*pnt-4;

cor_G=4*pnt-4+1;

cor_B=4*pnt-4+2;


cor_R2=4*pnt2-4;

cor_G2=4*pnt2-4+1;

cor_B2=4*pnt2-4+2;


cor_R3=4*pnt3-4;

cor_G3=4*pnt3-4+1;

cor_B3=4*pnt3-4+2;


if(Math.abs(kk.data[cor_R]-kk.data[cor_R2])>sens || Math.abs(kk.data[cor_G]-kk.data[cor_G2])>sens || Math.abs(kk.data[cor_B]-kk.data[cor_B2])>sens)

{kk2.data[cor_R]=kk.data[cor_R];

kk2.data[cor_G]=kk.data[cor_G];

kk2.data[cor_B]=kk.data[cor_B];}







else

{
kk2.data[cor_R]=0;

kk2.data[cor_G]=0;

kk2.data[cor_B]=0;
}


if(Math.abs(kk.data[cor_R]-kk.data[cor_R3])>sens || Math.abs(kk.data[cor_G]-kk.data[cor_G3])>sens || Math.abs(kk.data[cor_B]-kk.data[cor_B3])>sens)

{kk2.data[cor_R]=kk.data[cor_R];

kk2.data[cor_G]=kk.data[cor_G];

kk2.data[cor_B]=kk.data[cor_B];}

}

}  //end of if(typp=='edgewithreal')


else if(typ=='xchange')

{
if(xchange_cnt==0)

{
for(var rr=2;rr<=c2.height;rr++)

for(var cc=2;cc<=c2.width;cc++)

{
pnt=(rr-1)*c2.width+(cc-1);

cor_R=4*pnt-4;

cor_G=4*pnt-4+1;

cor_B=4*pnt-4+2;

kk2.data[cor_R]=kk.data[cor_B];

kk2.data[cor_G]=kk.data[cor_R];

kk2.data[cor_B]=kk.data[cor_G];
}
}

else if(xchange_cnt==1)

{
for(var rr=2;rr<=c2.height;rr++)

for(var cc=2;cc<=c2.width;cc++)

{
pnt=(rr-1)*c2.width+(cc-1);

cor_R=4*pnt-4;

cor_G=4*pnt-4+1;

cor_B=4*pnt-4+2;

kk2.data[cor_R]=kk.data[cor_G];

kk2.data[cor_G]=kk.data[cor_B];

kk2.data[cor_B]=kk.data[cor_R];
}
}

else if(xchange_cnt==2)

{
for(var rr=2;rr<=c2.height;rr++)

for(var cc=2;cc<=c2.width;cc++)

{
pnt=(rr-1)*c2.width+(cc-1);

cor_R=4*pnt-4;

cor_G=4*pnt-4+1;

cor_B=4*pnt-4+2;

kk2.data[cor_R]=kk.data[cor_B];

kk2.data[cor_G]=kk.data[cor_G];

kk2.data[cor_B]=kk.data[cor_R];
}
}

else if(xchange_cnt==3)

{
for(var rr=2;rr<=c2.height;rr++)

for(var cc=2;cc<=c2.width;cc++)

{
pnt=(rr-1)*c2.width+(cc-1);


cor_R=4*pnt-4;

cor_G=4*pnt-4+1;

cor_B=4*pnt-4+2;

kk2.data[cor_R]=kk.data[cor_G];

kk2.data[cor_G]=kk.data[cor_R];

kk2.data[cor_B]=kk.data[cor_B];
}
}
} //end of xchange

else 
if(typ=='threshold2')

{
var thres_avg=0;

for(var ii=2;ii<(c2.width*c2.height);ii++)

{
cor_R=4*ii-4;

cor_G=4*ii-4+1;

cor_B=4*ii-4+2;


val_R=kk.data[cor_R];

val_G=kk.data[cor_G];

val_B=kk.data[cor_B];


thres_avg=(val_R+val_G+val_B)/3;


if(thres_avg>=thres1 && thres_avg<=thres2)

{
kk2.data[cor_R]=kk.data[cor_R];

kk2.data[cor_G]=kk.data[cor_G];

kk2.data[cor_B]=kk.data[cor_B];
}

else
{
kk2.data[cor_R]=0;

kk2.data[cor_G]=0;

kk2.data[cor_B]=0;
}
}
}

else if(typ=='brightness')

{
for(var rr=2;rr<=c2.height;rr++)

for(var cc=2;cc<=c2.width;cc++)

{
pnt=(rr-1)*c2.width+(cc-1);

cor_R=4*pnt-4;

cor_G=4*pnt-4+1;

cor_B=4*pnt-4+2;

if(kk.data[cor_R]+thres/5>=0 && kk.data[cor_R]+thres/5<=255)

{kk2.data[cor_R]=kk.data[cor_R]+thres/5;}

if(kk.data[cor_G]+thres/5>=0 && kk.data[cor_G]+thres/5<=255)

{kk2.data[cor_G]=kk.data[cor_G]+thres/5;}

if(kk.data[cor_B]+thres/5>=0 && kk.data[cor_B]+thres/5<=255)

{kk2.data[cor_B]=kk.data[cor_B]+thres/5;}
}
}

else if(typ=='mouseMode')
{
document.getElementById(hidden_div).style.display='block';
 document.getElementById(main_div).style.display='none';}

ctx3.putImageData(kk2,0,0);

var imm2=c3.toDataURL();

document.getElementById(outp_img).src=imm2;
}

