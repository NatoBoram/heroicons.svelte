<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BellSvelte from '../../../lib/24/outline/bell.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BellSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Bell" />
