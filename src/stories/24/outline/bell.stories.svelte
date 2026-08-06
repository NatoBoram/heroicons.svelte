<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BellSvelte from '../../../lib/24/outline/bell.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BellSvelte,
		args: { class: '' },
	})
</script>

<Story name="Bell" />
