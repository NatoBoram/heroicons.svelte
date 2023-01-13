<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { User } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/User" icon="heroicons:user">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="User" icon="heroicons:user">
		<User class={className} />
	</Hst.Variant>
</Hst.Story>
