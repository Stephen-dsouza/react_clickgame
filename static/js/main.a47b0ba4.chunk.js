(this.webpackJsonpclickgame=this.webpackJsonpclickgame||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"./images/BirdPerson.png","name":"Bird"},{"id":2,"image":"./images/Chris.png","name":"Chris"},{"id":3,"image":"./images/DoofusRick.png","name":"DoofusRick"},{"id":4,"image":"./images/Gazorpazorpfield.png","name":"Gazorpazorpfield"},{"id":5,"image":"./images/Jerry.png","name":"Jerry"},{"id":6,"image":"./images/linkler.png","name":"linkler"},{"id":7,"image":"./images/Morty.png","name":"Morty"},{"id":8,"image":"./images/MrMeeseeks.png","name":"MrMeeseeks"},{"id":9,"image":"./images/PencilVester.png","name":"PencilVester"},{"id":10,"image":"./images/Rick.png","name":"Rick"},{"id":11,"image":"./images/Snuffles.png","name":"Snuffles"},{"id":12,"image":"./images/Summer.png","name":"Summer"}]')},,,function(e,a,n){e.exports=n(19)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),c=n.n(i),s=(n(14),n(3)),o=n(4),l=n(7),m=n(5),u=n(8),g=(n(15),function(e){return r.a.createElement("div",{className:"navbar navbar-dark bg-dark box-shadow"},r.a.createElement("h1",null,"click game"),r.a.createElement("span",{className:"message"},r.a.createElement("h2",null,e.message)),"Your Score:",e.score,"|Top Score:",e.topScore)}),d=(n(16),function(e){return r.a.createElement("div",null,r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Clicky Game!"),r.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!")))}),p=(n(17),function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{onClick:function(){return e.handleClick(e.id)},className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image})),r.a.createElement("div",{className:"content"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Name:")," ",e.name))))}),h=n(6);n(18);var f=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)},k=function(e){function a(){var e,n;Object(s.a)(this,a);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={score:0,topScore:0,guessClick:[],message:"Click to start"},n.handleCorrectGuess=function(e){var a=n.state,t=a.topScore,r=a.score+1,i=Math.max(r,t);n.setState({score:r,topScore:i})},n.handleIncorrectGuess=function(e){n.setState({score:0,guessClick:[],message:"You lost,Try Again"})},n.clickcard=function(e){var a=n.state.guessClick;a.find((function(a){return a===e}))?n.handleIncorrectGuess():(a.push(e),n.setState({guessClick:a,message:"Good Guess"}),n.handleCorrectGuess()),console.log(n.state)},n}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(g,{score:this.state.score,topScore:this.state.topScore,message:this.state.message}),r.a.createElement(d,null),r.a.createElement(f,null,h.sort((function(){return.5-Math.random()})).map((function(a){return r.a.createElement(p,{id:a.id,key:a.id,name:a.name,image:a.image,handleClick:e.clickcard})}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.a47b0ba4.chunk.js.map