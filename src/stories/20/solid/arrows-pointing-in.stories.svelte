<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowsPointingInSvelte from '../../../lib/20/solid/arrows-pointing-in.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowsPointingInSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowsPointingIn" />
