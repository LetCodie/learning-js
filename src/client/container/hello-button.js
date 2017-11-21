// @flow

import { connect } from 'react-redux'
import { SayHello } from '../action/hello'
import Button from '../component/button'


const mapStateToProps = () => ({
  label: 'Say Hello',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch( SayHello('Hello!') ) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
