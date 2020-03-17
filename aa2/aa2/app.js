function reactshshs(e){
const idapp = document.getElementById('app');
const renderAll = () =>{
let template= (
    <div>{e}</div>
)
ReactDOM.render(template,idapp)
}
renderAll();
}
