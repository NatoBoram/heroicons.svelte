<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowsPointingOutSvelte from '../../../lib/24/solid/arrows-pointing-out.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowsPointingOutSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowsPointingOut" />
