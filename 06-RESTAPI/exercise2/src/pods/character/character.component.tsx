import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import { TextFieldComponent, SelectComponent } from 'common/components';
import { Lookup } from 'common/models';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { useNavigate } from 'react-router-dom';

interface Props {
  character: Character;
  // cities: Lookup[];
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Button variant="contained" onClick={handleGoBack}>
        Go Back
      </Button>
      <Formik
        onSubmit={onSave}
        initialValues={character}
        enableReinitialize={true}
        validate={formValidation.validateForm}
      >
        {() => (
          <Form className={classes.root}>
            <TextFieldComponent disabled={true} name="name" label="Name" />
            <TextFieldComponent disabled={true} name="status" label="Status" />
            <TextFieldComponent name="bestSentences" label="Best Sentences" />

            {/* <SelectComponent name="city" label="City" items={cities} /> */}
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
