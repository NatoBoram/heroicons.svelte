<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PhoneXMark } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/PhoneXMark" icon="heroicons:phone-x-mark">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PhoneXMark" icon="heroicons:phone-x-mark">
		<PhoneXMark class={className} />
	</Hst.Variant>
</Hst.Story>
