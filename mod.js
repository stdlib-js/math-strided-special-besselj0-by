// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,u=e.__defineSetter__,i=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,y="set"in t,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,n,t.get),y&&u&&u.call(r,n,t.set),r},l=n()?c:v;var y=function(r,n,t){l(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r,n,t,e,o,a,u,i){var f,c,v,l;if(r<=0)return e;for(f=t<0?(1-r)*t:0,c=o<0?(1-r)*o:0,l=0;l<r;l++)void 0!==(v=u.call(i,n[f],l,f,c,n,e))&&(e[c]=a(v)),f+=t,c+=o;return e};var b=function(r,n,t,e,o,a,u,i,f,c){var v,l,y,p;if(r<=0)return o;for(v=e,l=u,p=0;p<r;p++)void 0!==(y=f.call(c,n[v],p,v,l,n,o))&&(o[l]=i(y)),v+=t,l+=a;return o},w=p;y(w,"ndarray",b);var A=w,d=Math.sqrt;var s=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return s&&"symbol"==typeof Symbol.toStringTag},h=Object.prototype.toString,m=h;var U=function(r){return m.call(r)},N=Object.prototype.hasOwnProperty;var g=function(r,n){return null!=r&&N.call(r,n)},j="function"==typeof Symbol?Symbol.toStringTag:"",I=g,O=j,S=h;var E=U,F=function(r){var n,t,e;if(null==r)return S.call(r);t=r[O],n=I(r,O);try{r[O]=void 0}catch(n){return S.call(r)}return e=S.call(r),n?r[O]=t:delete r[O],e},H=_()?F:E,T=H,G="function"==typeof Uint32Array;var P="function"==typeof Uint32Array?Uint32Array:null,L=function(r){return G&&r instanceof Uint32Array||"[object Uint32Array]"===T(r)},M=P;var V=function(){var r,n;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,4294967296,4294967297]),r=L(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var W="function"==typeof Uint32Array?Uint32Array:void 0,k=function(){throw new Error("not implemented")},x=V()?W:k,Y=H,q="function"==typeof Float64Array;var C="function"==typeof Float64Array?Float64Array:null,z=function(r){return q&&r instanceof Float64Array||"[object Float64Array]"===Y(r)},B=C;var D=function(){var r,n;if("function"!=typeof B)return!1;try{n=new B([1,3.14,-3.14,NaN]),r=z(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var J="function"==typeof Float64Array?Float64Array:void 0,K=function(){throw new Error("not implemented")},Q=D()?J:K,R=H,X="function"==typeof Uint8Array;var Z="function"==typeof Uint8Array?Uint8Array:null,$=function(r){return X&&r instanceof Uint8Array||"[object Uint8Array]"===R(r)},rr=Z;var nr=function(){var r,n;if("function"!=typeof rr)return!1;try{n=new rr(n=[1,3.14,-3.14,256,257]),r=$(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var tr="function"==typeof Uint8Array?Uint8Array:void 0,er=function(){throw new Error("not implemented")},or=nr()?tr:er,ar=H,ur="function"==typeof Uint16Array;var ir="function"==typeof Uint16Array?Uint16Array:null,fr=function(r){return ur&&r instanceof Uint16Array||"[object Uint16Array]"===ar(r)},cr=ir;var vr=function(){var r,n;if("function"!=typeof cr)return!1;try{n=new cr(n=[1,3.14,-3.14,65536,65537]),r=fr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var lr,yr="function"==typeof Uint16Array?Uint16Array:void 0,pr=function(){throw new Error("not implemented")},br={uint16:vr()?yr:pr,uint8:or};(lr=new br.uint16(1))[0]=4660;var wr=52===new br.uint8(lr.buffer)[0],Ar=x,dr=!0===wr?1:0,sr=new Q(1),_r=new Ar(sr.buffer);var hr=function(r){return sr[0]=r,_r[dr]},mr=x,Ur=!0===wr?0:1,Nr=new Q(1),gr=new mr(Nr.buffer);var jr,Ir,Or=function(r){return Nr[0]=r,gr[Ur]};!0===wr?(jr=1,Ir=0):(jr=0,Ir=1);var Sr=x,Er={HIGH:jr,LOW:Ir},Fr=new Q(1),Hr=new Sr(Fr.buffer),Tr=Er.HIGH,Gr=Er.LOW;var Pr=function(r,n){return Hr[Tr]=r,Hr[Gr]=n,Fr[0]},Lr=Pr,Mr=Math.floor,Vr=Number.POSITIVE_INFINITY,Wr=Number.NEGATIVE_INFINITY;var kr=function(r){return r!=r},xr=Vr,Yr=Wr;var qr,Cr,zr=function(r){return r===xr||r===Yr};!0===wr?(qr=1,Cr=0):(qr=0,Cr=1);var Br=x,Dr={HIGH:qr,LOW:Cr},Jr=new Q(1),Kr=new Br(Jr.buffer),Qr=Dr.HIGH,Rr=Dr.LOW;var Xr=function(r,n){return Jr[0]=n,r[0]=Kr[Qr],r[1]=Kr[Rr],r};var Zr=function(r,n){return 1===arguments.length?Xr([0,0],r):Xr(r,n)},$r=Zr,rn=hr,nn=Lr,tn=[0,0];var en=zr,on=kr,an=function(r){return Math.abs(r)};var un=function(r,n){return on(n)||en(n)?(r[0]=n,r[1]=0,r):0!==n&&an(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var fn=hr;var cn=function(r){var n=fn(r);return(n=(2146435072&n)>>>20)-1023|0},vn=Vr,ln=Wr,yn=kr,pn=zr,bn=function(r,n){var t,e;return $r(tn,r),t=tn[0],t&=2147483647,e=rn(n),nn(t|=e&=2147483648,tn[1])},wn=function(r,n){return 1===arguments.length?un([0,0],r):un(r,n)},An=cn,dn=Zr,sn=Lr,_n=[0,0],hn=[0,0];var mn=function(r,n){var t,e;return 0===n||0===r||yn(r)||pn(r)?r:(wn(_n,r),n+=_n[1],(n+=An(r=_n[0]))<-1074?bn(0,r):n>1023?r<0?ln:vn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,dn(hn,r),t=hn[0],t&=2148532223,e*sn(t|=n+1023<<20,hn[1])))};var Un=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t};var Nn=Mr,gn=mn,jn=function(r){return Un(0,r)},In=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],On=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Sn=5.960464477539063e-8,En=jn(20),Fn=jn(20),Hn=jn(20),Tn=jn(20);function Gn(r,n,t,e,o,a,u,i,f){var c,v,l,y,p,b,w,A,d;for(y=a,d=e[t],A=t,p=0;A>0;p++)v=Sn*d|0,Tn[p]=d-16777216*v|0,d=e[A-1]+v,A-=1;if(d=gn(d,o),d-=8*Nn(.125*d),d-=w=0|d,l=0,o>0?(w+=p=Tn[t-1]>>24-o,Tn[t-1]-=p<<24-o,l=Tn[t-1]>>23-o):0===o?l=Tn[t-1]>>23:d>=.5&&(l=2),l>0){for(w+=1,c=0,p=0;p<t;p++)A=Tn[p],0===c?0!==A&&(c=1,Tn[p]=16777216-A):Tn[p]=16777215-A;if(o>0)switch(o){case 1:Tn[t-1]&=8388607;break;case 2:Tn[t-1]&=4194303}2===l&&(d=1-d,0!==c&&(d-=gn(1,o)))}if(0===d){for(A=0,p=t-1;p>=a;p--)A|=Tn[p];if(0===A){for(b=1;0===Tn[a-b];b++);for(p=t+1;p<=t+b;p++){for(f[i+p]=In[u+p],v=0,A=0;A<=i;A++)v+=r[A]*f[i+(p-A)];e[p]=v}return Gn(r,n,t+=b,e,o,a,u,i,f)}}if(0===d)for(t-=1,o-=24;0===Tn[t];)t-=1,o-=24;else(d=gn(d,-o))>=16777216?(v=Sn*d|0,Tn[t]=d-16777216*v|0,o+=24,Tn[t+=1]=v):Tn[t]=0|d;for(v=gn(1,o),p=t;p>=0;p--)e[p]=v*Tn[p],v*=Sn;for(p=t;p>=0;p--){for(v=0,b=0;b<=y&&b<=t-p;b++)v+=On[b]*e[p+b];Hn[t-p]=v}for(v=0,p=t;p>=0;p--)v+=Hn[p];for(n[0]=0===l?v:-v,v=Hn[0]-v,p=1;p<=t;p++)v+=Hn[p];return n[1]=0===l?v:-v,7&w}var Pn=function(r,n,t,e){var o,a,u,i,f,c,v;for(4,(a=(t-3)/24|0)<0&&(a=0),i=t-24*(a+1),c=a-(u=e-1),v=u+4,f=0;f<=v;f++)En[f]=c<0?0:In[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=u;c++)o+=r[c]*En[u+(f-c)];Fn[f]=o}return 4,Gn(r,n,4,Fn,i,4,a,u,En)},Ln=Math.round,Mn=hr;var Vn=hr,Wn=Or,kn=Lr,xn=Pn,Yn=function(r,n,t){var e,o,a,u,i;return a=r-1.5707963267341256*(e=Ln(.6366197723675814*r)),u=6077100506506192e-26*e,i=n>>20|0,t[0]=a-u,i-(Mn(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=a)-(a=o-(u=6077100506303966e-26*e))-u),t[0]=a-u,i-(Mn(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=a)-(a=o-(u=20222662487111665e-37*e))-u),t[0]=a-u)),t[1]=a-t[0]-u,e},qn=1.5707963267341256,Cn=6077100506506192e-26,zn=2*Cn,Bn=4*Cn,Dn=[0,0,0],Jn=[0,0];var Kn=function(r,n){var t,e,o,a,u,i,f;if((o=2147483647&Vn(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Yn(r,o,n):o<=1073928572?r>0?(f=r-qn,n[0]=f-Cn,n[1]=f-n[0]-Cn,1):(f=r+qn,n[0]=f+Cn,n[1]=f-n[0]+Cn,-1):r>0?(f=r-2*qn,n[0]=f-zn,n[1]=f-n[0]-zn,2):(f=r+2*qn,n[0]=f+zn,n[1]=f-n[0]+zn,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Yn(r,o,n):r>0?(f=r-3*qn,n[0]=f-1.8231301519518578e-10,n[1]=f-n[0]-1.8231301519518578e-10,3):(f=r+3*qn,n[0]=f+1.8231301519518578e-10,n[1]=f-n[0]+1.8231301519518578e-10,-3):1075388923===o?Yn(r,o,n):r>0?(f=r-4*qn,n[0]=f-Bn,n[1]=f-n[0]-Bn,4):(f=r+4*qn,n[0]=f+Bn,n[1]=f-n[0]+Bn,-4);if(o<1094263291)return Yn(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Wn(r),f=kn(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)Dn[u]=0|f,f=16777216*(f-Dn[u]);for(Dn[2]=f,a=3;0===Dn[a-1];)a-=1;return i=xn(Dn,Jn,e,a),r<0?(n[0]=-Jn[0],n[1]=-Jn[1],-i):(n[0]=Jn[0],n[1]=Jn[1],i)},Qn=-.16666666666666632;var Rn=hr,Xn=Kn,Zn=function(r,n,t){var e,o,a,u,i;return o=.00833333333332249+(i=n*n)*(27557313707070068e-22*i-.0001984126982985795)+i*(u=i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),a=i*n,r[0]=0===t?n+a*(Qn+i*o):n-(i*(.5*t-a*o)-t-a*Qn),o=i*(.0416666666666666+i*(2480158728947673e-20*i-.001388888888887411)),o+=u*u*(i*(2.087572321298175e-9+-11359647557788195e-27*i)-2.7557314351390663e-7),u=1-(e=.5*i),r[1]=u+(1-u-e+(i*o-n*t)),r},$n=[0,0];var rt=function(r,n){var t,e;if(t=Rn(n),(t&=2147483647)<=1072243195)return t<1044381696&&0==(0|n)&&(r[0]=n,r[1]=0),Zn(r,n,0);if(t>=2146435072)return r[0]=NaN,r[1]=NaN,r;switch(e=Xn(n,$n),Zn(r,$n[0],$n[1]),3&e){case 1:return t=r[1],r[1]=-r[0],r[0]=t,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return t=-r[1],r[1]=r[0],r[0]=t,r;default:return r}};var nt=d,tt=function(r,n){return 1===arguments.length?rt([0,0],r):rt(r,n)},et=Vr,ot=function(r){var n,t;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(n=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,t=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(n=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,t=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),n/t)},at=function(r){var n,t;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(n=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,t=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(n=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),t=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),n/t)},ut=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),t=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(n=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),t=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),n/t)},it=function(r){var n,t;return 0===r?-.015625:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,t=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(n=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,t=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),n/t)},ft=[0,0];var ct=function(r){var n,t,e,o,a;return r<0&&(r=-r),r===et?0:0===r?1:r<=4?(a=(r+2.404825557695773)*(r-2.40625- -.0014244423042272315))*ot(o=r*r):r<=8?(a=(r+5.520078110286311)*(r-1413/256-.0005468602863106496))*at(o=1-r*r/64):(n=ut(e=(o=8/r)*o),t=it(e),a=.5641895835477563/nt(r),tt(ft,r),a*(n*(ft[1]+ft[0])-o*t*(ft[0]-ft[1])))},vt=A,lt=ct;var yt=A.ndarray,pt=ct;var bt=function(r,n,t,e,o,a,u){return vt(r,n,t,e,o,lt,a,u)},wt=function(r,n,t,e,o,a,u,i,f){return yt(r,n,t,e,o,a,u,pt,i,f)};y(bt,"ndarray",wt);var At=bt;export{At as default,wt as ndarray};
//# sourceMappingURL=mod.js.map
