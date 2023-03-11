import { create } from "zustand";

type ErrorProps ={
    errorMessageValue: string;
    setErrorMessage: (value: string) => void
}

export const useErrorMessageStore = create<ErrorProps>((set)=> ({
    errorMessageValue: "",
    setErrorMessage: (value: string) => set({errorMessageValue: value})
}))