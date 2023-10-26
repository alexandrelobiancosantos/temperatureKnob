$("#slider").roundSlider({
	min: 0,
	max: 100,
	step: 1,
	value: null,
	radius: 85,
	width: 16,
	handleSize: "+0",
	startAngle: 0,
	endAngle: "+360",
	animation: true,
	showTooltip: true,
	editableTooltip: true,
	readOnly: false,
	disabled: false,
	keyboardAction: true,
	mouseScrollAction: false,
	sliderType: "default",
	circleShape: "full",
	handleShape: "round",
	lineCap: "butt",

	// the 'startValue' property decides at which point the slider should start.
	// otherwise, by default the slider starts with min value. this is mainly used
	// for min-range slider, where you can customize the min-range start position.
	startValue: null,

	// SVG related properties
	svgMode: false,
	borderWidth: 1,
	borderColor: null,
	pathColor: null,
	rangeColor: null,
	tooltipColor: null,

	// events
	beforeCreate: null,
	create: null,
	start: null,
	// 'beforeValueChange' will be triggered before 'valueChange', and it can be cancellable
	beforeValueChange: null,
	drag: null,
	change: null,
	// 'update' event is the combination of 'drag' and 'change'
	update: null,
	// 'valueChange' event is similar to 'update' event, in addition it will trigger
	// even the value was changed through programmatically also.
	valueChange: null,
	stop: null,
	tooltipFormat: null
});