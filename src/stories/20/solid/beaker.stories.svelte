<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BeakerSvelte from '../../../lib/20/solid/beaker.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BeakerSvelte,
		args: { class: '' },
	})
</script>

<Story name="Beaker" />
