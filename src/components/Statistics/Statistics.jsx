import PropTypes from 'prop-types';
// import css from '../Statistics/Statistics.module.css';
import Data from '../Data/Data';
import objData from '../../utils/objData';



export default function Statistics({ stats, title }) {
  const objStats = objData(stats)
  console.log(objStats)
  // console.log(JSON.stringify(stats))
  return (
    <div>
        <Data
        title={title}
        objStats={objStats} />

    </div >
  );
}

Statistics.propType = {
  id: PropTypes.string.isRequired,
}