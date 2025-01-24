<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLongDownSvelte from '../../../lib/16/solid/arrow-long-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowLongDownSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowLongDown" />
