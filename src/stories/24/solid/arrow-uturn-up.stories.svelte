<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUturnUpSvelte from '../../../lib/24/solid/arrow-uturn-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowUturnUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowUturnUp" />
