<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BeakerSvelte from '../../../lib/24/solid/beaker.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BeakerSvelte,
		args: { class: '' },
	})
</script>

<Story name="Beaker" />
