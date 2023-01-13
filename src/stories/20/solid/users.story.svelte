<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Users } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Users" icon="heroicons:users">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Users" icon="heroicons:users">
		<Users class={className} />
	</Hst.Variant>
</Hst.Story>
