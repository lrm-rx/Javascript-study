import { ChangeEvent, useState } from 'react';
import styles from './index.module.scss';
import CountDown from '../CountDown';

interface IProps {
  isShow: boolean;
  onClose: Function;
}
const Login = (props: IProps) => {
  const { isShow = false } = props;
  const [isShowVerifyCode, setIsShowVerifyCode] = useState(false)
  const [form, setForm] = useState({
    phone: "",
    verify: ""
  })
  const handleClose = () => {
    setForm({
      phone: "",
      verify: ""
    })
  }
  const handleGetVerifyCode = () => {
    setIsShowVerifyCode(true)
  }
  const handleLogin = () => {

  }
  const handleOtherLogin = () => {

  }
  const changeFormValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }
  const handleCountDownEnd = () => {
    setIsShowVerifyCode(false)
  }
  return isShow ? (
    <div className={styles.loginArea}>
      <div className={styles.loginBox}>
        <div className={styles.boxHeader}>
          <div className={styles.title}>手机号登录</div>
          <div className={styles.close} onClick={handleClose}>X</div>
        </div>
        <input onChange={changeFormValue} value={form.phone} name="phone" type="text" placeholder="请输入手机号" />
        <div className={styles.verifyCodeArea}>
          <input onChange={changeFormValue} value={form.verify} name="verify" type="text" placeholder="请输入验证码" />
            {
              isShowVerifyCode ? <CountDown time={10} onEnd={handleCountDownEnd} />:
              <span className={styles.verifyCode} onClick={handleGetVerifyCode}>获取验证码</span>
            }
        </div>
        <div className={styles.loginBtn} onClick={handleLogin}>登 录</div>
        <div className={styles.otherLogin} onClick={handleOtherLogin}>使用Github登录</div>
        <div className={styles.loginPrivacy}>
          <span>*</span>
          注册登录即表示同意
          <a href="#" target="_blank" rel="noreferrer">隐私政策</a>
        </div>
      </div>
    </div>
  ) : null
}

export default Login