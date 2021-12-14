import React, { useEffect, useState } from 'react';
import { PlainClientAPI } from 'contentful-management';
import { Paragraph } from '@contentful/forma-36-react-components';
import { FieldExtensionSDK } from '@contentful/app-sdk';

interface FieldProps {
  sdk: FieldExtensionSDK;
  cma: PlainClientAPI;
}

const CONTENT_FIELD_ID = "apiName";



const Field = (props: FieldProps) => {

  const { sdk } = props;

  const contentField = sdk.entry.fields[CONTENT_FIELD_ID];
  console.log("contentField", contentField.getValue())

  const [apiName, setApiName] = useState(contentField.getValue());

  useEffect(() => {
    const detach = contentField.onValueChanged((value) => {
      setApiName(value);
    });
    return () => detach();
  }, [contentField]);

  return <Paragraph>{apiName}</Paragraph>;
};

export default Field;
