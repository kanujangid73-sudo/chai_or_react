import React from 'react';
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1 text-sm text-gray-300'>{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <textarea
            value={value || ""}
            onChange={onChange}
            placeholder="Write your post content here..."
            className="w-full h-60 px-3 py-2 rounded-lg bg-[#111827] text-white outline-none focus:bg-gray-800 duration-200 border border-gray-700 resize-y"
          />
        )}
      />
    </div>
  );
}