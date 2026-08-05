<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GlobeAltSvelte from '../../../lib/16/solid/globe-alt.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: GlobeAltSvelte,
		args: { class: '' },
	})
</script>

<Story name="GlobeAlt" />
