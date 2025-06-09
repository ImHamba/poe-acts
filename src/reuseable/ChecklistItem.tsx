import type { ReactNode } from "react";

type Props = { children: ReactNode };
const ChecklistItem = ({ children }: Props) => {
    return (
        <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="peer h-5 w-5 text-blue-600" />
            <span className="text-sm text-gray-800 peer-checked:line-through peer-checked:text-gray-400">
                {children}
            </span>
        </label>
    );
};

export default ChecklistItem;
