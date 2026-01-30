console.log("Hii")
const parent = document.getElementById('container');
const root = ReactDOM.createRoot(parent)
const h2 = React.createElement("h2",{},"Welcome to React dev");
const li1 = React.createElement("li1",{},"java programming");
const li2 = React.createElement("li2",{},"C++ programming");
const ul = React.createContext("ul",{},li1,li2);
const div = React.createElement('div',{},h2,ul,img);
root.render(div);
