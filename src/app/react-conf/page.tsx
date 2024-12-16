import { Greeting } from '@/components/ReactConf/React Today and Tomorrow/Greeting'
import { GreetingNew } from '@/components/ReactConf/React Today and Tomorrow/GreetingNew'
import React from 'react'

export default function Page() {
	return (
		<div className="flex flex-col gap-6 w-full items-center p-6 bg-zinc-900">
			<Greeting />
			<GreetingNew />
		</div>
	)
}
