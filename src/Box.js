import React from 'react';

export default ({ name, age, desc }) => 
(<div className="box-items"><h1>Hello {name}!</h1>
<div>{age}</div><div>{desc}</div></div>);
