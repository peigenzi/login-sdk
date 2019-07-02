import render from './render';
import bindEvent from './event';

const login = (opts = {}) => {
  const defaultOpts = {
    loginBtnText: '登录',
    accountLabel: '',
    passwordLabel: '',
    accountPlaceHolder: '手机号/邮箱/账号',
    passwordPlaceHolder: '请填写密码',
    showRemember: true,
    autocomplete: false
  };

  const options = Object.assign(defaultOpts, opts);

  render(options);
  bindEvent(options);
};

export { login };
