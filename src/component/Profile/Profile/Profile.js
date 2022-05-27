import React from 'react'
import PropTypes from 'prop-types';
import './Profile.css'

const Profile = ({name,bio,profession,children,consolelog}) => {
  return (
    <div className='profile'>
        {children} <br /> 
        {name} <br /> 
        {bio} <br /> 
        {profession} <br /> 
        <button onClick={() => consolelog(name)}>click</button>
    </div>
  )
}

    Profile.defaultProps = {
    name: "name",
    bio: "bio",
    profession: "profession"
  }

    Profile.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.element,
    consolelog: PropTypes.func
  };
export default Profile