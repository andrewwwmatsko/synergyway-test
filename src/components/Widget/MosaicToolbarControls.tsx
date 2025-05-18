import React, { useContext } from 'react';
import { MosaicContext, MosaicWindowContext } from 'react-mosaic-component';
import type { MosaicPath } from 'react-mosaic-component';
import { Icon } from '@blueprintjs/core';

type Props = {
  path: MosaicPath;
};

function MosaicToolbarControls({ path }: Props) {
  const { mosaicActions } = useContext(MosaicContext as React.Context<any>);
  const { mosaicWindowActions } = useContext(
    MosaicWindowContext as React.Context<any>
  );

  return (
    <div className="flex gap-2 items-center">
      <button
        title="Split"
        onClick={() => mosaicWindowActions.split()}
        className="p-1 hover:bg-gray-200 rounded"
      >
        <Icon icon="split-columns" />
      </button>
      <button
        title="Expand"
        onClick={() => mosaicActions.expand(path)}
        className="p-1 hover:bg-gray-200 rounded"
      >
        <Icon icon="maximize" />
      </button>
      <button
        title="Close"
        onClick={() => mosaicActions.remove(path)}
        className="p-1 hover:bg-gray-200 rounded"
      >
        <Icon icon="cross" />
      </button>
    </div>
  );
}

export default MosaicToolbarControls;
