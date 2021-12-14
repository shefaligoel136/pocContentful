import React, { useState, useEffect } from "react";
import { PlainClientAPI } from "contentful-management";
import {
  Paragraph,
  List,
  ListItem,
  Note,
  Button,
} from "@contentful/forma-36-react-components";
import { SidebarExtensionSDK } from "@contentful/app-sdk";
import readingTime from "reading-time";

interface SidebarProps {
  sdk: SidebarExtensionSDK;
  cma: PlainClientAPI;
}

const CONTENT_FIELD_ID = "apiName";

const apiNames = ["api1", "api2", "api3", "api4", "api5"];

const Sidebar = (props: SidebarProps) => {
  const { sdk } = props;

  const contentField = sdk.entry.fields[CONTENT_FIELD_ID];

  return (
    <>
      {apiNames.map((apiName) => {
        return (
          <div className="apiNameContainer">
            <div className="nameContainer">{apiName}</div>
            <button
              onClick={(e) => {
                contentField.setValue(apiName);
              }}
            >
              ADD
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Sidebar;
