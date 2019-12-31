// Avoid flicker of unstyled content
exports.onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
      className: 'no-js'
    });
};
