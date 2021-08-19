'use strict';
import {
  createPageHeading,
  createControlsContainerAndItsChildren,
  createImageElement,
} from '../views/cssVariablesViews.js';
import { updateTheInputsTags } from '../handlers/cssHandlers.js';
const initializeThePage = () => {
  createPageHeading();
  createControlsContainerAndItsChildren();
  createImageElement();
  updateTheInputsTags();
};
window.addEventListener('load', initializeThePage);
