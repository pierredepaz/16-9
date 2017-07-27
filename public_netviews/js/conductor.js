const SOCKET_SERVER_URL = "localhost:4783";

const socket = io(SOCKET_SERVER_URL);

socket.on('connect', function(){
	console.log('socket connection established to', SOCKET_SERVER_URL);
});

function startAll(){
	socket.emit('conductor-start');
}

function updateBgScaleX(val){
	socket.emit('bg-scale-x', val);
}

function updateBgScaleY(val){
	socket.emit('bg-scale-y', val);
}

function updateBgOscillCoeff(val){
	socket.emit('bg-oscill-coeff', val);
}

var bg_flip_toggle = false;

function toggleBgFlip(){
	bg_flip_toggle = !bg_flip_toggle;

	socket.emit('bg-flip-toggle', bg_flip_toggle);
}

function toggleWireframe(actor){
	socket.emit('wireframe-toggle', actor);
}

function setClearcolor(value){
	socket.emit('clear-color', value);
}

function introduce(actor){
	socket.emit('introduce', actor);
}
