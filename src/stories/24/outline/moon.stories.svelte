<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MoonSvelte from '../../../lib/24/outline/moon.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: MoonSvelte,
		args: { class: '' },
	})
</script>

<Story name="Moon" />
