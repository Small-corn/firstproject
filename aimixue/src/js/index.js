
// 点击切换效果
function qiehuan(product){
    this.product=product;
    this.h4=product.getElementsByTagName("h4");
    this.j=0;
}
// 初始化
qiehuan.prototype.init=function(){  
    this.bind();
}
// 绑定
qiehuan.prototype.bind=function(){  
    var me=this;
    for(var i=0;i<this.h4.length;i++){
        this.h4[i].onclick=function(){
            me.change(this);
        }

   }
}
// 改变classname
qiehuan.prototype.change=function(dy){  
    for(var i=0;i<this.h4.length;i++){
        this.h4[i].className="";
    }
    this.j=dy.getAttribute("dy");
    this.h4[this.j].className="active";
}

// product使用
var product=document.getElementsByClassName("product-con")[0];
var qihuan1=new qiehuan(product);
qihuan1.init();

// team使用
var team=document.getElementsByClassName("team-con")[0];
var qihuan1=new qiehuan(team);
qihuan1.init();


// // news使用
// var news=document.getElementsByClassName("news-con")[0];
// var qihuan1=new qiehuan(news);
// qihuan1.init();