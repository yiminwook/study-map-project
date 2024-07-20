import { useCallback, useState } from "react";

export const useInput = (initialForm: string) => {
  const [value, setValue] = useState(initialForm);

  const onChage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value);
  }, []);

  return { value, onChage };
};
