<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BellSvelte from '../../../lib/20/solid/bell.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BellSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Bell" />
