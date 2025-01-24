<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowsPointingOutSvelte from '../../../lib/24/outline/arrows-pointing-out.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowsPointingOutSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowsPointingOut" />
