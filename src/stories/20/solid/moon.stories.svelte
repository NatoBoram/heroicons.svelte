<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MoonSvelte from '../../../lib/20/solid/moon.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: MoonSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Moon" />
