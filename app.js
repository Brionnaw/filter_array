// var aaa = [
//     {name: "AAA", id: 845},
//     {name: "BBB", id: 839},
//     {name: "CCC", id: 854}
// ];
// var bbb = [
//     {id: 854},
//     {id: 854}
// ];
//
// var ids = {};
// _.each(bbb, function (bb) { ids[bb.id] = true; });
//
// var out = _.filter(aaa, function(val){
//     return ids[val.id];
// }, bbb);
//
// document.getElementById('result').value = JSON.stringify(out);



function nospaces(t){

    if( t.value.match(/\s/g) || t.value.match(/\./g)  ){

        t.value= (t.value.replace(/\s/g,'') .replace(/\./g,''));

    }

} //allows no spaces or dots


function myFunction() {
    str = document.getElementById('num').value;

    str=str.replace(/\s/g, '');
    if(str.length%5==1){

        document.getElementById('num').value+=" ";
    }
}//declaring 5th number has space in the input
