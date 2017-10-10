import Immutable from 'immutable';
import React from 'react';

// ESLint can't resolve the module location when running on Travis, so ignore these lints.
// eslint-disable-next-line import/no-unresolved, import/extensions
import { ImmutableListView } from 'react-native-immutable-list-view';

import GenericListExample from './GenericListExample';

import utils from './utils';
import mockData from './mockData';

/**
 *
 * Note: This code is NOT a good example for use in your own app.
 * It's only written this way because the example apps are complex
 * and need to be repeated for every type of list.
 *
 * For working example code to use in your own app, please see the
 * extensive documentation in the README.
 *
 */
function ImmutableListViewExample() {
  return (
    <GenericListExample
      ListComponent={ImmutableListView}
      listComponentProps={{
        renderRow: utils.renderRow,
      }}

      initialDataA={mockData}
      dataMutatorA={(data) => data.setIn(['Section A', 1], 'This value was changed!')}
      extraPropsA={{
        renderSectionHeader: utils.renderSectionHeader,
      }}

      initialDataB={Immutable.Range(1, 100)}
      dataMutatorB={(data) => data.toSeq().map((n) => n * 2)}
    />
  );
}

export default ImmutableListViewExample;
