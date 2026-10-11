"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="value-display" aria-live="polite">
        {count}
      </div>
      <div className="inline-actions">
        <button
          className="button-primary"
          type="button"
          onClick={() => setCount((value) => value + 1)}
        >
          增加 1
        </button>
        <button
          className="button-secondary"
          type="button"
          onClick={() => setCount(0)}
        >
          重置
        </button>
      </div>
    </div>
  );
}
