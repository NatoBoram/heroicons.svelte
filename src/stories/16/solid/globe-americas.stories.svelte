<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GlobeAmericasSvelte from '../../../lib/16/solid/globe-americas.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: GlobeAmericasSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="GlobeAmericas" />
