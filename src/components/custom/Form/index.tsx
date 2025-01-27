import React from "react";

type FormProps = {
  form: { handleSubmit: () => void }; // Sesuaikan dengan metode `form` yang Anda gunakan
  className?: string;
  children: React.ReactNode;
};

export function Form({ form, className, children }: FormProps) {
  return (
    <form
      className={className ? className : "grid gap-6"}
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
    >
      {children}
    </form>
  )
}