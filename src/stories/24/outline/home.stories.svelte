<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HomeSvelte from '../../../lib/24/outline/home.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: HomeSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Home" />
