import InputCommon from "../../InpuCommon/InputCommon";
import styles from "./styles.module.scss";
import Button from "../../Button/Button";
function Login() {
    const {container,title,boxRememberMe , lostPassWord} = styles;
    return( 
        <div className={container}>
            <div className={title}>SIGN IN</div>

            <InputCommon lable="User name of email" type="text" isRequired />
            <InputCommon lable="Password" type="password" isRequired />

            <div className={boxRememberMe}>
                <input type="checkbox" />
                <span>Remember me</span>
            </div>

            <Button content={'LOGIN'}/> 
            <div className={lostPassWord}>Lost your password?</div>
        </div>
    );
}

export default Login;