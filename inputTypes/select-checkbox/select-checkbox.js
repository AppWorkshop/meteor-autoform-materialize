/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import Utility from '../../utilities';
import './select-checkbox.html';

Template.afCheckboxGroup_materialize.helpers({
  dsk:      Utility.dsk,
  itemAtts: Utility.selectedAttsAdjust,
})
