<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GlobeAltSvelte from '../../../lib/24/outline/globe-alt.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: GlobeAltSvelte,
		args: { class: '' },
	})
</script>

<Story name="GlobeAlt" />
