'use client';

import React, { memo, useCallback, useMemo, useRef, useState } from 'react'

export default function Page() {
	const [text, setText] = useState("");
	const [text2, setText2] = useState("");

	const onOdd = useCallback(() => {
		setText("");
	}, [setText])

	const data = useMemo(() => ({ isEven: text2.length % 2 === 0, text2 }), [text2])

	return (
		<div className='p-4 border border-gray-400 flex flex-col gap-2'>
			<input className='text-black' value={text} onChange={(e) => setText(e.target.value)} />
			<input placeholder="text2" className='text-black' value={text2} onChange={(e) => setText2(e.target.value)} />
			<Count onOdd={onOdd} data={data} />
		</div>
	)
}

const Count = memo(({ onOdd, data }: { onOdd: () => void, data: unknown }) => {
	const [count, setCount] = useState(0);
	const renders = useRef(0);

	return (
		<div>
			<div>{data?.text2}</div>
			<div>count: {count}</div>
			<div>renders: {renders.current++}</div>
			<button onClick={() => {
				if (count % 2 === 0) {
					onOdd();
				}
				setCount(count + 1)
			}}>increment</button>
		</div>
	)
});

Count.displayName = "Count";