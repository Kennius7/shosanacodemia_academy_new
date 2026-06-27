/* eslint-disable @typescript-eslint/no-explicit-any */

interface MFACodeInputProps {
  length?: number;
  formData: { code: string };
  setFormData: (formData: any) => void;
  inputsRef: any;
  values: string[];
  setValues: any;
  isError?: boolean;
}

export const MFACodeInput = ({
  length = 6,
  setFormData,
  inputsRef,
  values,
  setValues,
  isError = false,
}: MFACodeInputProps) => {
  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return; // allow only digits

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    const code = newValues.join("");
    if (code.length === length && !newValues.includes("")) {
      setFormData?.((prev: any) => ({ ...prev, code: code }));
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").trim();
    if (!/^\d+$/.test(paste)) return; // only digits

    const digits = paste.split("").slice(0, length);
    const newValues = [...values];
    digits.forEach((digit, i) => {
      newValues[i] = digit;
    });

    setValues(newValues);

    const code = newValues.join("");
    if (code.length === length && !newValues.includes("")) {
      setFormData?.((prev: any) => ({ ...prev, code: code }));
    }

    // focus last filled input
    const lastIndex = digits.length - 1;
    if (inputsRef.current[lastIndex]) {
      inputsRef.current[lastIndex]?.focus();
    }
  };

  return (
    <div className="flex gap-3 justify-center">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={values[i] ?? ""}
          onChange={(e) => handleChange(e.target.value, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onPaste={handlePaste}
          ref={(el) => {
            inputsRef.current[i] = el;
          }}
          // className="w-14 h-12 text-center text-lg border rounded-lg focus:outline-none
          // focus:ring-2 focus:ring-blue-500"
          className={`w-14 h-12 text-center text-lg border rounded-lg focus:outline-none 
                        ${
                          isError
                            ? "border-red-500 focus:ring-2 focus:ring-red-400"
                            : "border-gray-300 focus:ring-2 focus:ring-blue-500"
                        }`}
        />
      ))}
    </div>
  );
};
