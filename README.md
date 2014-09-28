#meteor-bottomline

##Install
```bash
meteor add ecwyne:bottomline
```

##Methods
```javascript
if (Meteor.isServer){
	Bottomline.ncaaf(callback);
	Bottomline.nfl(callback);
	Bottomline.nhl(callback);
	Bottomline.mlb(callback);
}
```

##Callbacks
All methods take a callback function as their only parameter. An array of Game objects will be returned.