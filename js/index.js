//banner图效果
{
	let imgs=document.querySelectorAll(".banner_img li");
	let pagers=document.querySelectorAll(".banner_dian .banner_dian1");
	let banner=document.querySelector("#banner");
	const next=document.querySelector(".next");
	const prev=document.querySelector(".prev");
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for (let i = 0; i <imgs.length; i++) {
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("banner_dian2");
			}
			this.classList.add("banner_dian2");
			imgs[index].classList.add("active");
			n=index;
		}
	})
	let n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		if (n===imgs.length) {
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for (let i = 0; i <imgs.length; i++) {
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("banner_dian2");
			}
			pagers[n].classList.add("banner_dian2");
			imgs[n].classList.add("active");
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	let flag=true;
	next.onclick=function(){
		if (flag) {
			flag=false;
			move();
		}
	}
	prev.onclick=function(){
		if (flag) {
			flag=false;
			n-=2;
			move();
		}
	}
	imgs.forEach(function(ele,index){
		ele.addEventListener("transitionend", function(){
			flag=true;
		});
	})
}
//闪购部分效果
{
	function danpin(parent){
		const prev=parent.querySelector(".buy_prev");
		const next=parent.querySelector(".buy_next");
		const inner=parent.querySelector(".danpin_inner");
		let n=0;
		next.onclick=function(){
			n++;
			prev.classList.remove("disable");
			if (n===2) {
				this.classList.add("disable");
			}
			if (n===3) {
				n=2;
				return;
			}
			inner.style.marginLeft=-1240*n+"px";
		}
		prev.onclick=function(){
			n--;
			next.classList.remove("disable");
			if(n===0){
				this.classList.add("disable");
			}
			if (n===-1) {
				n=0;
				return;
			}
			inner.style.marginLeft=-1240*n+"px";
		}
	}
	const contentlist=document.querySelectorAll(".danpin");
	contentlist.forEach(function(ele){
		danpin(ele);
	});
}
//内容区域
{
	function dapei(parent){
		const types=parent.querySelectorAll(".type");
		const goods=parent.querySelectorAll(".dapei_list");
		types.forEach(function(ele,index){
			ele.onmouseover=function(){
				for(let i=0;i<types.length;i++){
					types[i].classList.remove("dapei_wenzi1");
					goods[i].classList.remove("active");
				}
				this.classList.add("dapei_wenzi1");
				goods[index].classList.add("active");
			}
		});
	}
	const contentlist=document.querySelectorAll(".dapei");
	contentlist.forEach(function(ele){
		dapei(ele);
	});
}
//内容、图片效果
{
	function tupian(parent){
		let next=parent.querySelector(".neirong_rbtn");
		let prev=parent.querySelector(".neirong_lbtn");
		let inner=parent.querySelector(".neirong_inner");
		let items=parent.querySelectorAll(".neirong_list1");
		let circle=parent.querySelectorAll(".circle1");
		let n=0;
		let obj=circle[0];
		const l=circle.length;
		next.onclick=function( ){
			n++;
			if(n===l){
				n=l-1;
				return;
			}
			inner.style.marginLeft=-n*296+"px";
			circle[n-1].classList.remove("circle");
			circle[n].classList.add("circle");
			obj=circle[n];
		}
		prev.onclick=function( ){
			n--;
			if(n===-1){
				n=0;
				return;
			}
			inner.style.marginLeft=-n*300+"px";
			circle[n+1].classList.remove("circle");
			circle[n].classList.add("circle");
			obj=circle[n];
		}	
		circle.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("circle");
				ele.classList.add("circle");
				obj=ele;
				inner.style.marginLeft=-index*296+"px";
				n=index;
			}	
		})
	}
	const contentlist=document.querySelectorAll(".neirong_item");
	contentlist.forEach(function(ele){
		tupian(ele);
	});
}
//banner侧边框
{
	let labels=document.querySelectorAll(".banner_nav .banner_label");
	let menus=document.querySelectorAll(".banner_menu");
	let obj=menus[0]
	labels.forEach(function(ele,index){
		ele.onmouseover=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})
}
//导航
{
	// let box=document.querySelector(".nav")
	// let top=document.querySelector(".nav_wenzi")
	// let bottom=document.querySelector(".nav_bottom")
	// top.onmouseover=function(){
	// 	bottom.style.height="229px";
	// 	bottom.style.display="block";
	// }
	// box.onmouseleave=function(){
	// 	bottom.style.height="0";
	// 	bottom.style.display="none";
	// }

	let labels=document.querySelectorAll(".nav_wenzi span.active");
	let menus=document.querySelectorAll(".nav_bottom");
	let obj=menus[0]
	labels.forEach(function(ele,index){
		ele.onmouseover=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			menus[index].style.height="229px";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
			menus[index].style.height=0;
		}
	})
}
//购物车
{
	let buy=document.querySelector(".head_buy");
	let menu=document.querySelector(".buy_menu");
	let top=document.querySelector(".buy_top");
	top.onmouseover=function(){
        	// menu.style.transition="all 1s ease-in";
            menu.style.height="80px";
            menu.style.opacity="1";
	}
	buy.onmouseleave=function(){
        // menu.style.transition="all 1s ease-in";
		menu.style.height="0";
		menu.style.opacity="0";
	}
}