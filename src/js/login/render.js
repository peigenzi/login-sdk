const template = (opts = {}) => {
  const tpl = `
    <div id="login-wrapper">
      <form id="login-form" onsubmit="return false">
        <label class="login-account-wrapper">
          <span class="account-label">用户名</span>
          <input id="login-account" name="account" type="text" placeholder="请填写您的用户名">
          <span id="clear-account" class="del"></span>
        </label>

        <label class="login-account-wrapper">
          <span class="password-label">密码</span>
          <input id="login-password" name="password" type="text" placeholder="请填写您的密码">
        </label>

        <input id="login-btn" class="login-btn" type="submit" value="登录">
      </form>
    </div>
  `;
  return tpl;
};
export default (conf = {}) => {
  conf.container.innerHTML = template(conf);
};
