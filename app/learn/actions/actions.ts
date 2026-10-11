"use server";

export type ActionState = {
  message: string;
  error?: string;
};

function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export async function saveNote(
  previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  void previousState;
  const note = String(formData.get("note") ?? "").trim();

  await wait(500);

  if (!note) {
    return { message: "提交没有完成。", error: "请先写一句学习笔记。" };
  }

  return { message: `服务器已收到：${note}` };
}
