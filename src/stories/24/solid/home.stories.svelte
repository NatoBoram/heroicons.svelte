<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HomeSvelte from '../../../lib/24/solid/home.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: HomeSvelte,
		args: { class: '' },
	})
</script>

<Story name="Home" />
