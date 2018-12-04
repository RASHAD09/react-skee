var react =require('react');
var ListItem =require('./ListItem.jsx');

var ingredients = [
{"id":1,"text":"rashad"},
{"id":2,"text":"rash"}
,{"id":3,"text":"ras"}
];

var list =react.createClass({
render : fuinction() {
  var ListItem = ingredients.map(function(item){
    return <ListItem key={item.id} ingredients={item.text}/>
  });
  return (<ul>{ListItem}</ul>);
}
});

module.exports = List;
