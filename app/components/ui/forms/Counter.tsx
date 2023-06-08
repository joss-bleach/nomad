"use client";
import { FC, useCallback } from "react";
import { Minus, Plus } from "lucide-react";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter: FC<CounterProps> = ({ title, subtitle, value, onChange }) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onSubtract = useCallback(() => {
    if (value === 1) {
      return;
    }
    onChange(value - 1);
  }, [value, onChange]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <h4 className="font-medium">{title}</h4>
        <h5 className="font-light text-gray-600">{subtitle}</h5>
      </div>
      <div className="flex flex-row items-center gap-4">
        <button
          onClick={onSubtract}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded border-[1px] border-neutral-400 text-neutral-600 transition hover:opacity-80"
        >
          <Minus />
        </button>
        <h3 className="text-xl font-light text-neutral-600">{value}</h3>
        <button
          onClick={onAdd}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded border-[1px] border-neutral-400 text-neutral-600 transition hover:opacity-80"
        >
          <Plus />
        </button>
      </div>
    </div>
  );
};

export default Counter;
