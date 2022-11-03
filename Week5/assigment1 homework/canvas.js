var canvas = document.getElementById("canvas");

var shape = canvas.getContext("2d");

//shape Rectangle 

shape.fillStyle = "yellow"
shape.strokeStyle = "black"
shape.lineWidth = "5"

shape.fillRect(85, 302, 100, 100)
shape.strokeRect(85, 302, 100, 100)


//Line

shape.strokeStyle = "rgb(255,0,0)"
shape.lineWidth = "5"

shape.beginPath()
shape.moveTo(85, 682)
shape.lineTo(278, 549)
shape.stroke();



//Circle

shape.fillStyle = "#ffff00"
shape.strokeStyle = "red"
shape.lineWidth = "5"

shape.beginPath()             //clockwise or counter clockwise
shape.arc(385,441,66,0, 2*Math.PI, false)
shape.closePath()
shape.fill()
shape.stroke()


//Pentagon

shape.fillStyle = "#ff00ff"
shape.strokeStyle = "00ffff"
shape.lineWidth = "5"

shape.beginPath()
shape.moveTo(557, 308)
shape.lineTo(667, 284)
shape.lineTo(724, 380)
shape.lineTo(650, 464)
shape.lineTo(548, 420)
shape.closePath()
shape.fill()
shape.stroke()


//star

shape.fillStyle = "#ffff00"
shape.strokeStyle = "rgb(32,32,32)"
shape.lineWidth = "5"

shape.beginPath()
shape.moveTo(635, 496)
shape.lineTo(667, 554)
shape.lineTo(732, 567)
shape.lineTo(687, 615)
shape.lineTo(695, 680)
shape.lineTo(636, 652)
shape.lineTo(576, 680)
shape.lineTo(584, 615)
shape.lineTo(539, 567)
shape.lineTo(604, 554)
shape.closePath()
shape.fill()
shape.stroke()