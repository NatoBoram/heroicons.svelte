<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CogSvelte from '../../../lib/16/solid/cog.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CogSvelte,
		args: { class: '' },
	})
</script>

<Story name="Cog" />
