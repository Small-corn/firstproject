"use strict";for(var uls=document.getElementsByTagName("ul")[1],lis=uls.getElementsByTagName("li"),aside=document.getElementsByTagName("aside"),ems=span.getElementsByTagName("em"),i=0;i<lis.length;i++)lis[i].onclick=function(){for(var e=0;e<lis.length;e++)lis[e].className="",aside[e].className="",ems[e].className="";this.className="active";var s=this.getAttribute("liy");aside[s].className="productactive",ems[s].className="productactive"};