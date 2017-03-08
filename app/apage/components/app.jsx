
import React, { PropTypes } from 'react';

require("../sass/main.scss");
const App = ({name, change}) => (
    <div className="header">
      <h2>hello page alone hot middleware 啊啊啊啊啊啊啊啊啊啊啊啊 {name}!</h2>
      <input type="button" className="btn" value="click" onClick={change} />
    </div>

)

export default App;
