<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FireSvelte from '../../../lib/24/outline/fire.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: FireSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Fire" />
