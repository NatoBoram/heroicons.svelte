<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { BoltSlash } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/BoltSlash" icon="heroicons:bolt-slash">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="BoltSlash" icon="heroicons:bolt-slash">
		<BoltSlash class={className} />
	</Hst.Variant>
</Hst.Story>
