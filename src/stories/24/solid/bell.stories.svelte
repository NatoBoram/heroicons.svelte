<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BellSvelte from '../../../lib/24/solid/bell.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BellSvelte,
		args: { class: '' },
	})
</script>

<Story name="Bell" />
