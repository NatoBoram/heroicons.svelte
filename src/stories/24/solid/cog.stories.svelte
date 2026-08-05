<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CogSvelte from '../../../lib/24/solid/cog.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CogSvelte,
		args: { class: '' },
	})
</script>

<Story name="Cog" />
