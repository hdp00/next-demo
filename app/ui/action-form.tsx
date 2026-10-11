"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { saveNote, type ActionState } from "../learn/actions/actions";

const initialState: ActionState = { message: "还没有提交内容。" };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="button-primary" type="submit" disabled={pending}>
      {pending ? "服务器处理中…" : "提交到服务器"}
    </button>
  );
}

export function ActionForm() {
  const [state, formAction] = useActionState(saveNote, initialState);

  return (
    <form className="form-stack" action={formAction} noValidate>
      <label htmlFor="note">写一句学习笔记</label>
      <textarea id="note" name="note" placeholder="例如：page.tsx 默认是 Server Component。" />
      <div className="inline-actions">
        <SubmitButton />
      </div>
      <div
        className="status-row"
        data-tone={state.error ? "error" : undefined}
        aria-live="polite"
      >
        {state.error ?? state.message}
      </div>
    </form>
  );
}
