import type { Metadata } from "next";
import { ActionForm } from "../../ui/action-form";
import { ConceptNote, LessonFrame } from "../../ui/lesson";

export const metadata: Metadata = {
  title: "Server Action",
  description: "使用 Server Action 处理一个表单提交。",
};

const code = `// actions.ts
"use server";

export async function saveNote(formData: FormData) {
  const note = String(formData.get("note") ?? "").trim();

  if (!note) return { error: "请填写内容" };
  // 在这里写数据库或其他服务器逻辑
  return { message: \`已收到：\${note}\` };
}

// page.tsx
<form action={saveNote}>
  <textarea name="note" />
  <button type="submit">保存</button>
</form>`;

export default function ActionsPage() {
  return (
    <LessonFrame
      number="08"
      title="Server Action"
      description="Server Action 让表单可以直接调用服务器函数；配合 useFormStatus 和 useActionState 处理 pending 与返回结果。"
      route="/learn/actions"
      file="app/learn/actions/actions.ts"
      code={code}
    >
      <ActionForm />
      <ConceptNote title="真实项目里的安全边界">
        <p>Server Action 不是“只有页面能调用”的私有函数。真实项目仍要在 action 内验证身份、权限和输入，这个示例只演示调用链。</p>
      </ConceptNote>
    </LessonFrame>
  );
}
