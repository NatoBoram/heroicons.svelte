<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GlobeAltSvelte from '../../../lib/24/solid/globe-alt.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: GlobeAltSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="GlobeAlt" />
