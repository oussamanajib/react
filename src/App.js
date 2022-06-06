import './App.css';
import React, { Component } from 'react';
export default class Students extends Component {
state={
data:[
{id:1,name:'salah',email:'st1@gmail.com'},
{id:2,name:'omar',email:'st2@gmail.com'},
{id:3,name:'hadi',email:'st3@gmail.com'},
{id:4,name:'Saiid',email:'st4@gmail.com'}
]
}
render() {
const listItems = this.state.data.map((stud) => {
return (<div key={stud.id}> {stud.name}</div>)
})
return (
<div >
{listItems}
</div>
)
}
}