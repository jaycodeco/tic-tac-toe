			var EnGs1 = document.getElementById("stateBoard1");
			var EnGs2 = document.getElementById("stateBoard2");
			var Namerw= document.getElementById("winnName");
			var clpt1 = document.getElementById("plpt1");
			var clpt2 = document.getElementById("plpt2");
			var clpt3 = document.getElementById("plpt3");
			var clpt4 = document.getElementById("plpt4");
			var clpt5 = document.getElementById("plpt5");
			var clpt6 = document.getElementById("plpt6");
			var clpt7 = document.getElementById("plpt7");
			var clpt8 = document.getElementById("plpt8");
			var clpt9 = document.getElementById("plpt9");
			var lbls = [[clpt1,clpt2,clpt3],[clpt4,clpt5,clpt6],[clpt7,clpt8,clpt9]];
			var bool = 1;
			var comps = "";
			var winn = 0;
			var counter = 0;
			var boardCheck=[
				["","",""],
				["","",""],
				["","",""]
			];
			const locus = [
				[0,0],[0,1],[0,2],
				[1,0],[1,2],[1,2],
				[2,0],[2,1],[2,2]
				];
			function winnCheck(){
				/**1X1**/
				for(i=0;i<3;i++){
					comps += boardCheck[0][i];
					if((comps == "XXX")||(comps == "OOO")){
						winn = 1;
					}
				}
				comps="";
				/**1X2**/
				for(i=0;i<3;i++){
					comps += boardCheck[1][i];
					if((comps == "XXX")||(comps == "OOO")){
						winn = 1;
					}
				}
				comps="";
				/**1X3**/
				for(i=0;i<3;i++){
					comps += boardCheck[2][i];
					if((comps == "XXX")||(comps == "OOO")){
						winn = 1;
					}
				}
				comps="";
				/**2X1**/
				for(i=0;i<3;i++){
					comps += boardCheck[i][0];
					if((comps == "XXX")||(comps == "OOO")){
						winn = 1;
					}
				}
				comps="";
				/**2X2**/
				for(i=0;i<3;i++){
					comps += boardCheck[i][1];
					if((comps == "XXX")||(comps == "OOO")){
						winn = 1;
					}
				}
				comps="";
				/**2X3**/
				for(i=0;i<3;i++){
					comps += boardCheck[i][2];
					if((comps == "XXX")||(comps == "OOO")){
						winn = 1;
					}
				}
				comps="";
				/**3X1**/
				for(i=0;i<3;i++){
					comps += boardCheck[i][i];
					if((comps == "XXX")||(comps == "OOO")){
						winn = 1;
					}
				}
				comps="";
				/**3X2**/
				for(i=0;i<3;i++){
					comps += boardCheck[2-i][i];
					if((comps == "XXX")||(comps == "OOO")){
						winn = 1;
					}
				}
				comps="";
			}
			
			function posCheck(){
				var k = Math.floor(Math.random()*3);
				if((boardCheck[locus[k][0]][locus[k][1]]=="X")||(boardCheck[locus[k][0]][locus[k][1]]=="O")){
					console.log("fuck holla");
					return posCheck();
				}else{
					console.log("fuck ok");
					return k;
				}
			}
			
			function Next(){
				var n = posCheck();
				var n1 = locus[n][0];
				var n2 = locus[n][1];
				desisde(lbls[n1][n2],n1,n2);
				bool = !bool;
			}
			
			function desisde(x,C,N){
				if(bool==1){
					boardCheck[N][C] = "X";	
					x.innerHTML = "X";
					bool = !bool;
					Next();
				}else{
					boardCheck[N][C] = "O";
					x.innerHTML = "O";
				}
				counter++;
				winnCheck();
				console.log(boardCheck);
				if(winn==1){
					if(bool==1){
						Namerw.innerHTML="player_x";
					}else{
						Namerw.innerHTML="player_o";
					}
					EnGs1.style.display = "block";
				}
				if((counter==9)&&(winn==0)){
					EnGs2.style.display = "block";
				}
				bool = !bool;
				
			}
			
			