import React from 'react';
import './InputSwitchItem.styl';

const InputSwitchItem = field => (
  <div tabIndex="-1" data-switch-position="left" className="switchboard-item disabled">
    <div className="content">
      <h4 className="name">{field.title}</h4>
      <div className="desc">{field.description}</div>
    </div>
    <div className="switch">
      <div className="ui-switch">
        <input {...field.input} id={field.name} type="checkbox" checked={field.input.value} /><span className="status" />
      </div>
    </div>
  </div>
);

export default InputSwitchItem;
