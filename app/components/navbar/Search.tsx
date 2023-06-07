"use client";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="w-full cursor-pointer rounded border-[1px] py-2 shadow-sm transition hover:shadow-md md:w-auto">
      <div className="flex flex-row items-center justify-between">
        <div className="px-6 text-sm font-semibold">Where?</div>
        <div className="hidden flex-1 border-x-[1px] px-6 text-center text-sm font-semibold sm:block">
          When?
        </div>
        <div className="flex flex-row items-center gap-3 pl-6 pr-2 text-sm text-gray-600">
          <div className="hidden sm:block">Add guests</div>
          <div className="rounded bg-nomad-orange p-2 text-white">
            <SearchIcon className="h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
