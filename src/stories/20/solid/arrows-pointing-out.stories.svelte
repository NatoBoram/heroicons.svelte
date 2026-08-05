<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowsPointingOutSvelte from '../../../lib/20/solid/arrows-pointing-out.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowsPointingOutSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowsPointingOut" />
