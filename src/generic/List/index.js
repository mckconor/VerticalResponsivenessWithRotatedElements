import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import PropTypes from "prop-types";

const InfiniteList = ({
  listRef,
  outerRef,
  itemSize,
  itemCount,
  onScroll,
  renderRow
}) => {
  return (
    <AutoSizer defaultWidth={100} defaultHeight={100}>
      {({ height, width }) => (
        <List
          ref={listRef}
          outerRef={outerRef}
          height={height}
          width={width}
          itemSize={itemSize}
          itemCount={itemCount}
          onScroll={({ scrollOffset }) => {
            if (onScroll) onScroll(scrollOffset);
          }}
        >
          {renderRow}
        </List>
      )}
    </AutoSizer>
  );
};

export default InfiniteList;

InfiniteList.propTypes = {
  listRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // An object
    PropTypes.object,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  outerRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  itemSize: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  onScroll: PropTypes.func,
  renderRow: PropTypes.func.isRequired
};
