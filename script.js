function union(bool, i){
	if(bool){
			let str = "";
			for(let k = 0; k < n - i; k ++){
				str += "*";
			}
			for(let j = 0; j < i; j ++){
				str += " ";
			}
			return str;
	}
	else{
			let str1 = "";
			for(let k = 0; k < n - i - 1; k ++){
				str1 += " ";
			}
			for(let j = 0; j <= i; j ++){
				str1 += "*";
			}
			return str1;
	}
}

let n = +prompt("Enter number");
for(let i = 0; i < n; i ++){
 		document.writeln(union(true, i) + union(false, n - 1 - i));
}
for(let i = n - 1; i >= 0; i --){ 
		document.writeln(union(true, i) + union(false, n - 1 -i));
}