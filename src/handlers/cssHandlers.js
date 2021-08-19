'use strict';
export const updateTheInputsTags = () => {
  const inputs = document.querySelectorAll('.controls input');

  inputs.forEach((input) => input.addEventListener('change', handleUpdate));
  inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));
};
const handleUpdate = (event) => {
  const inputs = document.querySelectorAll('.controls input');
  inputs.forEach((input) => {
    if (input === event.target) {
      const suffix = input.dataset.sizing || '';

      document.documentElement.style.setProperty(
        `--${input.name}`,
        input.value + suffix
      );
    }
  });
};
