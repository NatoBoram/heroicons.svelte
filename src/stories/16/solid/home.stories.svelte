<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HomeSvelte from '../../../lib/16/solid/home.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: HomeSvelte,
		args: { class: '' },
	})
</script>

<Story name="Home" />
