import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserData } from '../../../redux/user-redux/userActions';

const Home = (props) => {

    useEffect(() => {
        const { firstname } = props;
        console.log(firstname);
    }, [props])

    return (
        <div>
         <h1>Home</h1>
        </div>
    )
}

const mapStateToProps = ({
  user: {
      firstname
  }
}) => {
   return {
     firstname
   }
}

const mapActionsToProps = {
    setUserData
}

export default connect(mapStateToProps, mapActionsToProps)(Home);