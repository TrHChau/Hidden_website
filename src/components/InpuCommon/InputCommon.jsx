import { useState } from "react";
import styles from "./styles.module.scss";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
function InputCommon({ lable, type, isRequired = false, ...props }) {
  const { lableInput, boxInput, container, boxIcon, errMsg } = styles;
  const { formik, id } = props;
  const [showPassword, setShowPassword] = useState(false);
  const isShowTextPassword =
    type === "password" && showPassword ? "text" : type;

  const isPassWord = type === "password";
  const messageErr = formik.errors[id];
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const isErr = formik.touched[id] && formik.errors[id];

  return (
    <div className={container}>
      <div className={lableInput}>
        {lable} {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input
          type={isShowTextPassword}
          {...props}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[id]}
        />
        {isPassWord && (
          <div className={boxIcon} onClick={handleShowPassword}>
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </div>
        )}
        {isErr && <div className={errMsg}>{messageErr}</div>}
      </div>
    </div>
  );
}

export default InputCommon;
