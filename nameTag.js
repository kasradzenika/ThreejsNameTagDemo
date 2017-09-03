var textAltitude = 70,
textSize = 50,
textColor = 0xffffff,
redrawInt = 1,
fontFam = 'Arial',
textPrefix = 'Name: ';

function addNameTag( parent ){
	let textSprite = new THREE.TextSprite({
							textSize: textSize,
							redrawInterval: redrawInt,
							material: {
								color: textColor
							},
							texture: {
								text: textPrefix.concat(parent.name),
								fontFamily: fontFam
							},
						});

	parent.add(textSprite);
	textSprite.position.setY(textAltitude);
	textSprite.name = parent.name + " NameText";
}