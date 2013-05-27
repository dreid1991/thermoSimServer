elementAttrs = {
	handle: 
		{type: String},
	pos:
		{type: Point},
	dims:
		{type: Vector},
	bounds:
		{type: Object},
	compMode:
		{type: String},
	wallHandle:
		{type: String},
	dotInfo:
		{type: Object}  //Need to figure out composites
}

elementMD = {
//Objects ones must correspond to their function name in the simulation.

//I am changing wallInfo to wallHandle
//instead of pressure or mass, allow only pressure input, because who wants mass anyway?
	wall: {
	//type, label, something about how data is input
		labelText: 'Wall',
		type: 'Wall',
		id: DataManager.prototype.getWallId,
		attrs: {
			isBox:
				{type: Boolean},
			pts:
				{type: Array},
			pos:
				elementAttrs.pos,
			dims:	
				elementAttrs.dims,
			handle:
				elementAttrs.handle,
			handler:
				{type: String},
			vol: 
				{type: Number},
			bounds:
				{type: Object},
			show:
				{type: Boolean},
			temp:
				{type: Number}
			//add some border stuff
		}
		
	},
	readoutEntry: {
		labelText: 'Readout entry',
		type: 'ReadoutEntry',
		id: DataManager.prototype.readoutEntryId,
		attrs: {
			wallHandle: 
				elementAttrs.wallHandle,
			data:
				{type: String},
			readoutHandle:
				{type: String}
		}
			
		//{wallHandle: 'left', data:'TempSmooth', readout:'mainReadout'}
	},
	dots: {
		labelText: 'Molecules',
		type: 'Dots',
		id: DataManager.prototype.getDotsId,
		attrs: {
			pos:
				elementAttrs.pos,
			dims:
				elementAttrs.dims,
			spc: 
				{type: String},
			count:
				{type: Number},
			temp: 
				{type: Number},
			returnTo:
				{type: String},
			tag:
				{type: String}
		}
	},
	//wallHandle: 'left', dataList: 't', is:'equalTo', targetVal:250, alertUnsatisfied:"Bring the containers to 250 K", priorityUnsatisfied:1, checkOn:'conditions'
	listener: {
		labelText: 'Listener',
		type: 'StateListener',
		id: DataManager.prototype.getListenerId,
		attrs: {
			wallHandle:
				elementAttrs.wallHandle,
			dataList:
				{type: String},
			is:
				{type: String},
			targetVal:
				{type: Number},
			alertSatisfied:
				{type: String},
			alertUnsatisfied:
				{type: String},
			priorityUnsatisfied:
				{type: Number},
			checkOn:
				{type: String}
		}
	},
	weights: {
		labelText: 'Weights',
		type: 'DragWeights',
		id: DataManager.prototype.getObjId,
		attrs: {
			handle:
				elementAttrs.handle,
			weightDefs:
				{type: Array},
			weightScalar:
				{type: Number},
			displayText:
				{type: Boolean},
			massInit:
				{type: Number},
			wallHandle:
				elementAttrs.wallHandle,
			compMode:
				elementAttrs.compMode,
			pistonOffset:
				{type: Vector}
		}
		//{weightDefs:[{count:1, pressure:2}], weightScalar:70, displayText:false, massInit:0, compMode:'cPAdiabaticDamped', pistonOffset:V(130,-41)}
	},
	compArrow: {
		labelText: 'Compression Arrow',
		type: 'CompArrow',
		id: DataManager.prototype.getObjId,
		attrs: {
			handle:
				elementAttrs.handle,
			compMode:
				elementAttrs.compMode,
			bounds:
				elementAttrs.bounds
			
		}
		//{handle:'compyT', compMode:'adiabatic', bounds:{y:{min:30, max:235}}}
	},
	piston: {
	//{type: 'Piston', attrs: {handle: 'RightPiston', wallInfo: 'right', min:2, init:2, max:2, makeSlider:false}
		labelText: 'Piston',
		type: 'Piston',
		id: DataManager.prototype.getObjId,
		attrs: {
			handle:
				elementAttrs.handle,
			compMode:
				elementAttrs.compMode,
			wallHandle:
				elementAttrs.wallHandle,
			min:
				{type: Number},
			init: 
				{type: Number},
			max:
				{type: Number},
			makePiston:
				{type: Boolean}
		}
	},
	heater: {
		labelText: 'Heater',
		type: 'Heater',
		id: DataManager.prototype.getObjId,
		attrs: {
			handle: 
				elementAttrs.handle,
			wallHandle:
				elementAttrs.wallHandle,
			dims:
				elementAttrs.dims, //Need to make an optional/required thing
			max:
				{type: Number}
			
		}
	},
	stops: {
		labelText: 'Stops',
		type: 'Stops',
		id: DataManager.prototype.getObjId,
		attrs: {
			handle:
				elementAttrs.handle,
			wallHandle:
				elementAttrs.wallHandle
		}
	},
	sandbox: {
		labelText: 'Sandbox',
		type: 'Sandbox',
		id: DataManager.prototype.getObjId,
		attrs: {
			handle: 
				elementAttrs.handle,
			min:
				{type: Number},
			init: 
				{type: Number},
			max:
				{type: Number}
		}
	},
	tempChanger: {
		labelText: 'Temp changer',
		type: 'TempChanger',
		id: DataManager.prototype.getObjId,
		attrs: {
			min:
				{type: Number},
			max:
				{type: Number},
			sliderPos:
				{type: String},
			info:
				elementAttrs.dotInfo
				
		}
	
	},
	RMSChanger: {
		labelText: 'RMS changer',
		type: 'RMSChanger',
		id: DataManager.prototype.getObjId,
		attrs: {
			min:
				{type: Number},
			max:
				{type: Number},
			sliderPos:
				{type: String},
			info:
				elementAttrs.dotInfo
				
		}
	},
	arrowStatic: {
		labelText: 'Arrow static',
		type: 'ArrowStatic',
		id: DataManager.prototype.getObjId,
		attrs: {
			
		}
	
	}


}
