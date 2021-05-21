import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { InfiniteList } from "../generic/List/index";
import SplitPane from "react-split-pane";
import PropTypes from "prop-types";
import { TestingCol } from "../generic/TestingCol/index";

export const Discovery = () => {
  const styles = {
    background: "black",
    width: "2px",
    cursor: "col-resize",
    height: "100%",
    paddingRight: "2px",
    borderRight: "white 4px solid",
    borderLeft: "white 4px solid",
    margin: "0 -5px",
    zIndex: "1"
  };

  return (
    <Container
      fluid
      style={{
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0"
      }}
    >
      <Row className="discovery-grid">
        <div className={"discovery-column theme-column"}>
          <TestingCol typeName={"themes"} />
        </div>
        <SplitPane
          style={{ position: "relative", overflow: "hidden" }}
          split="vertical"
          minSize={200}
          resizerStyle={styles}
          pane1Style={200}
          pane2Style={200}
        >
          <div className={`discovery-column document-column `}>
            <TestingCol typeName={"documents"} />
          </div>
          <div className={`discovery-column content-column `}>
            <TestingCol typeName={"content"} />
          </div>
        </SplitPane>
      </Row>
    </Container>
  );
};
