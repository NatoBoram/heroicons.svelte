<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MoonSvelte from '../../../lib/16/solid/moon.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: MoonSvelte,
		args: { class: '' },
	})
</script>

<Story name="Moon" />
