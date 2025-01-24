<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GlobeAltSvelte from '../../../lib/24/outline/globe-alt.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: GlobeAltSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="GlobeAlt" />
