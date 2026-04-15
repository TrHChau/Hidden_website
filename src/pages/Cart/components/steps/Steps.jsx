import styles from "../../styles.module.scss";
import Stepper from "./Stepper";
function Steps() {
  const { containerSteps, steps, line, textNoti } = styles;
  const dataSteps = [
    { number: 1, content: "Shopping cart" },
    { number: 2, content: "Checkout" },
    { number: 3, content: "Order status" },
  ];
  return (
    <div className={containerSteps}>
      <div className={steps}>
        {dataSteps.map((step, index) => {
          return (
            <>
              <Stepper
                key={index}
                number={step.number}
                content={step.content}
                isDisabled={index > 0} // Example logic, adjust as needed
              />
              {index !== dataSteps.length - 1 && <div className={line}></div>}
            </>
          );
        })}
      </div>
      <div className={textNoti}>.....</div>
    </div>
  );
}

export default Steps;
