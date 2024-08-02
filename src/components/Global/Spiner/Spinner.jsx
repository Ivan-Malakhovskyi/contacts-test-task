import { Puff } from "react-loader-spinner";
import { SpinnerWrapper } from "./Spinner.styled";

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Puff
        visible={true}
        height="80"
        width="80"
        color="#2a1b6d"
        ariaLabel="puff-loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
        wrapperClass=""
      />
    </SpinnerWrapper>
  );
};
