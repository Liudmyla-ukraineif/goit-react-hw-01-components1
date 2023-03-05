import PropTypes from 'prop-types';

export default function objData(data) {
  const obj = {};
  data.forEach(element => {
    obj[element.label] = element.percentage;
  });
  return obj;
}

objData.protoType = {
  label: PropTypes.string.isRequired,
  performance:PropTypes.number.isRequired,
}