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
	next.onclick=function(){
		move();
	}
	prev.onclick=function(){
		n-=2;
		move();
	}
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
			inner.style.marginLeft=-1226*n+"px";
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
			inner.style.marginLeft=-1226*n+"px";
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
		let circle=parent.querySelectorAll(".circle1");
		let list=parent.querySelectorAll(".neirong_list1");
		const next=parent.querySelector(".neirong_rbtn");
		const prev=parent.querySelector(".neirong_lbtn");
		circle.forEach(function(ele,index){
			ele.onclick=function(){
				for(let i=0;i<circle.length;i++){
					circle[i].classList.remove("circle");
					list[i].classList.remove("active");
				}
				this.classList.add("circle");
				list[index].classList.add("active");
				n=index;
			}
			
		});
		function move(){
			for (let i = 0; i <circle.length; i++) {
				circle[i].classList.remove("circle");
				list[i].classList.remove("active");
			}
			circle[n].classList.add("circle");
			list[n].classList.add("active");
		}
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
			move();
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
			move();
		}
	}
	const contentlist=document.querySelectorAll(".neirong_item");
	tupian(contentlist[0]);
	contentlist.forEach(function(ele){
		tupian(ele);
	});
}