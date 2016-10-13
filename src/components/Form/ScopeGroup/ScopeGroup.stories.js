import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Field } from 'redux-form';

import ScopeGroup from './';
import FakeForm from '../FakeForm';
import { Provider, store } from '../utils';

function renderField(field) {
  return (
      <Field
        name={field.name}
        component={ScopeGroup}
        label={field.label}
        options={field.options}
      />
  );
}

storiesOf('ScopeGroup', module)
  .addDecorator(story => (<Provider store={store}><FakeForm>{story()}</FakeForm></Provider>))
  .add('default view', () => {
    const field = {
      name: 'FieldName',
      label: 'My Label',
      options: [ { value: 'op1', text: 'Option 1' }, { value: 'op2', text: 'Option 2' } ]
    };
    return renderField(field);
  });