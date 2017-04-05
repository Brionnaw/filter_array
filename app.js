var aaa = [
    {name: "AAA", id: 845},
    {name: "BBB", id: 839},
    {name: "CCC", id: 854}
];
var bbb = [
    {id: 854},
    {id: 854}
];

var ids = {};
_.each(bbb, function (bb) { ids[bb.id] = true; });

var out = _.filter(aaa, function(val){
    return ids[val.id];
}, bbb);

document.getElementById('result').value = JSON.stringify(out);
