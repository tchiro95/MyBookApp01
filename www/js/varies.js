//touchstartに対応してたらtouchstart、してなければclick
var mytap = window.ontouchstart===null?"touchstart":"mousedown";
var mytapend = window.ontouchstart===null?"touchend":"mouseup";