import { useState } from 'react';
import PropTypes from 'prop-types';

import { Input, Form, Button, Text } from './FormSerch.styled';

import { ReactComponent as Serch } from '../../../img/search.svg';

export const FormSerch = ({ formSubmit, error }) => {
  const [tag, setTag] = useState('');

  const handleChange = e => {
    const newTag = e.target.value;

    setTag(newTag);
  };

  const handleSubmit = e => {
    e.preventDefault();
    formSubmit(tag);
    setTag('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="tag"
        value={tag}
        autocomplete="off"
        placeholder="Search movies"
        onChange={handleChange}
      />
      <Button type="submit">
        <Serch fill="currentColor" width="12" height="12" />
      </Button>
      {error && <Text>{error.message}</Text>}
    </Form>
  );
};

FormSerch.propType = {
  formSubmit: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
};
