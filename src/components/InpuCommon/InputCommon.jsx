import { useState } from "react";
import styles from "./styles.module.scss";
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';
function InputCommon({lable , type , isRequired = false}) {
    const {lableInput,boxInput,container, boxIcon} = styles;

    const [showPassword, setShowPassword] = useState(false);
    const isShowTextPassword =
        type === 'password' && showPassword ? 'text' : type;

    const isPassWord  = type === "password";

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return(
        <div className={container}>
            <div className={lableInput}>
                {lable} {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input type={isShowTextPassword} />
                {isPassWord && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                         {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputCommon;