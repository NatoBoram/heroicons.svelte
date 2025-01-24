<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CogSvelte from '../../../lib/24/solid/cog.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CogSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Cog" />
