<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Users } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Users" icon="heroicons:users">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Users" icon="heroicons:users">
		<Users class={className} />
	</Hst.Variant>
</Hst.Story>
