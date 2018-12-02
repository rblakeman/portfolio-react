(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{179:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(26),o=a.n(i),l=(a(82),a(6)),c=a(7),s=a(9),A=a(8),m=a(10),p=a(183),d=a(182),u=a(181),P=a(34),f=a.n(P),g=a(17),h=a.n(g),y={appBar:{display:"flex",flexDirection:"row",backgroundColor:"#343a40",justifyContent:"space-between"},left:{display:"flex",flexDirection:"row"},linkText:{color:"#ddd",textDecoration:"none"},nameText:{color:"#fff",textDecoration:"none",fontSize:"larger"}},E=function(e){return r.a.createElement(f.a,{style:y.appBar},r.a.createElement("div",{style:y.left},r.a.createElement(u.a,{style:{textDecoration:"none"},to:"/"},r.a.createElement(h.a,{style:y.nameText},"Ryan Blakeman")),r.a.createElement(u.a,{style:y.linkText,to:"/"},r.a.createElement(h.a,{style:y.linkText},"Home")),r.a.createElement(u.a,{style:y.linkText,to:"/software/"},r.a.createElement(h.a,{style:y.linkText},"Software")),r.a.createElement(u.a,{style:y.linkText,to:"/games/"},r.a.createElement(h.a,{style:y.linkText},"Games")),r.a.createElement(u.a,{style:y.linkText,to:"/research/"},r.a.createElement(h.a,{style:y.linkText},"Research"))),r.a.createElement(u.a,{style:y.linkText,to:"/resume/"},r.a.createElement(h.a,{style:y.linkText},"Resume")))},b={appBar:{display:"flex",flexDirection:"row",padding:15,marginTop:45,backgroundColor:"#0275d8",justifyContent:"center"},linkText:{textDecoration:"none",color:"white"}},x=function(e){return r.a.createElement(f.a,{style:b.appBar,position:"relative"},r.a.createElement("a",{style:b.linkText,href:"https://github.com/rblakeman/portfolio-react"},"Click here to view Repository"))},v=a(62),S={footer:{display:"flex",flexDirection:"row",alignItems:"left",margin:32,marginTop:0,padding:16,paddingTop:0}},C=function(e){return r.a.createElement("div",{style:S.footer},r.a.createElement("p",null,r.a.createElement(v.CircleArrow,null)),r.a.createElement("p",{style:{margin:0}},"\xa9 2018 Ryan Blakeman \xb7",r.a.createElement("a",{href:"mailto:rblakeman31@gmail.com"},"Email")," \xb7",r.a.createElement("a",{href:"https://www.linkedin.com/in/rblakeman/"},"LinkedIn"),r.a.createElement("br",null)))},j=a(27),k=a.n(j),w=a(35),I=a(36),O=a(63),T=a.n(O),H={blurb:{display:"flex",flexDirection:"column",alignItems:"center",width:280,fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'},title:{fontSize:"2rem",fontWeight:400,lineHeight:1.2,color:"#5a5a5a",marginTop:5,marginBottom:5},ptext:{textAlign:"center",fontWeight:400,lineHeight:1.5,color:"#5a5a5a",marginTop:0,marginBottom:5},button:{backgroundColor:"#0275d8"}},R=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="0%";return this.props.circle&&(e="50%"),r.a.createElement("div",{style:H.blurb},r.a.createElement("img",{style:{borderRadius:e},src:this.props.image,alt:"CSUMB Logo",width:"140",height:"140"}),r.a.createElement("h2",{style:H.title},this.props.title),r.a.createElement("p",{style:H.ptext},this.props.contents),r.a.createElement("p",null,r.a.createElement(T.a,{style:H.button,variant:"contained",color:"primary",href:this.props.button_url},this.props.button_text," \xbb")))}}]),t}(n.Component),B={box:{backgroundColor:"#e9ecef",padding:"4rem 2rem",textAlign:"center",fontSize:"2.5rem",fontWeight:500,color:"#5a5a5a",marginBottom:50}},D=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderBanner",value:function(){return r.a.createElement("section",{class:"jumbotron text-center"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",{class:"jumbotron-heading"},this.props.title),r.a.createElement("p",{class:"lead text-muted"},this.props.subtitle),r.a.createElement("p",null)))}},{key:"render",value:function(){return r.a.createElement("div",{style:B.box},this.props.text,this.props.description)}}]),t}(n.Component),W=a(19),L=a.n(W),z={container:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",margin:16,padding:16,backgroundColor:"#f7fafd"},text:{margin:15,maxWidth:500},title:{fontSize:"50px",color:"#5a5a5a",fontWeight:400,lineHeight:1,marginBottom:15},date:{fontSize:"38px",color:"#6c757d",fontWeight:400,lineHeight:1,letterSpacing:"-0.05rem",marginTop:15,marginBottom:20},description:{fontSize:"1.25rem",color:"#5a5a5a",fontWeight:300,lineHeight:1.5,marginTop:10},picture:{marginLeft:15}},G=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderText",value:function(){return r.a.createElement("div",{style:z.text},r.a.createElement("div",{style:z.title},this.props.title),r.a.createElement("div",{style:z.date},this.props.date),r.a.createElement("div",{style:z.description},this.props.contents))}},{key:"renderPicture",value:function(){return r.a.createElement("div",{style:z.picture},r.a.createElement("img",{src:this.props.image,alt:"Event Image"}))}},{key:"render",value:function(){return"flipped"===this.props.orientation?r.a.createElement(L.a,{style:z.container},this.renderPicture(),this.renderText()):r.a.createElement(L.a,{style:z.container},this.renderText(),this.renderPicture())}}]),t}(n.Component),N=a(64),X=a.n(N),Q=a(65),U=a.n(Q),M=a(66),J=a.n(M),V=a(67),F=a.n(V),K=a(68),Z=a.n(K),q=a(69),_=a.n(q),Y=a(70),$=a.n(Y),ee=a(71),te=a.n(ee),ae=a(72),ne=a.n(ae),re=a(73),ie=a.n(re),oe={root:{margin:32},intro:{display:"flex",flexDirection:"row",alignItems:"center",margin:16,marginBottom:32},header:{order:1,flexGrow:2,marginRight:15},name:{fontSize:"50px",color:"#5a5a5a",fontWeight:400,lineHeight:1,marginBottom:15},titles:{fontSize:"38px",color:"#6c757d",fontWeight:400,lineHeight:1.2,letterSpacing:"-0.05rem",marginTop:15},description:{fontSize:"1.25rem",color:"#5a5a5a",fontWeight:300,lineHeight:1.5},icons:{fontSize:"3em"},profilePic:{order:2,flexGrow:1,marginLeft:15},blurbs:{display:"flex",flexDirection:"row",justifyContent:"space-evenly"},events:{padding:16}},le=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:oe.root},r.a.createElement("div",{style:oe.intro},r.a.createElement("div",{style:oe.header},r.a.createElement("h2",{style:oe.name},"Ryan Blakeman"),r.a.createElement("h2",{style:oe.titles},"Game Developer | ",r.a.createElement("br",null)," Software Engineer | ",r.a.createElement("br",null)," Full Stack Developer"),r.a.createElement("p",{style:oe.description},"I am a recent CSUMB graduate, where I received my B.S. in Computer Science. In my time at school I focused on Game Development while also co-developing my Software Engineering and Web Development skills. I have an abundance of projects with a cumulative research project."),r.a.createElement("p",{style:oe.icons},r.a.createElement("a",{style:{marginLeft:10},href:"https://github.com/rblakeman"},r.a.createElement(w.a,{style:{color:"black"},icon:I.a})),r.a.createElement("a",{style:{marginLeft:10},href:"https://www.linkedin.com/in/rblakeman/"},r.a.createElement(w.a,{style:{color:"#007bb5"},icon:I.b})))),r.a.createElement("div",{style:oe.profilePic},r.a.createElement("img",{src:X.a,alt:"Profile Picture"}))),r.a.createElement("div",{style:oe.blurbs},r.a.createElement("div",null,r.a.createElement(R,{image:U.a,circle:!0,title:"Education",contents:"Bachelor of Science in Computer Science & Information Technology. Graduated Spring 2018 with Honors and an emphasis in Game Development",button_text:"CSUMB",button_url:"https://csumb.edu/games"})),r.a.createElement("div",null,r.a.createElement(R,{image:J.a,circle:!1,title:"Game Research Lab",contents:"Private lab and workspace for HCI, Robotics, Computer Graphics, and Game research. Annual host of many undergraduate funded research projects and papers.",button_text:"GRL Site",button_url:"http://gameresearchlab.org/"})),r.a.createElement("div",null,r.a.createElement(R,{image:F.a,circle:!0,title:"Experience",contents:"Involved and completed many different projects in a variety of different backgrounds, including: Software, Games, and Undergraduate Research.",button_text:"Resume",button_url:"#"}))),r.a.createElement("div",{style:oe.events},r.a.createElement(k.a,{variant:"middle",style:{marginTop:50,marginBottom:50}}),r.a.createElement(D,{text:"Events"}),r.a.createElement(G,{title:"University Graduation",date:"May 2018",contents:"Walked across the stage to receive my B.S. along with several colleagues. Best part of the day? Hearing my name pronounced correctly.",image:Z.a}),r.a.createElement(G,{title:"Senior Capstone",date:"May 2018",contents:"Presented with my team in front of faculty and visitors. Followed up with a poster session, and a live demo. Learn about the project under the Games tab.",image:_.a,orientation:"flipped"}),r.a.createElement(G,{title:"GDC 2018",date:"March 2018",contents:"Returned back a second year using the Student Expo Pass.",image:$.a}),r.a.createElement(G,{title:"UROC Summer Research Symposium 2017",date:"August 2017",contents:"We presented our final research during UROC's Summer Research Symposium in the Tanimura & Antle Library. Check out my Research tab for more info and the poster.",image:te.a,orientation:"flipped"}),r.a.createElement(G,{title:"GameJam 2017",date:"June 2017",contents:"Set up and assisted Dr. Krzysztof Pietroszek with the Summer GameJam in the Joel & Dena Gambord BIT Building.",image:ne.a}),r.a.createElement(G,{title:"GDC 2017",date:"March 2017",contents:"Visited the Game Developers Conference this year thanks to the student Expo Pass.",image:ie.a,orientation:"flipped"})),r.a.createElement(k.a,{variant:"middle",style:{marginTop:50,marginBottom:50}}))}}]),t}(n.Component),ce={container:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",margin:16,padding:16,backgroundColor:"#f7fafd"},text:{margin:15,maxWidth:500},title:{fontSize:"50px",color:"#5a5a5a",fontWeight:400,lineHeight:1,marginBottom:15},tags:{fontSize:"38px",color:"#6c757d",fontWeight:400,lineHeight:1,letterSpacing:"-0.05rem",marginTop:15,marginBottom:20},description:{fontSize:"1.25rem",color:"#5a5a5a",fontWeight:300,lineHeight:1.5,marginTop:10},picture:{marginLeft:15}},se=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderText",value:function(){return this.props.list?r.a.createElement("div",{style:ce.text},r.a.createElement("div",{style:ce.title},this.props.title),r.a.createElement("div",{style:ce.tags},this.props.tags),r.a.createElement("div",{style:ce.description},this.props.contents,this.renderList())):r.a.createElement("div",{style:ce.text},r.a.createElement("div",{style:ce.title},this.props.title),r.a.createElement("div",{style:ce.tags},this.props.tags),r.a.createElement("div",{style:ce.description},this.props.contents))}},{key:"renderList",value:function(){return r.a.createElement("ul",null,r.a.createElement("li",null,this.props.list),r.a.createElement("li",null,this.props.list2))}},{key:"renderPicture",value:function(){return r.a.createElement("div",{style:ce.picture},r.a.createElement("img",{src:this.props.image,alt:"Software Project Image"}))}},{key:"render",value:function(){return r.a.createElement(L.a,{style:ce.container},this.renderText(),this.renderPicture())}}]),t}(n.Component),Ae={container:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",margin:16,padding:16,backgroundColor:"#f7fafd"},text:{margin:15,maxWidth:500},title:{fontSize:"50px",color:"#5a5a5a",fontWeight:400,lineHeight:1,marginBottom:15},date:{fontSize:"38px",color:"#6c757d",fontWeight:400,lineHeight:1,letterSpacing:"-0.05rem",marginTop:15,marginBottom:20},description:{fontSize:"1.25rem",color:"#5a5a5a",fontWeight:300,lineHeight:1.5,marginTop:10},picture:{marginLeft:15}},me=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:Ae.events},r.a.createElement(D,{text:"Software Projects"}),r.a.createElement(se,{title:"React-Redux Projects",tags:"ReactJS",contents:"Handful of Full-Stack projects from online course",list:"Weather Forecast App",list2:"YouTube Search and Viewer App"}),r.a.createElement(se,{title:"Web Development Catalog",tags:"HTML, PHP, JS, CSS",contents:"GitHub Repository from all of my projects and assignments from university course. Screenshots are from an example project"}),r.a.createElement(se,{title:"Otter Flight Reservation System",tags:"Android App",contents:"App allows customers of an airline company to create accounts and manage reservations Demonstrated use-case scenarios for both users and administrators to manage SQLite database Created with Android Studio and applied Java focused design skills"}),r.a.createElement(se,{title:'Parking Detector "Clamshell"',tags:"Iot: Integrated Microcontroller Project",contents:"Designed and fabricated a self-contained, 3d-printed parking detector. Communicates with a database to allows users to see available parking spots in crowded lots. Developed using Microcontroller, ultrasonic sensor, and solar panel"}),r.a.createElement(k.a,{variant:"middle",style:{marginTop:50,marginBottom:50}}))}}]),t}(n.Component),pe=function(e){return r.a.createElement("div",null," Coming Soon ")},de=function(e){return r.a.createElement("div",null," Coming Soon ")},ue=function(e){return r.a.createElement("div",null," Coming Soon ")},Pe={root:{fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}},fe=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{style:Pe.root,className:"App"},r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(E,null),r.a.createElement(d.a,{path:"/",exact:!0,component:le}),r.a.createElement(d.a,{path:"/software/",component:me}),r.a.createElement(d.a,{path:"/games/",component:pe}),r.a.createElement(d.a,{path:"/research/",component:de}),r.a.createElement(d.a,{path:"/resume/",component:ue}),r.a.createElement(C,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},64:function(e,t,a){e.exports=a.p+"static/media/profile_pic.8517b1f9.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/csumb_logo.d94303e7.png"},66:function(e,t){e.exports="data:image/png;base64,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"},67:function(e,t,a){e.exports=a.p+"static/media/experience_pic.861e5509.png"},68:function(e,t,a){e.exports=a.p+"static/media/graduation.bcada6fe.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/capstone.60658f06.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/gdc_2018.601dd1ff.jpeg"},71:function(e,t,a){e.exports=a.p+"static/media/uroc_symposium_2017.f710ce28.jpg"},72:function(e,t,a){e.exports=a.p+"static/media/gamejam_2017.014d095c.jpg"},73:function(e,t,a){e.exports=a.p+"static/media/gdc_2017.54577152.jpg"},77:function(e,t,a){e.exports=a(179)},82:function(e,t,a){}},[[77,2,1]]]);
//# sourceMappingURL=main.7200d0b3.chunk.js.map