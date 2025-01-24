<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HomeSvelte from '../../../lib/20/solid/home.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: HomeSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Home" />
