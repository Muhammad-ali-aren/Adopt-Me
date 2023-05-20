import { Component } from 'react';
import { Link } from 'react-router-dom';
class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(`error boundary caught error${(error, info)}`);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          something went wrong <Link to="/">click here to go to home page</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
