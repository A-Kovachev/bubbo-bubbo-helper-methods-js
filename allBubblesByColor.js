//chosen color is blue
let bubbleCountByColor = 0;
window.bubbleGame.lines.forEach(getBubbleSumByColor);
function getBubbleSumByColor(item){
	if(item.isEven){
		for(let i = 0; i < item.bubbleCount; i++){
			if(item.bubbles[i].type == "blue")
			{
				bubbleCountByColor++;
			};
		};			
	}
	else{
		for(let i = 1; i < item.bubbleCount; i++){
			if(item.bubbles[i].type == "blue")
			{
				bubbleCountByColor++;
			};
		};
		
	};
};