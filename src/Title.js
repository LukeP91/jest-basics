import React, { Component } from 'react'

export default class Title extends Component {
  render() {
    const { children } = this.props

    return(
      <div style={styles.header}>
        <div className="title" style={styles.title}>{children}</div>
      </div>
    );
  }
}

const styles = {
  header: {
    backgrounColor: "skyblue",
    padding: 15
  },
  title: {
    textAlign: "center",
    color: "white"
  }
};
