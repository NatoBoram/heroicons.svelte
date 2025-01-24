<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FireSvelte from '../../../lib/20/solid/fire.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: FireSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Fire" />
