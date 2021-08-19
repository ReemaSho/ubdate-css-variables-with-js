'use strict';
import {
  setAttributesAndContent,
  createDOMElement,
} from '../utils/DOMUtils.js';
import { CONTAINER_ELE } from '../constants.js';

export const createPageHeading = () => {
  const heading = createDOMElement('h2');
  heading.innerHTML =
    'Update CSS Variables with<br> <span class="hl">JS</span>';
  CONTAINER_ELE.appendChild(heading);
};
export const createControlsContainerAndItsChildren = () => {
  const controlsContainer = createDOMElement('div');
  controlsContainer.classList.add('controls');
  //spacing
  const spacingLabel = createDOMElement('label');
  setAttributesAndContent(spacingLabel, { for: 'spacing' }, 'Spacing:');
  const spacingInput = createDOMElement('input');
  spacingInput.id = 'spacing';

  setAttributesAndContent(spacingInput, {
    type: 'range',
    name: 'spacing',
    min: '10',
    max: '200',
    value: '10',
    'data-sizing': 'px',
  });
  //blur
  const blurLabel = createDOMElement('label');
  setAttributesAndContent(blurLabel, { for: 'blur' }, 'Blur:');
  const blurInput = createDOMElement('input');
  blurInput.id = 'blur';
  setAttributesAndContent(blurInput, {
    type: 'range',
    name: 'blur',
    min: '0',
    max: '25',
    value: '10',
    'data-sizing': 'px',
  });
  const lineBreak = createDOMElement('br');
  //color
  const colorLabel = createDOMElement('label');
  setAttributesAndContent(colorLabel, { for: 'base' }, 'Base Color');
  const colorInput = createDOMElement('input');
  colorInput.id = 'base';
  setAttributesAndContent(colorInput, {
    type: 'color',
    name: 'base',
    value: '#19b4c9',
  });
  controlsContainer.append(
    spacingLabel,
    spacingInput,
    blurLabel,
    blurInput,
    lineBreak,
    colorLabel,
    colorInput
  );
  CONTAINER_ELE.appendChild(controlsContainer);
};
export const createImageElement = () => {
  const imageTag = createDOMElement('img');
  imageTag.src =
    'https://images.unsplash.com/photo-1520848315518-b991dd16a625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80';
  CONTAINER_ELE.appendChild(imageTag);
};
