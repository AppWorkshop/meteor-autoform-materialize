/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import Utility from '../../utilities';
import './date.html';

Template.afInputDate_materialize.helpers({
  atts: Utility.attsToggleInvalidClass
});
