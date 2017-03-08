
import { connect } from 'react-redux';

import App from '../components/app';
import { changeName } from '../actions/index.js';
function mapStateToProps(state) {
  return {
      name: state.nameState.name,
  };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
  return {
      change: ()=>{
          dispatch(changeName("zhhangchhuang"));
      }
  };
}

const app =  connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default app;
