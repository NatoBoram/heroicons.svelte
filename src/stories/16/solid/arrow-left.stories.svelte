<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLeftSvelte from '../../../lib/16/solid/arrow-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowLeftSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowLeft" />
