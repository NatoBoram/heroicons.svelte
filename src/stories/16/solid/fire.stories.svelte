<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FireSvelte from '../../../lib/16/solid/fire.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: FireSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Fire" />
