<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GlobeAmericasSvelte from '../../../lib/24/outline/globe-americas.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: GlobeAmericasSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="GlobeAmericas" />
