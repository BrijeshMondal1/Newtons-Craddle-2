function hasCollided(object2,object1){
	if(object1.x - object2.x < object1.width/2 + object2.width/2){
	object2.velocityX = 0;
	return true;
	}else{
	 return false;
	}
}