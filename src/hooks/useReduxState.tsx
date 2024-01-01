import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

const useReduxState = <T,>(
  stateKey: keyof RootState,
  action: any
): [T, (newValue: T) => void] => {
  const dispatch = useDispatch();
  const state = useSelector<RootState, T>((reduxState) => reduxState[stateKey]);

  const setState = (newValue: T) => {
    dispatch({ type: action, payload: { [stateKey]: newValue } });
  };

  return [state, setState];
};

export default useReduxState;
