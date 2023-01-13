<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { User } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/User" icon="heroicons:user">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="User" icon="heroicons:user">
		<User class={className} />
	</Hst.Variant>
</Hst.Story>
