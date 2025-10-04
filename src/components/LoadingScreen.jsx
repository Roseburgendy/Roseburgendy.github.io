import { useEffect, useState } from "react";
import { FlowerLoader} from "./FlowerLoader";
export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Welcome";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        background: "var(--bg)",   // ✅ 使用全局主题背景
        color: "var(--text)",      // ✅ 使用全局文字色
      }}
    >
      {/* 打字动画 */}
      <div
        className="mb-4 text-4xl font-bold"
        style={{ color: "var(--accent)" }}
      >
        {text} <span className="animate-blink ml-1">|</span>
      </div>

      <FlowerLoader spin petals={12} />
      {/* 进度条 */}
    </div>
  );
};
