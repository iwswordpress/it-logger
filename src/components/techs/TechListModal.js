import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TechItem from './TechItem';
// import { getTechs } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';
const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs');
    const data = await res.json();
    console.log(data);

    setTechs(data);
    setLoading(false);
  };
  const closeModal = () => {
    document.getElementById('tech-list-modal').style.display = 'none';
  };
  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h4>Technician List</h4>
          <a
            href='#!'
            onClick={closeModal}
            className='modal-close waves-effect red waves-light btn'
          >
            Close
          </a>
        </div>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

// TechListModal.propTypes = {
//   tech: PropTypes.object.isRequired,
//   getTechs: PropTypes.func.isRequired
// };

// const mapStateToProps = (state) => ({
//   tech: state.tech
// });

export default TechListModal;
