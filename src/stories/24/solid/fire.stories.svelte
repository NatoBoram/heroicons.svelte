<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FireSvelte from '../../../lib/24/solid/fire.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: FireSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Fire" />
