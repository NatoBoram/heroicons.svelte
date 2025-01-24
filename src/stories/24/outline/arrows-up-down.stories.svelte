<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowsUpDownSvelte from '../../../lib/24/outline/arrows-up-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowsUpDownSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowsUpDown" />
