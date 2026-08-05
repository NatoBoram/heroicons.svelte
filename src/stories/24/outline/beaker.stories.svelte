<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BeakerSvelte from '../../../lib/24/outline/beaker.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BeakerSvelte,
		args: { class: '' },
	})
</script>

<Story name="Beaker" />
