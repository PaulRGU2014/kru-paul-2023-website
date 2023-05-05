import React from 'react';
import styles from './ErrorBoundry.module.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo })
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.component}>
          <h2>There was an error displaying component: {this.props.componentName}</h2>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
