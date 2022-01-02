import React from "react"

export default class SafeComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, errorMsg: '' }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMsg: error }
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return(<p style={{color: 'red'}}>{this.state.errorMsg.toString()}</p>)
    }
    return this.props.children
  }
}
