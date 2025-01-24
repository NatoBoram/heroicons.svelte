<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowsPointingInSvelte from '../../../lib/24/solid/arrows-pointing-in.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowsPointingInSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowsPointingIn" />
