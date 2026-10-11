import Link from "next/link";
import type { Lesson } from "../lib/lessons";

export function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <Link className="lesson-card" href={lesson.href}>
      <div className="card-topline">
        {lesson.number} · {lesson.tag}
      </div>
      <h3>{lesson.title}</h3>
      <p>{lesson.summary}</p>
      <span className="file-label">{lesson.file}</span>
    </Link>
  );
}
