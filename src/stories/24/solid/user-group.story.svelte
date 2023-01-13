<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { UserGroup } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/UserGroup" icon="heroicons:user-group">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="UserGroup" icon="heroicons:user-group">
		<UserGroup class={className} />
	</Hst.Variant>
</Hst.Story>
