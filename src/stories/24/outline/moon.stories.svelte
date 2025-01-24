<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MoonSvelte from '../../../lib/24/outline/moon.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: MoonSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Moon" />
