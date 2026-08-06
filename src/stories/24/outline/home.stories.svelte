<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HomeSvelte from '../../../lib/24/outline/home.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: HomeSvelte,
		args: { class: '' },
	})
</script>

<Story name="Home" />
