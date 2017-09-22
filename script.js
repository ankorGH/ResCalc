let app = new Vue({
	el:"#dev",
	data:{
		bandInUse:true,
		offBand3:false,
		firstBand:5,
		secondBand:6,
		thirdBand:3,
		multiplier:10000,
		tolerance:"+0.5% (D)",
		colors:[
			{col:"Black"  ,styl:"background-color:black;color:white;", value:0, tolerance:"0", multiplier:1},
			{col:"Brown"  ,styl:"background-color:brown;color:white;", value:1, tolerance:"+1% (F)", multiplier:10},
			{col:"Red" 	  ,styl:"background-color:red;color:white;", value:2, tolerance:"+2% (G)", multiplier:100},
			{col:"Orange" ,styl:"background-color:orange;color:white;", value:3, tolerance:"0", multiplier:1000},
			{col:"Yellow" ,styl:"background-color:yellow;color:white;", value:4, tolerance:" ", multiplier:10000},
			{col:"Green"  ,styl:"background-color:green;color:white;", value:5, tolerance:"+0.5% (D)", multiplier:100000},
			{col:"Blue"   ,styl:"background-color:blue;color:white;", value:6, tolerance:"+0.25% (C)", multiplier:1000000},
			{col:"Violet" ,styl:"background-color:violet;color:white;", value:7, tolerance:"+0.10% (B)", multiplier:10000000},
			{col:"Grey"   ,styl:"background-color:grey;color:white;", value:8, multiplier:0, tolerance:"+0.05%"}, 
			{col:"White"  ,styl:"background-color:white;color:black;", value:9, multiplier:0, tolerance:"0"},
			{col:"Gold"   ,styl:"background-color:gold;color:white;", value:"", multiplier:0, tolerance:"+0.5% (J)"}, 
			{col:"Silver"  ,styl:"background-color:silver;color:white;", value:"", multiplier:0, tolerance:"+0.10% (K)"}
		]

	},
	methods:{
		selectColor(e){
			if(e.target.name === "firstBand"){
				this.firstBand = e.target.value;	
			}else if(e.target.name === "secondBand"){
				this.secondBand = e.target.value;
			}else if(e.target.name === "thirdBand"){
				this.thirdBand = e.target.value;
			}else if(e.target.name === "multiplier"){
				this.multiplier = e.target.value;
			}else if(e.target.name === "tolerance"){
				this.tolerance = e.target.value;
			}
			// console.log(this.firstBand)
		},
		changeBand(){
			this.bandInUse = !this.bandInUse;
			this.offBand3 = !this.offBand3;
		}
	},
	computed:{
		calcResistance(){
			if(this.offBand3){
				return +(this.firstBand+this.secondBand+this.thirdBand)*(+this.multiplier) + " Ohms "+" Tolerance: "+this.tolerance;	
			}else{
				return +(this.firstBand+this.secondBand)*(+this.multiplier) + " Ohms "+" Tolerance: "+this.tolerance;
			}
			
		}
	}
});