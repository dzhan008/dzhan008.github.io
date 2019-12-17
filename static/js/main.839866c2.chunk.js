(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{14:function(e,t,a){},34:function(e,t,a){e.exports=a(52)},48:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),l=a.n(r),s=a(2),i=a(3),o=a(5),m=a(4),u=a(6),p=a(16),E=a(15),h=a(12),d=(a(14),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getRandomNumber",value:function(e,t){return Math.floor(e+Math.random()*(t-e))}},{key:"componentDidMount",value:function(){var e=['"If you cannot do great things, do small things in a great way." -Napoleon Hill','"Sometimes, its good to meep whenever you feel like meeping." - Meepers'][this.getRandomNumber(0,2)];l.a.render(e,document.getElementById("quote"))}},{key:"render",value:function(){return c.a.createElement("div",{class:"title-page block",id:"title-section"},c.a.createElement("p",{id:"name"},"David Zhang "),c.a.createElement("p",{id:"description"}," Software Engineer "),c.a.createElement("hr",{width:"50%"}),c.a.createElement("p",{id:"quote"}))}}]),t}(n.Component)),g=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"about block",id:"about-section"},c.a.createElement("div",{class:"section"},c.a.createElement("h1",{class:"header"}," Once Upon a Time... "),c.a.createElement("p",{id:"about"}," There was once a young programmer named David Zhang. He was first exposed to code back in 2011 when he first joined a robotics team during high school. From there, he enrolled into University of California, Riverside and discovered his passion for creating video games and software development. Enamored by what people can do by combining design, code, and perserverance, David worked on projects he loved alongside amazing companions in the teams he collaborated with. Throughout his college life he engaged himself in different projects through passion projects, hackathons, game jams, research, and an internship. Learn more about him here!"),c.a.createElement("p",{id:"about"},"David is currently based in Seattle Washington and works at Amazon as a software development engineer. If you are nearby, feel free to contact him and say hello! ")))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={projects:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"createTags",value:function(e){for(var t=c.a.createElement("span",null,"hi"),a=0;a<e.length;a++){t+=c.a.createElement("span",{class:"tag"},e[a])}return t}},{key:"addProject",value:function(e,t,a,n){return c.a.createElement("div",{class:"project-preview"},c.a.createElement("img",{src:"/images/resonance.png"}),c.a.createElement("div",{class:"text-box"},c.a.createElement("div",{class:"title"}," ",e," ",c.a.createElement("hr",{width:"40"})),c.a.createElement("div",{class:"description"},c.a.createElement("p",null," ",t," "),c.a.createElement("p",null,c.a.createElement("span",{class:"button"},"Demo")," ",c.a.createElement("span",{class:"button"},"Learn More")),this.createTags(n))))}},{key:"updateProjects",value:function(e){var t=document.getElementById("project-container");return l.a.render(e,t)}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{class:"projects block",id:"projects-section"},c.a.createElement("div",{class:"section"},c.a.createElement("h1",{class:"header"}," And he worked on these creations... "),c.a.createElement("div",{class:"project-container",id:"project-container"},c.a.createElement("div",{class:"project-preview"},c.a.createElement("img",{src:"/images/resonance.png"}),c.a.createElement("div",{class:"text-box"},c.a.createElement("div",{class:"title"},"Resonance ",c.a.createElement("hr",{width:"40"})),c.a.createElement("div",{class:"description"},c.a.createElement("p",null,"Isometric puzzle game- play a blind person exploring through a cave using echolocation to light his path."),c.a.createElement("p",{class:"buttons"},c.a.createElement("a",{href:"https://drive.google.com/file/d/0B2xUFYO4YAPKUk9nQmVNa0xnSEk/view",target:"_blank"},c.a.createElement("span",{class:"button"},"Demo")),c.a.createElement("a",{href:"https://github.com/JeffreyHsieh/Resonance",target:"_blank"},c.a.createElement("span",{class:"button"},"Github")),c.a.createElement("span",{class:"button"},"More")),c.a.createElement("span",{class:"tag"},"C#")," ",c.a.createElement("span",{class:"tag"},"Unity")))),c.a.createElement("div",{class:"project-preview"},c.a.createElement("img",{src:"/images/creation_and_conquest.png"}),c.a.createElement("div",{class:"text-box"},c.a.createElement("div",{class:"title"},"Creation and Conquest ",c.a.createElement("hr",{width:"40"})),c.a.createElement("div",{class:"description"},c.a.createElement("p",null,"Warioware like game!"),c.a.createElement("p",{class:"buttons"},c.a.createElement("span",{class:"button"},"Demo"),c.a.createElement("a",{href:"https://github.com/dzhan008/CNC",target:"_blank"},c.a.createElement("span",{class:"button"},"Github")),c.a.createElement("span",{class:"button"},"More")),c.a.createElement("span",{class:"tag"},"C#")," ",c.a.createElement("span",{class:"tag"},"Unity")))),c.a.createElement("div",{class:"project-preview"},c.a.createElement("img",{src:"/images/spirit_runner.png"}),c.a.createElement("div",{class:"text-box"},c.a.createElement("div",{class:"title"},"Spirit Runner",c.a.createElement("hr",{width:"40"})),c.a.createElement("div",{class:"description"},c.a.createElement("p",null,"Endless runner game where you play as a fox roaming through a beautiful forest."),c.a.createElement("p",{class:"buttons"},c.a.createElement("span",{class:"button"},"Demo"),c.a.createElement("a",{href:"https://github.com/dzhan008/spiritrunner",target:"_blank"},c.a.createElement("span",{class:"button"},"Github")),c.a.createElement("span",{class:"button"},"More")),c.a.createElement("span",{class:"tag"},"Blueprints")," ",c.a.createElement("span",{class:"tag"},"UE4")))),c.a.createElement("div",{class:"project-preview"},c.a.createElement("img",{src:"/images/quick_draw.png"}),c.a.createElement("div",{class:"text-box"},c.a.createElement("div",{class:"title"},"Quick Draw ",c.a.createElement("hr",{width:"40"})),c.a.createElement("div",{class:"description"},c.a.createElement("p",null,"Inspired by jackbox games, quick draw is a party game for up to 8 people where you can face opponents on a 1 on 1 battle to see who can draw the best and quick. All you need is your smart phone to play! Note: Please see the instructions in Github if you would like to demo the game!"),c.a.createElement("p",{class:"buttons"},c.a.createElement("a",{href:"https://quick-draw-game.herokuapp.com/",target:"_blank"},c.a.createElement("span",{class:"button"},"Demo")),c.a.createElement("a",{href:"https://github.com/dzhan008/QuickDraw",target:"_blank"},c.a.createElement("span",{class:"button"},"Github")),c.a.createElement("span",{class:"button"},"More")),c.a.createElement("span",{class:"tag"},"Python")," ",c.a.createElement("span",{class:"tag"},"Flask")))),c.a.createElement("div",{class:"project-preview"},c.a.createElement("img",{src:"/images/familiar.png"}),c.a.createElement("div",{class:"text-box"},c.a.createElement("div",{class:"title"},"Familiar ",c.a.createElement("hr",{width:"40"})),c.a.createElement("div",{class:"description"},c.a.createElement("p",null,"Another puzzle game!"),c.a.createElement("p",{class:"buttons"},c.a.createElement("a",{href:"https://dzhan008.itch.io/familiar"}," ",c.a.createElement("span",{class:"button"},"Demo")),c.a.createElement("a",{href:"https://github.com/dzhan008/QuickDraw",target:"_blank"},c.a.createElement("span",{class:"button"},"Github")),c.a.createElement("span",{class:"button"},"More")),c.a.createElement("span",{class:"tag"},"C#")," ",c.a.createElement("span",{class:"tag"},"Unity")))),c.a.createElement("div",{class:"project-preview"},c.a.createElement("img",{src:"/images/fire_fighter_vr.png"}),c.a.createElement("div",{class:"text-box"},c.a.createElement("div",{class:"title"},"Fire Fighter VR Simulation ",c.a.createElement("hr",{width:"40"})),c.a.createElement("div",{class:"description"},c.a.createElement("p",null,"Simulate a firefighter!"),c.a.createElement("p",{class:"buttons"},c.a.createElement("span",{class:"button"},"Report"),c.a.createElement("a",{href:"https://github.com/leomuteki/FireFighterProject",target:"_blank"},c.a.createElement("span",{class:"button"},"Github")),c.a.createElement("span",{class:"button"},"More")),c.a.createElement("span",{class:"tag"},"C#")," ",c.a.createElement("span",{class:"tag"},"Unity")," ",c.a.createElement("span",{class:"tag"},"Oculus Rift")))),c.a.createElement("div",{class:"project-preview"},c.a.createElement("img",{src:"/images/listen.png"}),c.a.createElement("div",{class:"text-box"},c.a.createElement("div",{class:"title"},"Listen ",c.a.createElement("hr",{width:"40"})),c.a.createElement("div",{class:"description"},c.a.createElement("p",null,"Auditory training application that helps improve people's hearing ability through an endless runner experience. Also used as a research assessment tool at University of California, Riverside"),c.a.createElement("p",{class:"buttons"},c.a.createElement("a",{href:"https://apps.apple.com/app/listen-auditory-training/id1031353626",target:"_blank"},c.a.createElement("span",{class:"button"},"More"))),c.a.createElement("span",{class:"tag"},"C#")," ",c.a.createElement("span",{class:"tag"},"Unity")," ",c.a.createElement("span",{class:"tag"},"Oculus Rift")))),c.a.createElement("div",{class:"project-preview"},c.a.createElement("img",{src:"/images/pen_me.png"}),c.a.createElement("div",{class:"text-box"},c.a.createElement("div",{class:"title"},"Pen Me ",c.a.createElement("hr",{width:"40"})),c.a.createElement("div",{class:"description"},c.a.createElement("p",null,"Simulate a firefighter!"),c.a.createElement("p",{class:"buttons"},c.a.createElement("span",{class:"button"},"Demo"),c.a.createElement("a",{href:"https://github.com/hdoan002/PenMe",target:"_blank"},c.a.createElement("span",{class:"button"},"Github")),c.a.createElement("span",{class:"button"},"More")),c.a.createElement("span",{class:"tag"},"C#")," ",c.a.createElement("span",{class:"tag"},"Unity")," ",c.a.createElement("span",{class:"tag"},"Oculus Rift")))))))}}]),t}(n.Component),v=(a(48),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null," Portfolio "),c.a.createElement("div",{class:"project-container"},c.a.createElement("div",{class:"project-preview"},c.a.createElement("img",{src:"/images/resonance.jpg"}),c.a.createElement("p",{class:"title"}," Resonance "),c.a.createElement("span",{class:"tag"},"C#")," ",c.a.createElement("span",{class:"tag"},"Unity"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{class:"buttons"},c.a.createElement("button",null,"Github")," ",c.a.createElement("button",null,"Demo")," ",c.a.createElement("button",null,"Learn More")),c.a.createElement("hr",{width:"30%"}),c.a.createElement("p",{class:"description"}," This is a random one liner about the project. ")),c.a.createElement("div",{class:"project-preview"},c.a.createElement("img",{src:"/images/familiar.png"}),c.a.createElement("p",{class:"title"}," Resonance "),c.a.createElement("img",{class:"icon",src:"/images/github.png"}),c.a.createElement("button",null,"Demo")," ",c.a.createElement("button",null,"Learn More"),c.a.createElement("p",null," This is a random one liner about the project. ")),c.a.createElement("div",{class:"project-preview"},c.a.createElement("img",{src:"/images/creation_and_conquest.jpg"}),c.a.createElement("p",{class:"title"}," Resonance "),c.a.createElement("img",{class:"icon",src:"/images/github.png"}),c.a.createElement("button",null,"Demo")," ",c.a.createElement("button",null,"Learn More"),c.a.createElement("p",null," This is a random one liner about the project. ")),c.a.createElement("div",{class:"project-preview"},c.a.createElement("img",{src:"/images/resonance.jpg"}),c.a.createElement("p",{class:"title"}," Resonance "),c.a.createElement("img",{class:"icon",src:"/images/github.png"}),c.a.createElement("button",null,"Demo")," ",c.a.createElement("button",null,"Learn More"),c.a.createElement("p",null," This is a random one liner about the project. ")),c.a.createElement("div",{class:"project-preview"},c.a.createElement("img",{src:"/images/resonance.jpg"}),c.a.createElement("p",{class:"title"}," Resonance "),c.a.createElement("img",{class:"icon",src:"/images/github.png"}),c.a.createElement("button",null,"Demo")," ",c.a.createElement("button",null,"Learn More"),c.a.createElement("p",null," This is a random one liner about the project. "))))}}]),t}(n.Component)),f=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"contact block",id:"contact-section"},c.a.createElement("div",{class:"section"},c.a.createElement("h1",{class:"header"}," But his story does not end here. "),c.a.createElement("div",{class:"contact-details"},c.a.createElement("p",{a:!0,ref:!0},c.a.createElement("img",{height:"75",width:"75",src:"/images/email.ico"})," davidzhang.zha@gmail.com"),c.a.createElement("a",{href:"https://www.linkedin.com/in/dzhan",target:"_blank"},c.a.createElement("p",null,c.a.createElement("img",{height:"75",width:"75",src:"/images/linkedin-white.ico"})," https://www.linkedin.com/in/dzhan ")),c.a.createElement("a",{href:"https://github.com/dzhan008",target:"_blank"},c.a.createElement("p",null,c.a.createElement("img",{height:"75",width:"75",src:"/images/github-white.ico"})," https://github.com/dzhan008 ")))))}}]),t}(n.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(d,null),c.a.createElement(g,null),c.a.createElement(b,null),c.a.createElement(f,null))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(E.a,null,c.a.createElement("nav",{class:"navbar"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(p.Link,{exact:!0,activeClass:"active",activeStyle:{color:"#2a2f33"},to:"title-section",spy:!0,smooth:!0,offset:-100,duration:500},"HOME")),c.a.createElement("li",null,c.a.createElement(p.Link,{exact:!0,activeClass:"active",activeStyle:{color:"#2a2f33"},to:"about-section",spy:!0,smooth:!0,offset:0,duration:500},"ABOUT")),c.a.createElement("li",null,c.a.createElement(p.Link,{exact:!0,activeClass:"active",activeStyle:{color:"#2a2f33"},to:"projects-section",spy:!0,smooth:!0,offset:0,duration:500},"PORTFOLIO")),c.a.createElement("li",null,c.a.createElement(p.Link,{exact:!0,activeClass:"active",activeStyle:{color:"#2a2f33"},to:"contact-section",spy:!0,smooth:!0,offset:0,duration:500},"CONTACT")),c.a.createElement("li",null,c.a.createElement(E.b,{exact:!0,activeStyle:{color:"#2a2f33"},to:"resume.pdf",target:"_blank"},"RESUME")),c.a.createElement("li",null,c.a.createElement(E.b,{exact:!0,activeStyle:{color:"#2a2f33"},to:"/portfolio"},"More Projects")),c.a.createElement("div",{class:"underbar"}))),c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/",component:j}),c.a.createElement(h.a,{path:"/portfolio",component:v})))}}]),t}(n.Component);a(51);l.a.render(c.a.createElement(y,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.839866c2.chunk.js.map