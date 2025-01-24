<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CogSvelte from '../../../lib/16/solid/cog.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CogSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Cog" />
