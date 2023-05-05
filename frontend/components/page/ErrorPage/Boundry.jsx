import React from "react"
import ErrorPage from "./ErrorPage"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo })
  }
  render() {
    if (this.state.hasError) return <ErrorPage status={500} />;
    else return this.props.children;
  }
}

export default ErrorBoundary