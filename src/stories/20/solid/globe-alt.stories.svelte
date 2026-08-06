<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GlobeAltSvelte from '../../../lib/20/solid/globe-alt.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: GlobeAltSvelte,
		args: { class: '' },
	})
</script>

<Story name="GlobeAlt" />
