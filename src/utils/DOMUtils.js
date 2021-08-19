'use strict';

/**
 * This function removes all the html inside the given element
 */
export const clearDOMElement = (DOMElement) => {
  DOMElement.innerHTML = '';
};

/**
 * This function creates a DOM element with the given tag.
 * In the options parameter it is possible to add some extra data to it:
 *
 *  id - the id of the element
 */
export const createDOMElement = (tag, options) => {
  const { id } = options || {};

  const element = document.createElement(tag);

  if (id != null) {
    element.id = id;
  }

  return element;
};

/**
 * Find and return a DOM element by its id
 */
export const getDOMElement = (id) => {
  return document.getElementById(id);
};

/**
 * set multiple attributes and textContent at one it takes an element and object and string as parameters
 */

export const setAttributesAndContent = (el, attrs, content) => {
  Object.keys(attrs).forEach((key) => el.setAttribute(key, attrs[key]));
  if (content) {
    el.textContent = content;
  }
};
