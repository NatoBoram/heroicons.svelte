<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowsPointingInSvelte from '../../../lib/16/solid/arrows-pointing-in.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowsPointingInSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowsPointingIn" />
