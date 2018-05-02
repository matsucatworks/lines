(() => {
    var dom = document.querySelector('canvas'),
    width = dom.getAttribute('width'),
    height = dom.getAttribute('height'),
    mp = Math.PI,
    x = 0,
    speed = 20,
    target = 400;

    if(!dom || !dom.getContext('2d')){return;}
    var ctx = dom.getContext('2d');

    (function(w,r){
        w['r'+r] = w['r'+r] ||
        w['webkitR'+r] ||
        w['mozR'+r] ||
        w['oR'+r] ||
        w['msR'+r] ||
        function(callback){w.setTimeout(callback,1000/60);};
    })(window,'equestAnimationFrame');

    var Line = function(c,sp,d){
        this.color = c,
        this.speed = sp,
        this.dir = d,
        this.slope = 80;
        this.width = 2.0;
        this.x = -(this.slope);
    };

    Line.prototype = {
        draw:function(){
            ctx.beginPath();
            ctx.moveTo(this.x,0);
            ctx.lineTo(this.x + this.slope,height);
            ctx.closePath();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.width;
            ctx.stroke();
        },
        multi:function(){
            this.x = this.dir ? this.x + this.speed: this.x - this.speed;
            this.draw();
            if(this.x > width || 0 > this.x + this.slope) this.x = this.dir ? -(this.slope) : width;
        }
    };


    var density = 10,
        lines = [],
        colors = ['red','blue','black'];

    for(var i = 0;i < density;i++){
        lines[i] = new Line(colors[(Math.random()*3|0)],(Math.random() * (6 - 1) + 1 |0),1 === (Math.random() * 2 |0));
        lines[i].x = width * Math.random();
    }

    var loopStart = function(){
        var i = 0;
        ctx.clearRect(0,0,width,height);

        while(i < lines.length){
            lines[i].multi();
            i = (i+1)|0;
        }
        window.requestAnimationFrame(loopStart);
    };

    loopStart();


})();
