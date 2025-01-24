<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUturnUpSvelte from '../../../lib/16/solid/arrow-uturn-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowUturnUpSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowUturnUp" />
