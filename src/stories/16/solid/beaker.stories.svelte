<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BeakerSvelte from '../../../lib/16/solid/beaker.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BeakerSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Beaker" />
