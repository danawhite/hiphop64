import React from 'react';

const RegionContainer = ({region}) => (
    <div style={styles.container}></div>
);

const styles = {
  container: {
      width: 600,
      height: 300,
      margin: 5,
      backgroundColor: 'green'
  }
};

export default RegionContainer;